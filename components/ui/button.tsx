export function Button({ children, ...props }) {
  return <button className="rounded px-4 py-2" {...props}>{children}</button>;
}
