import Footer from "@/app/(main)/_components/footer";
import Navbar from "@/app/(main)/_components/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
