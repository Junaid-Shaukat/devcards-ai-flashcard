import { ClerkProvider } from "@clerk/nextjs";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Flashcard",
  description: "Generated your flashcard - Gemini",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}