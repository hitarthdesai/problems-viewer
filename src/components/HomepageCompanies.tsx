'use client';

import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { GetCompaniesDocument } from '@/graphql/__generated__/graphql';
import { LoadingButton } from '@/components/ui/loading-button';
import { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const MAX_ALLOWED_LOAD_MORE_PRESSES = 3;
const COMPANIES_TO_FETCH = 5;

function CompanyCardSkeleton() {
	return (
		<Card className="h-full animate-pulse">
			<CardContent className="p-4 flex flex-col items-center text-center gap-3">
				<Skeleton className="h-4 w-1/2 bg-gray-200 rounded font-medium" />
				<Skeleton className="h-3 w-1/3 bg-gray-200 rounded text-xs" />
			</CardContent>
		</Card>
	);
}

export function HomepageCompanies() {
	const [loadMorePressCount, setLoadMorePressCount] = useState(0);
	const { loading, error, data, previousData, fetchMore } = useQuery(
		GetCompaniesDocument,
		{
			variables: {
				offset: 0,
				limit: COMPANIES_TO_FETCH,
			},
		}
	);

	const companies =
		(!!error || loading
			? previousData?.companies ?? []
			: data?.companies) ?? [];

	return (
		<div className="flex flex-col items-center gap-4 ">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full">
				{loading ? Array.from({ length: COMPANIES_TO_FETCH }).map((_, index) => (
					<CompanyCardSkeleton key={index} />
				)) : companies.map(company => (
					<Link href={`/company/${company.name}`} key={company.id}>
						<Card className="h-full  ">
							<CardContent className="p-4 flex flex-col items-center text-center ">
								<h3 className="font-medium">{company.name}</h3>
								<p className="text-xs text-muted-foreground">
									{company.problemCount} problems
								</p>
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
								offset: companies.length,
								limit: COMPANIES_TO_FETCH,
							},
							updateQuery(previousQueryResult, options) {
								const newCompanies =
									options.fetchMoreResult?.companies ?? [];

								return {
									...previousQueryResult,
									companies: [
										...previousQueryResult.companies,
										...newCompanies,
									],
								};
							},
						});
					}}
				>
					View {COMPANIES_TO_FETCH} more companies...
				</LoadingButton>
			) : (
				<Link href="/companies">
					<Button variant="secondary">
						view all companies
						<ChevronRightIcon className="h-4 w-4" />
					</Button>
				</Link>
			)}
		</div>
	);
}
