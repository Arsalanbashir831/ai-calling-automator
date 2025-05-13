
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/40 backdrop-blur-xl shadow-xl shadow-black/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
            AI
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">AI Calling Platform</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Enterprise Stories
          </a>
        </nav>
        
        <div className="flex items-center gap-5">
          <Button variant="outline" className="hidden sm:inline-flex border-white/10 bg-white/5 hover:bg-white/10 text-white">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md shadow-blue-500/10 neo-glow">
            Enterprise Access
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
