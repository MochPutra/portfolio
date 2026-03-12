import { NextResponse } from "next/server";

const GITHUB_USERNAME = "MochPutra";

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
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 }, // cache 1 jam
  });

  const data = await res.json();
  const calendar =
    data?.data?.user?.contributionsCollection?.contributionCalendar;

  return NextResponse.json(calendar);
}