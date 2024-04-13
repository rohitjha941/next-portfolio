import Navbar from "@/components/navbar/navbar";
import "@/styles/index.scss";


export const metadata = {
  title: "Rohit Jha",
  description: "Rohit Jha's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
