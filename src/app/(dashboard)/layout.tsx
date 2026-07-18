import { Navbar } from "@/components/layout/navbar/navbar";
import { Sidebar } from "@/components/layout/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="lg:pl-72">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}