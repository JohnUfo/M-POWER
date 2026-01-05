
import { GoogleGenAI, Type } from "@google/genai";
import { ExecutionResult } from "../types";

export const simulateExecution = async (code: string): Promise<ExecutionResult> => {
  // Always create a new instance right before use with the correct named parameter.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Act as a professional Python 3 interpreter and tutor. 
    Analyze the following code and provide the exact output it would produce in a standard Python environment.
    
    Code to evaluate:
    \`\`\`python
    ${code}
    \`\`\`

    Rules:
    1. If the code is valid, provide the standard output (STDOUT).
    2. If there is a syntax error or runtime error, provide the error message exactly as Python would.
    3. Also provide a brief, one-sentence explanation of what happened or why the error occurred.
  `;

  try {
    // Upgraded to gemini-3-pro-preview for advanced coding and reasoning tasks.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            output: { type: Type.STRING, description: "The raw text output or error message" },
            isError: { type: Type.BOOLEAN, description: "True if an error occurred" },
            explanation: { type: Type.STRING, description: "A helpful tutor explanation" }
          },
          required: ["output", "isError", "explanation"]
        }
      }
    });

    // Access the .text property directly to get generated string output.
    const result = JSON.parse(response.text.trim());
    return result;
  } catch (error) {
    console.error("Execution simulation failed:", error);
    return {
      output: "Error connecting to execution engine.",
      isError: true,
      explanation: "There was an issue simulating the code. Please try again."
    };
  }
};
