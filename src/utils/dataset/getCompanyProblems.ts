import { Problem, problemSchema } from '@/schemas/dataset';
import { octokit } from '@/utils/octokit';
import assert from 'node:assert';

const allFiles = [
	'1. Thirty Days.csv',
	'2. Three Months.csv',
	'3. Six Months.csv',
	'4. More Than Six Months.csv',
	'5. All.csv',
].map(file => file.replace(/\s/g, '%20'));

export async function getCompanyProblems(companyName: string) {
	const parsedProblems: Problem[] = [];

	for (const file of allFiles) {
		try {
			const company = companyName.split(' ').join('%20');
			const response = await octokit.request({
				method: 'GET',
				url: `/repos/liquidslr/leetcode-company-wise-problems/contents/${company}/${file}?ref=main`,
			});

			const decodedString = Buffer.from(
				response.data.content,
				'base64'
			).toString('utf-8');
			const lines = decodedString.split('\n');
			const headers = lines[0].split(',');

			const numHeaders = headers.length;
			const jsonData: Record<string, any> = {};
			lines.slice(1).forEach(line => {
				const values = line.split(',');

				const obj: Record<string, any> = {};
				headers.forEach((header, index) => {
					if (index >= numHeaders) {
						return;
					}

					if (header === 'Topics') {
						const topics = values
							.slice(index)
							.map(value => value.replace(/"/g, '').trim());
						obj[header] = topics;
					} else if (header === 'Link') {
						const slug = values?.[index]?.split('/')?.pop();
						!!slug && (obj['Slug'] = slug);
					} else {
						obj[header] = values?.[index];
					}
				});

				if (obj['Slug']) {
					if (jsonData[obj['Slug']]) {
						console.warn(
							`Duplicate problem found: ${obj['Slug']}. Skipping...`
						);
					} else {
						jsonData[obj['Slug']] = obj;
					}
				}
			});

			const data = Object.values(jsonData);
			assert(Array.isArray(data), 'Response data is not an array');

			data.reduce((acc, item) => {
				const parsed = problemSchema.safeParse(item);
				if (parsed.success) {
					acc.push(parsed.data);
				}

				return acc;
			}, parsedProblems);
		} catch (error) {
			console.error('Failed to fetch companies:', error);
		}
	}

	return parsedProblems;
}
