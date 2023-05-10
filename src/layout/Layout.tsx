import Footer from "../components/Footer";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-950 h-screen w-full text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
