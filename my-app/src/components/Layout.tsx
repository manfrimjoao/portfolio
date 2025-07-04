'use client';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden" id="home">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </div>
  );
}
