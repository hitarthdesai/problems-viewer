'use client';

import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';
import { GetTopicsDocument } from '@/graphql/__generated__/graphql';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { LoadingButton } from '@/components/ui/loading-button';
import { useState } from 'react';

const MAX_ALLOWED_LOAD_MORE_PRESSES = 3;
const TOPICS_TO_FETCH = 5;

function TopicCardSkeleton() {
  return (
	<Card className="h-full animate-pulse">
	  <CardContent className="flex gap-2 items-center h-full py-0.5">
		<Skeleton className="h-4 w-4 rounded-full bg-gray-200" />
		<Skeleton className="h-4 w-2/3 bg-gray-200 rounded text-sm" />
	  </CardContent>
	</Card>
  );
}

export function HomepageTopics() {
  const [loadMorePressCount, setLoadMorePressCount] = useState(0);
  const { loading, error, data, previousData, fetchMore } = useQuery(
	GetTopicsDocument,
	{
	  variables: {
		offset: 0,
		limit: TOPICS_TO_FETCH,
	  },
	}
  );

  const topics =
	(!!error || loading
	  ? previousData?.topics?.map(t => t.name) ?? []
	  : data?.topics?.map(t => t.name)) ?? [];

  return (
	<div className="flex flex-col items-center gap-4">
	  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full">
		{loading && topics.length === 0
		  ? Array.from({ length: TOPICS_TO_FETCH }).map((_, index) => (
			  <TopicCardSkeleton key={index} />
			))
		  : topics.map(topic => (
			  <Link href="#" key={topic}>
				<Card className="h-full">
				  <CardContent className="flex gap-2 items-center h-full">
					<Tag className="h-4 w-4 text-muted-foreground" />
					<span className="text-sm truncate">{topic}</span>
				  </CardContent>
				</Card>
			  </Link>
			))}
	  </div>
	  {loadMorePressCount < MAX_ALLOWED_LOAD_MORE_PRESSES ? (
		<LoadingButton
		  isLoading={loading}
		  variant="secondary"
		  onClick={async () => {
			setLoadMorePressCount(prev => prev + 1);
			await fetchMore({
			  variables: {
				offset: topics.length,
				limit: TOPICS_TO_FETCH,
			  },
			  updateQuery(previousQueryResult, options) {
				const newTopics = options.fetchMoreResult?.topics ?? [];
				return {
				  ...previousQueryResult,
				  topics: [
					...previousQueryResult.topics,
					...newTopics,
				  ],
				};
			  },
			});
		  }}
		>
		  View {TOPICS_TO_FETCH} more topics...
		</LoadingButton>
	  ) : (
		<Button variant="secondary">
		  view all topics
		</Button>
	  )}
	</div>
  );
}
