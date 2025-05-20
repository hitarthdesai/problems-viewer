'use client';

import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';
import { GetTopicsDocument } from '@/graphql/__generated__/graphql';

export function HomepageTopics() {
	const { loading, error, data } = useQuery(GetTopicsDocument);
	const topics = (!!error || loading ? [] : data?.topics?.map(t => t.name)) ?? [];

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
			{topics.map(topic => (
				<Link href="#" key={topic}>
					<Card className="hover:bg-muted/50 transition-colors h-full">
						<CardContent className="p-4 flex items-center h-full">
							<Tag className="mr-2 h-4 w-4 text-muted-foreground" />
							<span className="text-sm">{topic}</span>
						</CardContent>
					</Card>
				</Link>
			))}
		</div>
	);
}
