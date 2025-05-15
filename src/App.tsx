
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import HelpCenter from "./pages/Help-Center";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Configure React Query with defaults optimal for enterprise apps
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      retry: 1,
    },
  },
});

const App = () => {
  // Force dark mode for our premium enterprise design
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner theme="dark" className="dark" />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/" element={
              <div className="dark bg-background text-foreground min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <Index />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/features" element={
              <div className="dark bg-background text-foreground min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <Features />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/pricing" element={
              <div className="dark bg-background text-foreground min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <Pricing />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/help-center" element={
              <div className="dark bg-background text-foreground min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <HelpCenter />
                </main>
                <Footer />
              </div>
            } />
            <Route path="*" element={
              <div className="dark bg-background text-foreground min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <NotFound />
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
