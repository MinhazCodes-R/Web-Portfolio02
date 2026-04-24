import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Header from "@/components/myComponents/header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token');

  if (!token || token.value !== 'true') {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-6" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
          <h1 className="text-3xl font-bold mb-8">Portfolio Dashboard</h1>
          {children}
        </div>
      </main>
    </div>
  );
}
