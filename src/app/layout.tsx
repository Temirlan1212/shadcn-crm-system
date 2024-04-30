import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Sidebar } from "@/widgets/sidebar";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { Themes } from "@/shared/constants/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exedrive - Платформа для прокачки маретологов",
  description: "Платформа для обучения маркетологов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={Themes}
        >
          <TooltipProvider>
            <div className="flex h-screen border-collapse overflow-hidden">
              <div className="hidden  md:block">
                <Sidebar />
              </div>
              <div className="w-full">
                <Header>
                  <main className="flex-1 overflow-y-auto overflow-x-hidden bg-secondary/10 pb-1 px-[20px] md:px-[40px] py-[30px]">
                    {children}
                  </main>
                </Header>
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
