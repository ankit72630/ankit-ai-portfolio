import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankit Kumar - AI Architect & Agentic AI Engineer",
  description:
    "AI architect with 10+ years building production multi-agent systems on Google Cloud and Azure – LangGraph, Google ADK, RAG, FastAPI and React. Available for freelance and consulting.",
  openGraph: {
    title: "Ankit Kumar - AI Architect & Agentic AI Engineer",
    description:
      "Production multi-agent AI systems, RAG and full-stack AI products. Available for freelance and consulting.",
    url: "https://portfolio-sooty-alpha-93.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider> {children} </TransitionProvider>
      </body>
    </html>
  );
}
