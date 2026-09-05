import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { WatsonXAI } from "@ibm-cloud/watsonx-ai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const watsonxAI = new WatsonXAI({
  version: "2024-05-31",
  serviceUrl: process.env.SERVICE_URL,
});

app.get("/", (req, res) => {
  res.json({
    message: "Campus Sustainability AI Backend is running",
  });
});

app.post("/api/analyze", async (req, res) => {
  try {
    const { problem } = req.body;

    if (!problem || !problem.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please enter a sustainability problem.",
      });
    }

    const prompt = `
You are Campus Sustainability AI, an AI sustainability advisor designed
to help colleges identify and address sustainability problems.

Analyze the campus sustainability problem provided by the user.

Classify it into exactly ONE category:

Energy
Water
Waste
Transportation
Food & Consumption
Air Quality
Other

Assign exactly ONE priority:

Low
Medium
High

Use the following format:

Category: [category]

Priority: [priority]

Problem Identified:
[Brief explanation of the actual sustainability problem.]

Recommended Actions:
1. [Practical action]
2. [Practical action]
3. [Practical action]

Expected Impact:
[Brief explanation of the likely sustainability benefit.]

Responsible AI Guidelines:
- Do not invent statistics or measurements.
- Do not make unsupported claims.
- Give practical and safe recommendations.
- Do not request or expose personal information.
- If information is uncertain, clearly state the uncertainty.
- Keep recommendations relevant to a college campus.

IMPORTANT:
- Return ONLY the sections requested above.
- Do not generate another User Input.
- Do not generate another Output.
- Do not generate examples.
- Do not generate scenarios.
- Do not generate "---".
- Stop after Expected Impact.

User Problem:
${problem}
`;

    const response = await watsonxAI.textChat({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      modelId: "ibm/granite-4-h-small",

      projectId: process.env.IBM_PROJECT_ID,

      maxTokens: 500,

      temperature: 0.2,
    });

const aiResponse =
  response.result.choices?.[0]?.message?.content || "";

const text = aiResponse.trim();

function extractSection(text, sectionName, nextSections = []) {
  const escapedName = sectionName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let endPattern = "$";

  if (nextSections.length > 0) {
    const escapedNextSections = nextSections
      .map((section) =>
        section.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      )
      .join("|");

    endPattern = `(?=\\n(?:${escapedNextSections})\\s*:|$)`;
  }

  const regex = new RegExp(
    `${escapedName}\\s*:\\s*([\\s\\S]*?)${endPattern}`,
    "i"
  );

  const match = text.match(regex);

  return match ? match[1].trim() : "";
}

const category = extractSection(text, "Category", [
  "Priority",
  "Problem Identified",
  "Recommended Actions",
  "Expected Impact",
]);

const priority = extractSection(text, "Priority", [
  "Problem Identified",
  "Recommended Actions",
  "Expected Impact",
]);

const identifiedProblem = extractSection(text, "Problem Identified", [
  "Recommended Actions",
  "Expected Impact",
]);

const actionsText = extractSection(text, "Recommended Actions", [
  "Expected Impact",
]);

const impact = extractSection(text, "Expected Impact");

const actions = actionsText
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => line.replace(/^\d+[\.\)]\s*/, ""))
  .filter(Boolean);

res.json({
  success: true,
  response: {
    category,
    priority,
    problem: identifiedProblem,
    actions,
    impact,
  },
});

  } catch (error) {
    console.error("IBM watsonx error:", error);

    res.status(500).json({
      success: false,
      error: "Unable to analyze the sustainability problem.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});