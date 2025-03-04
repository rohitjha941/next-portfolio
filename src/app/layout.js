import Navbar from "@/components/navbar/navbar";
import "@/styles/index.scss";

export const metadata = {
  title: "Rohit Jha",
  description: "Rohit Jha's personal website - Full Stack Developer specializing in scalable web applications",
  openGraph: {
    title: 'Rohit Jha',
    description: 'Full Stack Developer specializing in scalable web applications',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Jha',
    description: 'Full Stack Developer specializing in scalable web applications',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-to-main-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
