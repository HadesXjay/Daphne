export function Card({ children, className = '' }) {
  return <div className={`rounded-lg shadow-lg bg-white dark:bg-gray-800 ${className}`}>{children}</div>;
}
export function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}
