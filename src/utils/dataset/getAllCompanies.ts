import { type Company, companySchema } from '@/schemas/dataset';
import { octokit } from '@/utils/octokit';
import assert from 'node:assert';

export async function getAllCompanies() {
	try {
		const response = await octokit.request({
			method: 'GET',
			url: '/repos/liquidslr/leetcode-company-wise-problems/contents',
		});

		assert(Array.isArray(response.data), 'Response data is not an array');
		const parsedCompanies: Company[] = []
        response.data.reduce((acc, item) => {
			const parsed = companySchema.safeParse(item);
			if (parsed.success) {
				acc.push(parsed.data);
			}

			return acc;
		}, parsedCompanies);

		return parsedCompanies;
	} catch (error) {
		console.error('Failed to fetch companies:', error);
		return [];
	}
}
