import { z } from "zod";

export const companySchema = z.object({
    name: z.string(),
    type: z.literal("dir"),
    url: z.string().url(),
});

export type Company = z.infer<typeof companySchema>;

const problemDifficultySchema = z.enum([
    "EASY",
    "MEDIUM",
    "HARD",
]);

export const EnumProblemDifficulty = problemDifficultySchema.Enum;

export type ProblemDifficulty = z.infer<typeof problemDifficultySchema>;

export const problemSchema = z.object({
    Difficulty: problemDifficultySchema,
    Title: z.string(),
    Slug: z.string(),
    Topics: z.array(z.string()),
})

export type Problem = z.infer<typeof problemSchema>;