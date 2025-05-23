'use client';

import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
	GetProblemsDocument,
	ProblemDifficulty,
} from '@/graphql/__generated__/graphql';
import { Badge } from '@/components/ui/badge';
import { getDifficultyBadgeConfig } from '@/domain/getDifficultyBadgeConfig';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { LoadingButton } from '@/components/ui/loading-button';
import { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';

const MAX_ALLOWED_LOAD_MORE_PRESSES = 3;
const PROBLEMS_TO_FETCH = 5;

function ProblemCardSkeleton() {
	return (
		<Card className="h-full animate-pulse">
			<CardContent className="flex flex-col gap-5">
				<div className="flex items-center w-full justify-between">
					<Skeleton className="h-4 w-1/6 bg-gray-200 rounded font-bold text-xl" />
					<Skeleton className="h-4 w-1/4 bg-gray-200 rounded text-xs" />
				</div>
				<Skeleton className="h-4 w-1/2 bg-gray-200 rounded font-medium" />
			</CardContent>
		</Card>
	);
}
export function HomepageProblems() {
	const [loadMorePressCount, setLoadMorePressCount] = useState(0);
	const { loading, error, data, previousData, fetchMore } = useQuery(
		GetProblemsDocument,
		{
			variables: {
				offset: 0,
				limit: PROBLEMS_TO_FETCH,
			},
		}
	);

	const problems =
		(!!error || loading
			? previousData?.problems ?? []
			: data?.problems) ?? [];

	return (
		<div className="flex flex-col items-center gap-4">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full">
				{loading && problems.length === 0
					? Array.from({ length: PROBLEMS_TO_FETCH }).map((_, index) => (
							<ProblemCardSkeleton key={index} />
						))
					: problems.map((problem, index) => {
							const difficulty = problem.difficulty.at(0)?.name!;
							const config = getDifficultyBadgeConfig(
								difficulty ?? ProblemDifficulty.Easy
							);

							return (
								<Link
									href={`https://leetcode.com/problems/${problem.slug}`}
									key={problem.slug}
									target="_blank"
								>
									<Card className="h-full">
										<CardContent className="flex flex-col">
											<div className="flex items-center w-full justify-between">
												<p className="text-xl font-bold text-muted-foreground">
													{index + 1}
												</p>
												<Badge
													className={cn(
														config.color,
														config.textColor,
														'text-xs font-normal ml-auto'
													)}
												>
													{config.label}
												</Badge>
											</div>
											<div>
												<h3 className="font-medium truncate">
													{problem.title}
												</h3>
											</div>
										</CardContent>
									</Card>
								</Link>
							);
						})}
			</div>
			{loadMorePressCount < MAX_ALLOWED_LOAD_MORE_PRESSES ? (
				<LoadingButton
					isLoading={loading}
					variant="secondary"
					onClick={async () => {
						setLoadMorePressCount((prev) => prev + 1);
						await fetchMore({
							variables: {
								offset: problems.length,
								limit: PROBLEMS_TO_FETCH,
							},
							updateQuery(previousQueryResult, options) {
								const newProblems = options.fetchMoreResult?.problems ?? [];
								return {
									...previousQueryResult,
									problems: [
										...previousQueryResult.problems,
										...newProblems,
									],
								};
							},
						});
					}}
				>
					View {PROBLEMS_TO_FETCH} more problems...
				</LoadingButton>
			) : (
				<Link href="/problems">
					<Button variant="secondary">
						view all problems
						<ChevronRightIcon className="h-4 w-4" />
					</Button>
				</Link>
			)}
		</div>
	);
}
