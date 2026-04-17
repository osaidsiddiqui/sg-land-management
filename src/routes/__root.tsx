import { Outlet, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { MobileCallButton } from "@/components/MobileCallButton";

export default function RootLayout() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
