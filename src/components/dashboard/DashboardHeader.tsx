
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
    const completed = localStorage.getItem("dashboardTourCompleted");
    setTutorialCompleted(!!completed);
  }, []);

  const restartTutorial = () => {
    localStorage.removeItem("dashboardTourCompleted");
    toast({
      title: "Tour restarted",
      description: "The tour will begin in a moment.",
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
            className={`rounded-full ${!tutorialCompleted ? 'ring-2 ring-primary animate-pulse' : ''}`}
            onClick={restartTutorial}
            id="help-button"
            title="Restart Tour"
          >
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full" id="notification-bell">
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
