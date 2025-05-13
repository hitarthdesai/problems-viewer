import neo4j, { type Session, type Driver } from 'neo4j-driver';

export function createNeo4jDriver() {
	const driver = neo4j.driver(
		process.env.NEO4J_URL!,
		neo4j.auth.basic(
			process.env.NEO4J_USERNAME!,
			process.env.NEO4J_PASSWORD!
		)
	);

	return driver;
}

export async function closeNeo4jDriver(driver: Driver) {
	await driver.close();
}

export function createNeo4jSession(driver: Driver) {
	const session = driver.session({
		database: process.env.NEO4J_DATABASE!,
		defaultAccessMode: neo4j.session.WRITE,
	});

	return session;
}

export async function closeNeo4jSession(session: Session) {
	await session.close();
}
