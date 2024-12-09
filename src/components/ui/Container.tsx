// components/ui/Container.tsx
const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`  px-3 md:px-60 ${className}`}>{children}</div>;
};

export default Container;
