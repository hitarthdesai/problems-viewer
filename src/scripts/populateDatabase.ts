import { createCompanyNode } from '@/utils/database/company';
import { closeNeo4jDriver, closeNeo4jSession, createNeo4jDriver, createNeo4jSession } from '@/utils/database/neo4j';
import { getAllCompanies } from '@/utils/dataset/getAllCompanies';

export async function populateDatabase() {
    const driver = createNeo4jDriver();
    const session = createNeo4jSession(driver);

	try {
		const companies = await getAllCompanies();
		for (const company of companies) {
			await createCompanyNode(session, company.name);
		}
	} catch (error) {
		console.error('Error populating database:', error);
	} finally {
        closeNeo4jSession(session);
        closeNeo4jDriver(driver);
	}
}
