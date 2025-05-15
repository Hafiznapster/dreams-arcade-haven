
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  noTopPadding?: boolean;
}

const PageLayout = ({ children, noTopPadding = false }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${noTopPadding ? '' : 'pt-24'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
