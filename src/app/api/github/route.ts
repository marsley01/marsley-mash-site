import { NextResponse } from "next/server";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/marsley01/repos?sort=updated&per_page=100&type=public",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "marsley-mash-site",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repos" },
        { status: res.status }
      );
    }

    const data: GitHubRepo[] = await res.json();
    const repos = data
      .filter((repo) => !repo.fork && repo.name !== "marsley01")
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics,
        updated: repo.updated_at,
      }));

    return NextResponse.json({ repos });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch repos" },
      { status: 500 }
    );
  }
}
