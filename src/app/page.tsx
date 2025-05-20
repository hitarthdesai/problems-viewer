import Link from 'next/link';
import Image from 'next/image';
import {
	Search,
	Star,
	Clock,
	BookOpen,
	BarChart3,
	Tag,
	ChevronRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HomepageTopics } from '@/components/HomepageTopics';

const topCompanies = [
	{
		name: 'Google',
		problems: 145,
		lastUpdated: '2 days ago',
	},
	{
		name: 'Amazon',
		problems: 132,
		lastUpdated: '1 week ago',
	},
	{
		name: 'Microsoft',
		problems: 118,
		lastUpdated: '3 days ago',
	},
	{
		name: 'Meta',
		problems: 105,
		lastUpdated: '5 days ago',
	},
	{
		name: 'Apple',
		problems: 92,
		lastUpdated: '1 day ago',
	},
	{
		name: 'Bloomberg',
		problems: 87,
		lastUpdated: '4 days ago',
	},
	{
		name: 'Uber',
		problems: 76,
		lastUpdated: '1 week ago',
	},
	{
		name: 'Airbnb',
		problems: 68,
		lastUpdated: '2 weeks ago',
	},
];

const trendingProblems = [
	{
		title: 'Two Sum',
		companies: ['Google', 'Amazon', 'Microsoft'],
		difficulty: 'Easy',
	},
	{
		title: 'LRU Cache',
		companies: ['Meta', 'Uber', 'Bloomberg'],
		difficulty: 'Medium',
	},
	{
		title: 'Merge K Sorted Lists',
		companies: ['Amazon', 'Google'],
		difficulty: 'Hard',
	},
	{
		title: 'Valid Parentheses',
		companies: ['Microsoft', 'Amazon'],
		difficulty: 'Easy',
	},
	{
		title: 'Trapping Rain Water',
		companies: ['Google', 'Meta', 'Apple'],
		difficulty: 'Hard',
	},
];

const recentUpdates = [
	{ company: 'Uber', count: 12, date: 'May 15, 2024' },
	{ company: 'Airbnb', count: 8, date: 'May 12, 2024' },
	{ company: 'Stripe', count: 15, date: 'May 10, 2024' },
];

const topics = [
	'Arrays',
	'Strings',
	'Linked Lists',
	'Trees',
	'Graphs',
	'Dynamic Programming',
	'Sorting',
	'Searching',
	'Greedy',
	'Backtracking',
];

