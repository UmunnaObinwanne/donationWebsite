// components/Pagination.tsx
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
}

export function Pagination({ currentPage, totalPosts, postsPerPage }: PaginationProps) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="mt-8 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/posts/page/${page}`}
          className={`rounded px-4 py-2 ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
