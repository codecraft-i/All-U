export const Card = ({ className = "", children }) => (
  <div className={`rounded-lg border bg-background shadow ${className}`}>{children}</div>
);
export const CardContent = ({ className = "", children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
