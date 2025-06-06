import { z } from "zod";

export const nodeLabelSchema = z.enum([
    "Company",
    "Problem",
    "Topic",
    "Difficulty"
]);

export const EnumNodeLabel = nodeLabelSchema.Enum;
