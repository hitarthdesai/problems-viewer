import { ProblemDifficulty } from "@/graphql/__generated__/graphql";

type BadgeConfig = {
    color: string;
    textColor: string;
    label: string;
}

const difficultyConfig: Record<ProblemDifficulty, BadgeConfig> = {
    [ProblemDifficulty.Easy]: {
        color: 'bg-green-500',
        textColor: 'text-primary-foreground',
        label: 'Easy',
    },
    [ProblemDifficulty.Medium]: {
        color: 'bg-yellow-500',
        textColor: 'text-primary-foreground',
        label: 'Medium',
    },
    [ProblemDifficulty.Hard]: {
        color: 'bg-red-500',
        textColor: 'text-primary-foreground',
        label: 'Hard',
    },
};

export function getDifficultyBadgeConfig(difficulty: ProblemDifficulty): BadgeConfig {
    return difficultyConfig[difficulty];
}