import { VOLUNTEERING } from "@/features/profile/data/volunteering";

const content = `# Volunteering

${VOLUNTEERING.map(
  (item) => `## ${item.role} @ ${item.title}

**Category:** ${item.category}  
**Date:** ${item.date}

${item.description ? item.description : ""}

${
  item.referenceLink
    ? `[Reference Link](${item.referenceLink})`
    : ""
}`
).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}