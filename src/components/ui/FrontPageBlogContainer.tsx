// components/ui/Container.tsx
const FrontBlogContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`justify-content flex px-6 md:px-50 ${className}`}>{children}</div>;
};

export default FrontBlogContainer;
