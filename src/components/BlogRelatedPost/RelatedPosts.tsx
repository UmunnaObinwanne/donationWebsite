"use client";

import Link from "next/link";
import Image from "next/image";

const RelatedPosts = ({ posts }: { posts: any[] }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Related Posts</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            href={`/post${post.slug}`}
            key={post.slug}
            className="group -mx-3 block rounded-lg p-3 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-start gap-4">
              {post.featuredImage && (
                <div className="size-24 shrink-0">
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    className="rounded-lg object-cover"
                    width={96}
                    height={96}
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h3>
                <div
                  className="line-clamp-2 text-sm text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt || "",
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
