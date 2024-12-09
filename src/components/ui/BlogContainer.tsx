export const BlogContainer = ({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) => {
  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
      {" "}
      {/* Reduced max width */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {" "}
        {/* Changed to 4 columns */}
        {/* Main content area */}
        <div className="md:col-span-3">
          {" "}
          {/* Takes 3/4 of space */}
          {children}
        </div>
        {/* Sidebar */}
        {sidebar && (
          <div className="md:block">
            <div className="sticky top-4">{sidebar}</div>
          </div>
        )}
      </div>
    </div>
  );
};
