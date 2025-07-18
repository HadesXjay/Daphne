// app/layout.tsx
export const metadata = {
  title: "Daphne Condino Portfolio",
  description: "Junior Architect & Graphic Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
