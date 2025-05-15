
import { Bell, Settings, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const DashboardHeader = () => {
  const { toast } = useToast();
  const [tutorialCompleted, setTutorialCompleted] = useState(true);

  useEffect(() => {
    // Check if tutorial has been completed
    const completed = localStorage.getItem("dashboardTutorialComplete");
    setTutorialCompleted(!!completed);
  }, []);

  const restartTutorial = () => {
    localStorage.removeItem("dashboardTutorialComplete");
    toast({
      title: "Tutorial restarted",
      description: "Refresh the page to see the tutorial again.",
    });
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
            AI
          </div>
          <span className="text-lg font-semibold hidden sm:inline-block">Dashboard</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={restartTutorial}
          >
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <Link to="/dashboard/settings">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </Link>
          
          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-medium">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
