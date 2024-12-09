"use client";
import { useState, useEffect, useCallback } from "react";
import Container from "@/components/ui/Container";
import { BlogContainer } from "@/components/ui/BlogContainer";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/Loading";
import Link from "next/link";
import Image from "next/image";

async function fetchPosts(first: number = 5, after: string | null = null) {
  const query = `
    query GetPosts {
      posts(first: ${first}${after ? `, after: "${after}"` : ""}) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            databaseId
            title
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();
    return json.data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

export default function LoadMorePost() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const BATCH_SIZE = 8;

  const loadPosts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchPosts(BATCH_SIZE, endCursor);

      if (!data) {
        throw new Error("Failed to fetch posts");
      }

      setPosts((currentPosts) => {
        const existingIds = new Set(currentPosts.map((post) => post.databaseId));
        const newPosts = data.edges
          .map((edge: any) => edge.node)
          .filter((post: any) => !existingIds.has(post.databaseId));

        return [...currentPosts, ...newPosts];
      });

      setHasNextPage(data.pageInfo.hasNextPage);
      setEndCursor(data.pageInfo.endCursor);
    } catch (err) {
      setError("Error loading posts. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [endCursor]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  if (error) {
    return (
      <Container>
        <div className="py-10 text-center">
          <p className="text-red-500">{error}</p>
          <Button variant="outline" onClick={loadPosts} className="mt-4">
            Try Again
          </Button>
        </div>
      </Container>
    );
  }

  if (loading && posts.length === 0) {
    return (
      <Container>
        <div className="flex min-h-[200px] items-center justify-center">
          <Loading />
        </div>
      </Container>
    );
  }

  if (!loading && posts.length === 0) {
    return (
      <Container>
        <div className="py-10 text-center">
          <p>No posts have been published.</p>
        </div>
      </Container>
    );
  }

  return (
    <BlogContainer>
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <div
              key={`${post.databaseId}-${post.id}`}
              className="flex h-full flex-col rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <Link href={`/post/${post.slug}`} className="flex h-full flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
                    {post.title}
                  </h3>

                  <div
                    className="line-clamp-3 text-sm text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt || "...",
                    }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {hasNextPage && (
          <div className="text-center">
            <Button variant="outline" onClick={loadPosts} disabled={loading} className="mt-4">
              {loading ? "Loading..." : "Load More Posts"}
            </Button>
          </div>
        )}
      </div>
    </BlogContainer>
  );
}
