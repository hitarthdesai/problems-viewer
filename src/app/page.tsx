import Link from 'next/link';
import {  BookOpen, BarChart3, Tag, ChevronRight, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { HomepageTopics } from '@/components/homepage/HomepageTopics';
import { HomepageProblems } from '@/components/homepage/HomepageProblems';
import { HomepageCompanies } from '@/components/homepage/HomepageCompanies';
import { HomepageSearch } from '@/components/homepage/HomepageSearch';

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
				<section className="flex flex-col mx-auto max-w-3xl text-center">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Find Interview Questions from Top Companies
						</h1>
						<p className="mt-4 text-muted-foreground md:text-xl">
							Free access to thousands of real coding interview
							questions asked by leading tech companies
						</p>
							<HomepageSearch />
						<p className="mt-2 text-sm text-muted-foreground">
							Start typing to explore or try "Google"
						</p>
				</section>

				{/* <section className="w-full">
					<div className="flex items-center justify-between mb-6 w-full">
						<h2 className="text-2xl font-bold tracking-tight">
							Top Companies
						</h2>
						<Link href="/companies">
							<Button variant="link">
								View all companies
								<ChevronRight className="ml-1 h-4 w-4" />
							</Button>
						</Link>
					</div>
					<HomepageCompanies />
				</section>

				<section className="w-full">
					<div className="flex items-center justify-between mb-6 w-full">
						<h2 className="text-2xl font-bold tracking-tight">
							Trending Problems
						</h2>
						<Link href="/problems">
							<Button variant="link">
								View all problems
								<ChevronRight className="ml-1 h-4 w-4" />
							</Button>
						</Link>
					</div>
					<HomepageProblems />
				</section>

				<section className="w-full">
					<div className="flex items-center justify-between mb-6 w-full">
						<h2 className="text-2xl font-bold tracking-tight">
							Explore by Topic
						</h2>
						<Link href="/topics">
							<Button variant="link">
								View all problems
								<ChevronRight className="ml-1 h-4 w-4" />
							</Button>
						</Link>
					</div>
					<HomepageTopics />
				</section> */}

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
