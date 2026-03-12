import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const GITHUB_USERNAME = "mochputra";

const query = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    
    // ✅ Return raw data untuk debug
    return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}