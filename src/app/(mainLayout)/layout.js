import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";



export default function RootLayout({ children }) {
  return (
   <div>
    
        <Navbar />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />
         <Toaster></Toaster>
   </div>
     
  );
}