export default function HomePage() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className=" flex h-14 items-center">
					<Link
						href="/"
						className="flex items-center space-x-2 font-bold"
					>
						<BookOpen className="h-5 w-5" />
						<span>InterviewPrep</span>
					</Link>
					<nav className="ml-auto flex items-center gap-4">
						<Link href="#" className="text-sm font-medium">
							Companies
						</Link>
						<Link href="#" className="text-sm font-medium">
							Problems
						</Link>
						<Link href="#" className="text-sm font-medium">
							Topics
						</Link>
						<Button size="sm">Sign In</Button>
					</nav>
				</div>
			</header>
			<main className="flex-1 py-8 md:py-12 gap-8 md:gap-12 flex flex-col items-center">
				<section>
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Find Interview Questions from Top Companies
						</h1>
						<p className="mt-4 text-muted-foreground md:text-xl">
							Free access to thousands of real coding interview
							questions asked by leading tech companies
						</p>
						<div className="mt-6 flex items-center w-full max-w-md mx-auto relative">
							<Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search companies or problems..."
								className="pl-10 pr-4 py-6 text-base"
							/>
						</div>
						<p className="mt-2 text-sm text-muted-foreground">
							Start typing to explore or try "Google Two Sum"
						</p>
					</div>
				</section>

				{/* Top Companies Section */}
				<section>
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-bold tracking-tight">
							Top Companies
						</h2>
						<Link
							href="#"
							className="text-sm font-medium flex items-center"
						>
							View all companies{' '}
							<ChevronRight className="ml-1 h-4 w-4" />
						</Link>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{topCompanies.map(company => (
							<Link href="#" key={company.name}>
								<Card className="h-full hover:bg-muted/50 transition-colors">
									<CardContent className="p-4 flex flex-col items-center text-center">
										<div className="mb-3 mt-2 flex h-12 w-12 items-center justify-center">
											{/* <Image
												src={
													company.logo ||
													'/placeholder.svg'
												}
												alt={company.name}
												width={40}
												height={40}
												className="rounded-md"
											/> */}
										</div>
										<h3 className="font-medium">
											{company.name}
										</h3>
										<p className="text-xs text-muted-foreground mt-1">
											{company.problems} problems •
											Updated {company.lastUpdated}
										</p>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</section>

				{/* Trending Problems Section */}
				<section>
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-bold tracking-tight">
							Trending Problems
						</h2>
						<Link
							href="#"
							className="text-sm font-medium flex items-center"
						>
							View all problems{' '}
							<ChevronRight className="ml-1 h-4 w-4" />
						</Link>
					</div>
					<div className="space-y-4">
						{trendingProblems.map((problem, index) => (
							<Link href="#" key={problem.title}>
								<Card className="hover:bg-muted/50 transition-colors">
									<CardContent className="p-4 flex items-center">
										<div className="mr-4 text-xl font-bold text-muted-foreground">
											{index + 1}
										</div>
										<div className="flex-1">
											<h3 className="font-medium">
												{problem.title}
											</h3>
											<div className="flex flex-wrap gap-2 mt-1">
												{problem.companies.map(
													company => (
														<Badge
															key={company}
															variant="outline"
															className="text-xs"
														>
															{company}
														</Badge>
													)
												)}
											</div>
										</div>
										<Badge
											className={
												problem.difficulty === 'Easy'
													? 'bg-green-500'
													: problem.difficulty ===
													  'Medium'
													? 'bg-yellow-500'
													: 'bg-red-500'
											}
										>
											{problem.difficulty}
										</Badge>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</section>

				{/* By Difficulty or Topic Section */}
				<section>
					<h2 className="text-2xl font-bold tracking-tight mb-6">
						Explore by Category
					</h2>
					<Tabs defaultValue="difficulty">
						<TabsList className="mb-4">
							<TabsTrigger value="difficulty">
								Difficulty
							</TabsTrigger>
							<TabsTrigger value="topics">Topics</TabsTrigger>
						</TabsList>
						<TabsContent value="difficulty" className="space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<Card className="hover:bg-muted/50 transition-colors border-green-200">
									<CardContent className="p-6 flex items-center">
										<div className="mr-4 p-2 rounded-full bg-green-100">
											<Star className="h-5 w-5 text-green-500" />
										</div>
										<div>
											<h3 className="font-medium">
												Easy
											</h3>
											<p className="text-sm text-muted-foreground">
												428 problems
											</p>
										</div>
									</CardContent>
								</Card>
								<Card className="hover:bg-muted/50 transition-colors border-yellow-200">
									<CardContent className="p-6 flex items-center">
										<div className="mr-4 p-2 rounded-full bg-yellow-100">
											<Star className="h-5 w-5 text-yellow-500" />
										</div>
										<div>
											<h3 className="font-medium">
												Medium
											</h3>
											<p className="text-sm text-muted-foreground">
												732 problems
											</p>
										</div>
									</CardContent>
								</Card>
								<Card className="hover:bg-muted/50 transition-colors border-red-200">
									<CardContent className="p-6 flex items-center">
										<div className="mr-4 p-2 rounded-full bg-red-100">
											<Star className="h-5 w-5 text-red-500" />
										</div>
										<div>
											<h3 className="font-medium">
												Hard
											</h3>
											<p className="text-sm text-muted-foreground">
												294 problems
											</p>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>
						<TabsContent value="topics">
							<HomepageTopics />
						</TabsContent>
					</Tabs>
				</section>

				{/* Recent Dataset Updates */}
				<section>
					<h2 className="text-2xl font-bold tracking-tight mb-6">
						Recent Updates
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{recentUpdates.map(update => (
							<Card
								key={update.company}
								className="hover:bg-muted/50 transition-colors"
							>
								<CardContent className="p-4">
									<div className="flex items-center mb-2">
										<Clock className="mr-2 h-4 w-4 text-muted-foreground" />
										<span className="text-sm text-muted-foreground">
											{update.date}
										</span>
									</div>
									<p className="font-medium">
										We just added {update.count} problems
										asked by {update.company} in 2024
									</p>
									<Link
										href="#"
										className="text-sm text-primary mt-2 inline-block"
									>
										View problems →
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Why Use This Site */}
				<section>
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
							Why Use InterviewPrep?
						</h2>
						<p className="mt-4 text-muted-foreground">
							LeetCode company problems are hidden behind a
							paywall—here they're free
						</p>
						<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
							<div className="flex flex-col items-center p-4">
								<div className="mb-3 rounded-full bg-primary/10 p-2">
									<Search className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-base font-medium">
									Comprehensive
								</h3>
								<p className="mt-1 text-sm text-muted-foreground text-center">
									Thousands of real interview questions
								</p>
							</div>
							<div className="flex flex-col items-center p-4">
								<div className="mb-3 rounded-full bg-primary/10 p-2">
									<BarChart3 className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-base font-medium">
									Up-to-date
								</h3>
								<p className="mt-1 text-sm text-muted-foreground text-center">
									Regularly updated with new questions
								</p>
							</div>
							<div className="flex flex-col items-center p-4">
								<div className="mb-3 rounded-full bg-primary/10 p-2">
									<Tag className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-base font-medium">
									Organized
								</h3>
								<p className="mt-1 text-sm text-muted-foreground text-center">
									Categorized by company, topic, and
									difficulty
								</p>
							</div>
							<div className="flex flex-col items-center p-4">
								<div className="mb-3 rounded-full bg-primary/10 p-2">
									<BookOpen className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-base font-medium">
									Free Access
								</h3>
								<p className="mt-1 text-sm text-muted-foreground text-center">
									No paywalls or premium tiers
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* User Features Preview */}
				<section>
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="text-2xl font-bold tracking-tight">
							Enhance Your Prep Experience
						</h2>
						<p className="mt-4 text-muted-foreground">
							Track progress. Bookmark problems. Add notes. Sync
							across devices.
						</p>
						<Button className="mt-6" size="lg">
							Sign in to unlock
						</Button>
					</div>
				</section>
			</main>
			<footer className="border-t py-6 md:py-0">
				<div className=" flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} InterviewPrep. All rights
						reserved.
					</p>
					<div className="flex gap-4">
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:underline"
						>
							About
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:underline"
						>
							Privacy
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:underline"
						>
							Terms
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:underline"
						>
							Feedback
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
