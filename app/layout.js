import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/components/navigation/NavigationContext";
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Ronik Koirala — Portfolio",
  description:
    "Minimal, works & even better. Personal portfolio and life tracker of Ronik Koirala.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <NavigationProvider>
          <Sidebar />
          <Navbar />
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}
