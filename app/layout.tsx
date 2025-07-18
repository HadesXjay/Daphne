// app/layout.tsx
export const metadata = {
  title: "Daphne Condino",
  description: "Junior Architect Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
