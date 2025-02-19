import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Session } from "next-auth";
import { AuthProvider } from "../../providers/SessionProvider";
import { ApolloClientProvider } from "../../providers/ApolloProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <AuthProvider session={session}>
      <ApolloClientProvider>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
          </body>
        </html>
      </ApolloClientProvider>
    </AuthProvider>
  );
}
