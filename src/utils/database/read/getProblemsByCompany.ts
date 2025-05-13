import { Problem, problemSchema } from "@/schemas/dataset";
import { closeNeo4jDriver, closeNeo4jSession, createNeo4jDriver, createNeo4jSession } from "@/utils/database/neo4j";

type ProblemsByCompanyReturn = {
    companyName: string;
    problems: Problem[];
};

export async function getProblemsByCompany(slug: string): Promise<ProblemsByCompanyReturn> {
    const driver = createNeo4jDriver();
    const session = createNeo4jSession(driver);

    try {
        const query = `
            MATCH (c:Company)
            WHERE toLower(c.name) = toLower($slug)
            WITH c
            MATCH (c)-[:ASKED]->(p:Problem)
            OPTIONAL MATCH (p)-[:HAS_TOPIC]->(t:Topic)
            OPTIONAL MATCH (p)-[:HAS_DIFFICULTY]->(d:Difficulty)
            RETURN c.name as companyName, p, collect(t) as topics, collect(d) as difficulties
        `;
        
        const result = await session.run(
            query,
            { slug }
        );

        const companyName = result.records[0]?.get('companyName')?.toString() ?? '';
        const data = result.records.map((record) => {
            const problem = record.get('p').properties;
            const topics = new Set(record.get('topics').map((topic: any) => topic.properties.name));
            const difficulties = new Set(record.get('difficulties').map((difficulty: any) => difficulty.properties.name));

            return {
                Title: problem.title,
                Slug: problem.slug,
                Topics: Array.from(topics),
                Difficulty: difficulties.values().next().value,
            };
        });

        const parsedProblems: Problem[] = [];
        for (const d of data) {
            const p = problemSchema.safeParse(d);
            if (!p.success) {
                console.error("Problem validation failed:", p.error);
                console.error("Problem data:", d);
                continue;
            }
            
            parsedProblems.push(p.data);
        }

        return {companyName, problems: parsedProblems};
    } catch (error) {
        console.error('Error fetching problems by company:', error);
        return {companyName: '', problems: []};
    } finally {
        await closeNeo4jSession(session);
        await closeNeo4jDriver(driver);
    }
}