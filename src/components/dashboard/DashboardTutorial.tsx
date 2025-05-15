
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface TutorialStep {
  title: string;
  description: string;
  targetElement?: string;
  position?: "top" | "right" | "bottom" | "left";
}

const tutorialSteps: TutorialStep[] = [
  {
    title: "Welcome to Your Dashboard",
    description: "This is your central hub for managing all your AI calling activities. Let's take a quick tour!",
  },
  {
    title: "Navigation Sidebar",
    description: "Use this sidebar to navigate between different sections of the dashboard. Click on any icon to explore.",
    targetElement: "sidebar",
    position: "right",
  },
  {
    title: "Analytics Overview",
    description: "Here you can see your key metrics at a glance. Monitor call stats, success rates, and performance.",
    targetElement: "stats-cards",
    position: "bottom",
  },
  {
    title: "Recent Calls",
    description: "View your most recent calls, their status, and outcomes. Click 'Details' to see more information about each call.",
    targetElement: "recent-calls",
    position: "top",
  },
  {
    title: "Make a New Call",
    description: "Ready to start? Click the 'New Call' button to begin making AI-powered calls.",
    targetElement: "new-call-button",
    position: "left",
  },
];

const DashboardTutorial = () => {
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);

  useEffect(() => {
    // Check if the tutorial has been completed before
    const tutorialComplete = localStorage.getItem("dashboardTutorialComplete");
    if (tutorialComplete) {
      setShowTutorial(false);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    localStorage.setItem("dashboardTutorialComplete", "true");
    setOpen(false);
    setTimeout(() => {
      setShowTutorial(false);
    }, 300);
  };

  if (!showTutorial) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="h-auto max-h-[40vh]">
        <SheetHeader className="mb-4">
          <SheetTitle>{tutorialSteps[currentStep].title}</SheetTitle>
          <SheetDescription>
            {tutorialSteps[currentStep].description}
          </SheetDescription>
          <Button
            onClick={() => setOpen(false)}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 rounded-full"
            aria-label="Close tutorial"
          >
            <X className="h-4 w-4" />
          </Button>
        </SheetHeader>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>

          <div className="flex gap-1">
            {tutorialSteps.map((_, index) => (
              <span
                key={index}
                className={`block h-2 w-2 rounded-full ${
                  index === currentStep ? "bg-primary" : "bg-muted"
                }`}
              ></span>
            ))}
          </div>

          <Button
            variant={currentStep === tutorialSteps.length - 1 ? "default" : "outline"}
            onClick={handleNext}
          >
            {currentStep === tutorialSteps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DashboardTutorial;
