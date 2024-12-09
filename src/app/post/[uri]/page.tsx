import { Suspense } from "react";
import Loading from "../../../components/ui/Loading";
import { BlogContainer } from "../../../components/ui/BlogContainer";
import Link from "next/link";
import RelatedPosts from "../../../components/BlogRelatedPost/RelatedPosts";
import Image from "next/image";

interface Props {
  params: Promise<{
    uri: string;
  }>;
}

interface Post {
  category: [string];
}

// Getting individual post with related posts
async function getPost(slug: string) {
  const query = `
  {
    post(id: "${slug}", idType: SLUG) {
      title
      content
      excerpt
      slug
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      date
      modified
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          id
          name
        }
      }
    }
    posts(first: 3, where: { notIn: ["${slug}"] }) {
      nodes {
        title
        excerpt
        slug
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
      body: JSON.stringify({ query }),
    });

    const { data } = await res.json();

    if (!data?.post) {
      throw new Error("Post not found");
    }

    return {
      post: data.post,
      relatedPosts: data.posts.nodes,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}

// Main Component

export default async function PostDetails({ params }: Props) {
  const { uri } = await params;
  const { post, relatedPosts } = await getPost(uri);

  // Format dates
  const publishDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const modifiedDate = new Date(post.modified).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <BlogContainer sidebar={<RelatedPosts posts={relatedPosts} />}>
      <article className="rounded-lg bg-white p-4 shadow-sm md:p-6 lg:p-8">
        <header className="mb-8">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">{post.title}</h1>

          <div className="mb-6 flex items-center gap-4 text-sm text-gray-600">
            {/* Author info */}
            <div className="flex items-center gap-2">
              {post.author?.node?.avatar?.url && (
                <Image
                  src={post.author.node.avatar.url}
                  alt={post.author.node.name}
                  width={32} // Adjust size to match Tailwind's w-8 h-8
                  height={32}
                  className="rounded-full"
                />
              )}
              <span>{post.author?.node?.name}</span>
            </div>

            {/* Divider */}
            <span>•</span>

            {/* Dates */}
            <div className="flex flex-col gap-1">
              {post.modified !== post.date && (
                <time dateTime={post.modified} className="text-gray-500">
                  Updated: {modifiedDate}
                </time>
              )}
            </div>
          </div>
        </header>
        <Suspense fallback={<Loading />}>
          <div
            className="prose prose-lg max-w-none [&>*]:mx-auto [&>*]:max-w-[750px] [&>blockquote]:my-8 [&>blockquote]:border-l-4 [&>blockquote]:border-gray-200 [&>blockquote]:py-2 [&>blockquote]:pl-6 [&>blockquote]:italic [&>h2]:mb-6 [&>h2]:mt-12 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h3]:mb-4 [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>ol>li]:mb-2 [&>ol]:my-6 [&>ol]:ml-6 [&>ol]:list-decimal [&>p+p]:mt-6 [&>p]:mb-6 [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-gray-700 [&>ul>li]:mb-2 [&>ul]:my-6 [&>ul]:ml-6 [&>ul]:list-disc [&_a:hover]:text-blue-800 [&_a]:text-blue-600 [&_a]:underline [&_figure>img]:mx-auto [&_figure>img]:mb-4 [&_figure]:mx-auto [&_figure]:my-8 [&_figure]:text-center [&_img]:mx-auto [&_img]:my-8 [&_img]:rounded-lg [&_img]:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Suspense>
      </article>
    </BlogContainer>
  );
}
