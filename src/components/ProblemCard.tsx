import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import {
	EnumProblemDifficulty,
	type ProblemDifficulty,
} from '@/schemas/dataset';

type ProblemCardProps = {
	id: string;
	title: string;
	difficulty: ProblemDifficulty;
	topics: string[];
};

const difficultyColor = {
	[EnumProblemDifficulty.EASY]:
		'bg-green-100 text-green-800 hover:bg-green-100/80 dark:bg-green-800/20 dark:text-green-400',
	[EnumProblemDifficulty.MEDIUM]:
		'bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 dark:bg-yellow-800/20 dark:text-yellow-400',
	[EnumProblemDifficulty.HARD]:
		'bg-red-100 text-red-800 hover:bg-red-100/80 dark:bg-red-800/20 dark:text-red-400',
};

export function ProblemCard({
	id,
	title,
	difficulty,
	topics,
}: ProblemCardProps) {
	return (
		<Card className="overflow-hidden transition-all hover:shadow-md">
			<CardHeader className="p-4 pb-0 flex flex-row justify-between items-start">
				<div>
					<h3 className="font-medium line-clamp-2">{title}</h3>
					<Badge
						variant="secondary"
						className={difficultyColor[difficulty]}
					>
						{difficulty.charAt(0).toUpperCase() +
							difficulty.slice(1)}
					</Badge>
				</div>
				<Button variant="ghost" size="icon" className="h-8 w-8">
					<Star className="h-4 w-4" />
				</Button>
			</CardHeader>
			<CardContent className="p-4">
				<div className="flex flex-wrap gap-2">
					{topics.slice(0, 2).map(topic => (
						<Badge key={topic} variant="outline">
							{topic}
						</Badge>
					))}
					{topics.length > 2 && (
						<Badge variant="outline">+{topics.length - 2}</Badge>
					)}
				</div>
			</CardContent>
			<CardFooter className="p-4 pt-0 flex justify-between">
				<Button variant="ghost" size="sm" className="text-xs">
					View Solution
				</Button>
				<Button size="sm" className="text-xs">
					Solve
				</Button>
			</CardFooter>
		</Card>
	);
}
