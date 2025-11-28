import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "The Select Match",
  description: "Exclusive High-End Matchmaking & Luxury Dating Concierge Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        
        <main className="pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
