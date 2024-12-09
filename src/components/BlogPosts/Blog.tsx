import React from 'react';
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Loading from '../../components/ui/Loading';

import FrontBlogContainer from '../ui/FrontPageBlogContainer';

async function getPosts() {
  const query = `
  {
    posts {
      nodes {
        title
        content
        uri
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
  `;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
        body: JSON.stringify({ query }),
      }
    );

    const { data } = await res.json();
    return data?.posts?.nodes || [];

  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function PostList() {
  const allPosts = await getPosts();
  
  if (!allPosts || allPosts.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No posts found.</p>
      </div>
    );
  }
  
  return (
    <Suspense fallback={<Loading />}>
      <div className="space-y-8 mb-4 mt-6">
            <h2 className='text-4xl flex justify-center text-center md:mt-3'>Read Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-black">
      
          {allPosts.map((post: any, index: number) => (
            index < 4 && (
          <div 
  key={post.uri} 
  className="card bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border-2 border-black "
>
                <Link href={`post${post.uri}`} className="flex flex-col h-full">
                  {/* Featured Image */}
                  <div className="relative w-full h-48 rounded-t-lg border-black overflow-hidden">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Topic/Category */}
                    <div className="text-sm text-blue-600 mb-2 font-medium">
                      Blog
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <div
                      className="text-gray-600 text-sm line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt || post.content?.slice(0, 150) + "..."
                      }}
                    />
                  </div>
                </Link>
              </div>
            )
          ))}
        </div>
        
        {allPosts.length > 4 && (
          <div className="text-center bg-red">
            <Link href="/all-posts">
              <Button variant="outline" className="mt-4 bg-primary hover:bg-black hover:text-white">
                View All Posts
              </Button>
            </Link>
          </div>
        )}
        </div>
    </Suspense>
  );
}