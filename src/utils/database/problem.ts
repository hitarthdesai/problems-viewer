import { EnumProblemDifficulty, type Problem } from '@/schemas/dataset';
import { type Session } from 'neo4j-driver';

export async function createDifficultyNodes(session: Session) {
	const difficulties = [
		EnumProblemDifficulty.EASY,
		EnumProblemDifficulty.MEDIUM,
		EnumProblemDifficulty.HARD,
	];

	for (const difficulty of difficulties) {
		const existingDifficulty = await session.run(
			'MATCH (d:Difficulty {name: $name}) RETURN d',
			{ name: difficulty }
		);

		if (existingDifficulty.records.length > 0) {
			console.log(`EXISTS: (${difficulty})`);
		} else {
			await session.run('CREATE (d:Difficulty {name: $name}) RETURN d', {
				name: difficulty,
			});
			console.log(`CREATED: (${difficulty})`);
		}
	}
}

async function createTopicNode(session: Session, topic: string) {
	const existingTopic = await session.run(
		'MATCH (t:Topic {name: $name}) RETURN t',
		{ name: topic }
	);

	if (existingTopic.records.length > 0) {
		console.log(`EXISTS: (${topic})`);
	} else {
		await session.run('CREATE (t:Topic {name: $name}) RETURN t', {
			name: topic,
		});
		console.log(`CREATED: (${topic})`);
	}
}

async function createProblemRelationships(
	session: Session,
	problem: Problem
): Promise<void> {
	const difficultyRelationshipResult = await session.run(
		`
		MATCH (p:Problem {slug: $slug}), (d:Difficulty {name: $difficulty})
		WHERE NOT EXISTS {
			MATCH (p)-[:HAS_DIFFICULTY]->(d)
		}
		CREATE (p)-[:HAS_DIFFICULTY]->(d)
		`,
		{
			slug: problem.Slug,
			difficulty: problem.Difficulty,
		}
	);

	const relationshipsCreated = difficultyRelationshipResult.summary.counters.updates().relationshipsCreated
	if (relationshipsCreated > 0) {
		console.log(`CREATED: ${problem.Slug}->[HAS_DIFFICULTY]->${problem.Difficulty}`);
	}
	else {
		console.log(`EXISTS: ${problem.Slug}->[HAS_DIFFICULTY]->${problem.Difficulty}`);
	}

	for (const topic of problem.Topics) {
		await createTopicNode(session, topic);

		const topicRelationshipResult = await session.run(
			`
			MATCH (p:Problem {slug: $slug}), (t:Topic {name: $topic})
			WHERE NOT EXISTS {
				MATCH (p)-[:HAS_TOPIC]->(t)
			}
			CREATE (p)-[:HAS_TOPIC]->(t)
			`,
			{
				slug: problem.Slug,
				topic,
			}
		);

		const topicRelationshipsCreated = topicRelationshipResult.summary.counters.updates().relationshipsCreated
		if (topicRelationshipsCreated > 0) {
			console.log(`CREATED: ${problem.Slug}->[HAS_TOPIC]->${topic}`);
		}
		else {
			console.log(`EXISTS: ${problem.Slug}->[HAS_TOPIC]->${topic}`);
		}
	}
}

export async function createProblemNodeAndRelationships(
	session: Session,
	problem: Problem,
): Promise<void> {
	try {
		const existingResult = await session.run(
			'MATCH (p:Problem {slug: $slug}) RETURN p',
			{ slug: problem.Slug }
		);

		if (existingResult.records.length > 0) {
			console.log(`EXISTS: (${problem.Slug})`);
		} else {
			await session.run(
				'CREATE (p:Problem {slug: $slug, title: $title}) RETURN p',
				{
					title: problem.Title,
					slug: problem.Slug,
				}
			);
			console.log(`CREATED: (${problem.Slug})`);
		}

		await createProblemRelationships(session, problem);
	} catch (error) {
		console.error('Error creating problem node:', error);
	}
}

export async function attachProblemAndCompany(
	session: Session,
	slug: string,
	companyName: string
): Promise<void> {
	try {
		const result = await session.run(
			`
			MATCH (p:Problem {slug: $slug}), (c:Company {name: $companyName})
			WHERE NOT EXISTS {
				MATCH (c)-[:ASKED]->(p)
			}
			CREATE (c)-[:ASKED]->(p)
			`,
			{
				slug,
				companyName,
			}
		);

		const relationshipsCreated = result.summary.counters.updates().relationshipsCreated
		if (relationshipsCreated > 0) {
			console.log(`CREATED: (${companyName})->[ASKED]->(${slug})`);
		}
		else {
			console.log(`EXISTS: (${companyName})->[ASKED]->(${slug})`);
		}

	} catch (error) {
		console.error('Error attaching problem and company:', error);
	}
}