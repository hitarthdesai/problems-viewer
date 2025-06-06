import {
	closeNeo4jDriver,
	closeNeo4jSession,
	createNeo4jDriver,
	createNeo4jSession,
} from '@/utils/database/neo4j';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('q') ?? '';

	if (!query) {
		return NextResponse.json({ results: [] });
	}

	const driver = createNeo4jDriver();
	const session = createNeo4jSession(driver);

	try {
		const searchQuery = `CALL db.index.fulltext.queryNodes("companiesProblemsAndTopics", $query) YIELD node, score
		RETURN node { .*, id: id(node), label: labels(node) } AS result
		ORDER BY score DESC
		LIMIT 5`;
		const params = { query: `${query}~` };
		const result = await session.run(searchQuery, params);

		return NextResponse.json(
			result.records.map(record => record.get('result'))
		);
	} catch (e) {
		console.error(e);
		return NextResponse.json({ error: e }, { status: 500 });
	} finally {
		await closeNeo4jSession(session);
		await closeNeo4jDriver(driver);
	}
}
