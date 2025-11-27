import "./globals.css";

export const metadata = {
  title: "AL RAYAN",
  description: "portfolio made by AL RIFAT SABBIR (alrifatsabbir)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
