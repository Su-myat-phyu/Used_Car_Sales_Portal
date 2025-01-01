import Footer from "@/Components/HeaderFooter/Footer";
import Header from "@/Components/HeaderFooter/Header";

export default function GuestLayout({ children }) {
    return (
        <main className=" flex flex-col min-h-screen w-full">
            <Header />
            {children}
            <Footer />
        </main>
    );
}