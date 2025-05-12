import { type Session } from 'neo4j-driver';

export async function createCompanyNode(
	session: Session,
	name: string
): Promise<void> {
	try {
		const existingResult = await session.run(
			'MATCH (c:Company {name: $name}) RETURN c',
			{ name }
		);

		if (existingResult.records.length > 0) {
			throw new Error(`Company with name "${name}" already exists.`);
		}

		await session.run('CREATE (c:Company {name: $name}) RETURN c', {
			name,
		});
	} catch (error) {
		console.error('Error creating company node:', error);
	}
}
