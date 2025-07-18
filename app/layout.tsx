export const metadata = {
  title: "Daphne Condino",
  description: "Junior Architect Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
