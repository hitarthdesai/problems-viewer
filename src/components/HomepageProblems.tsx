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

export function HomepageProblems() {
	const { loading, error, data, fetchMore } = useQuery(GetProblemsDocument, {
		variables: {
			offset: 0,
			limit: 10,
		}
	});

	const problems = (!!error || loading ? [] : data?.problems) ?? [];

	return (
		<div className='flex flex-col items-center gap-4'>
			
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
			{problems.map((problem, index) => {
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
						<Card className="">
							<CardContent className="flex flex-col">
								<div className='flex items-center w-full justify-between'>
									<p className="text-xl font-bold text-muted-foreground">
										{index + 1}
									</p>
								<Badge
									className={cn(
										config.color,
										config.textColor,
										'text-xs font-normal ml-auto',
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
		<Button
			variant="secondary"
			onClick={async () => {
				await fetchMore({
					variables: {
						offset: problems.length,
					},
				});
			}}
		>
			more problems...
		</Button>
		</div>
	);
}
