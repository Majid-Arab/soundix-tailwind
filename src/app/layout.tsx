import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex">
    {/* <!-- Sidebar --> */}
    <div className="h-full w-72 text-white flex-shrink-0 py-3">
        <Sidebar />
    </div>
    
    <div className="flex flex-col w-full gap-3">
        {/* <!-- Header --> */}
        <header className="h-16 w-full py-3">
            <Navbar />
        </header>
        
        <div className="flex flex-grow">
            
            {/* <!-- Main Content --> */}
            <main className="flex-grow">
                {children}
            </main>

            {/* <!-- Aside --> */}
            <aside className="h-full w-96 flex-shrink-0">
                Aside
            </aside>
        </div>
    </div>
</body>
    </html>
  );
}
