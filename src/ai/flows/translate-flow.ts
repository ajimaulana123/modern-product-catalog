'use server';
/**
 * @fileOverview A flow to translate text to Indonesian.
 *
 * - translateToIndonesian - A function that handles the translation.
 * - TranslateInput - The input type for the translation function.
 * - TranslateOutput - The return type for the translation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateInputSchema = z.object({
  text: z.string().describe('The text to translate to Indonesian.'),
});
export type TranslateInput = z.infer<typeof TranslateInputSchema>;

const TranslateOutputSchema = z.object({
    translation: z.string().describe('The translated Indonesian text.'),
});
export type TranslateOutput = z.infer<typeof TranslateOutputSchema>;

export async function translateToIndonesian(input: TranslateInput): Promise<TranslateOutput> {
  return translateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'translatePrompt',
  input: {schema: TranslateInputSchema},
  output: {schema: TranslateOutputSchema},
  prompt: `Translate the following text to Indonesian: {{{text}}}`,
});

const translateFlow = ai.defineFlow(
  {
    name: 'translateFlow',
    inputSchema: TranslateInputSchema,
    outputSchema: TranslateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
