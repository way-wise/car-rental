import Footer from "@/app/(main)/_components/footer";
import Navbar from "@/app/(main)/_components/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="relative flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
