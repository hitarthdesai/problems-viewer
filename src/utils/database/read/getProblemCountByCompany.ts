import { closeNeo4jDriver, closeNeo4jSession, createNeo4jDriver, createNeo4jSession } from "@/utils/database/neo4j";

type ProblemCountByCompanyReturn = {
    companyName: string;
    problemCount: number;
};

export async function getProblemCountByCompany(
    slug: string
): Promise<ProblemCountByCompanyReturn> {
    const driver = createNeo4jDriver();
    const session = createNeo4jSession(driver);

    try {
        const result = await session.run(
            'MATCH (c:Company {slug: $slug})-[:ASKED]->(p:Problem) RETURN c.slug as companyName, COUNT(p) AS problemCount',
            { slug }
        );

        const companyName = result.records[0]?.get('companyName')?.toString() ?? '';
        const problemCount = result.records[0]?.get('problemCount')?.toInt() ?? 0;

        return { companyName, problemCount };
    } catch (error) {
        console.error('Error fetching problem count by company:', error);
        return { companyName: '', problemCount: 0 };
    } finally {
        await closeNeo4jSession(session);
        await closeNeo4jDriver(driver);
    }
}