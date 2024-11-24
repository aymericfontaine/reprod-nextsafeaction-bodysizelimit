"use server";

import { actionClient } from "@/lib/safe-action";
import { z } from "zod";

const schema = z.object({
  file: z.instanceof(File),
});

export const sendFile = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { file } }) => {
    console.log("file", file.name);
    return { success: true };
  });
