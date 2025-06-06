import { EnumNodeLabel } from '@/schemas/database';
import { z } from 'zod';

const searchResultsSchema = z.array(
	z.object({
		id: z.object({ low: z.number(), high: z.number() }),
    }).and(z.discriminatedUnion('label', [
      z.object({ label: z.literal(EnumNodeLabel.Company), name: z.string() }),
      z.object({ label: z.literal(EnumNodeLabel.Problem), title: z.string(), slug: z.string() }),
      z.object({ label: z.literal(EnumNodeLabel.Topic), name: z.string() }),
    ]))
);

type SearchResultItem = z.infer<typeof searchResultsSchema>[number]

export const fetchSearchResults = async (
	query: string
): Promise<SearchResultItem[]> => {
	if (!query) return [];

	const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
	if (!response.ok) {
		throw new Error('Failed to fetch search results');
	}

    const _data = await response.json();
	const data = z.array(z.object({})).parse(_data).map(i => ({ ...i, label: i?.labels[0] }));
    const parsedData = searchResultsSchema.parse(data);
    console.log('Parsed search results:', parsedData);

	return parsedData
};
