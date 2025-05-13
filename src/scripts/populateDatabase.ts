import { createCompanyNode } from '@/utils/database/company';
import { closeNeo4jDriver, closeNeo4jSession, createNeo4jDriver, createNeo4jSession } from '@/utils/database/neo4j';
import { attachProblemAndCompany, createDifficultyNodes, createProblemNodeAndRelationships } from '@/utils/database/problem';
import { getAllCompanies } from '@/utils/dataset/getAllCompanies';
import { getCompanyProblems } from '@/utils/dataset/getCompanyProblems';

export async function populateDatabase() {
    const driver = createNeo4jDriver();
    const session = createNeo4jSession(driver);

	try {
    	await createDifficultyNodes(session);

		const companies = await getAllCompanies();
		for (const company of companies) {
			await createCompanyNode(session, company.name);
            const problems = await getCompanyProblems(company.name);
            for (const problem of problems) {
                await createProblemNodeAndRelationships(session, problem);
				await attachProblemAndCompany(session, problem.Slug, company.name);
            }
		}
	} catch (error) {
		console.error('Error populating database:', error);
	} finally {
        await closeNeo4jSession(session);
        await closeNeo4jDriver(driver);
	}
}
