import { z } from "zod";

export const companySchema = z.object({
    name: z.string(),
    type: z.literal("dir"),
    url: z.string().url(),
});

export type Company = z.infer<typeof companySchema>;