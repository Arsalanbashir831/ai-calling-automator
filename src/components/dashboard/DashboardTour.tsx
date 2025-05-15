
import { useEffect, useState } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.min.css";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const DashboardTour = () => {
  const [driverObj, setDriverObj] = useState<any>(null);
  const location = useLocation();
  const { toast } = useToast();

  // Define steps for the tour
  const steps = [
    {
      element: '#dashboard-header',
      popover: {
        title: 'Dashboard Header',
        description: 'Access notifications, settings, and help resources from here.',
        side: "bottom",
        align: 'center'
      }
    },
    {
      element: '#sidebar',
      popover: {
        title: 'Navigation Sidebar',
        description: 'Use this sidebar to navigate between different sections of the dashboard.',
        side: "right",
        align: 'start'
      }
    },
    {
      element: '#stats-cards',
      popover: {
        title: 'Analytics Overview',
        description: 'Here you can see your key metrics at a glance. Monitor call stats, success rates, and performance.',
        side: "bottom",
        align: 'center'
      }
    },
    {
      element: '#recent-calls',
      popover: {
        title: 'Recent Calls',
        description: 'View your most recent calls, their status, and outcomes. Click "Details" to see more information about each call.',
        side: "top",
        align: 'center'
      }
    },
    {
      element: '#new-call-button',
      popover: {
        title: 'Make a New Call',
        description: 'Ready to start? Click the "New Call" button to begin making AI-powered calls.',
        side: "left",
        align: 'center'
      }
    }
  ];

  useEffect(() => {
    // Initialize driver.js
    const driverInstance = driver({
      showProgress: true,
      smoothScroll: true,
      animate: true,
      steps,
      onDestroyStarted: () => {
        // When user tries to close the tour
        // Ask confirmation or just let it close
        return true; // returning true will stop the tour
      },
      onDestroyed: () => {
        // Tour is closed either by completing it or manually
        localStorage.setItem("dashboardTutorialComplete", "true");
        toast({
          title: "Tutorial completed",
          description: "You can restart the tutorial from the help icon in the header.",
        });
      }
    });
    
    setDriverObj(driverInstance);

    // Check if the tutorial should be started
    const checkAndStartTour = () => {
      const tutorialComplete = localStorage.getItem("dashboardTutorialComplete");
      if (!tutorialComplete && location.pathname === "/dashboard") {
        setTimeout(() => {
          driverInstance.drive();
        }, 1000); // Small delay to let the UI fully render
      }
    };

    checkAndStartTour();

    // Clean up
    return () => {
      if (driverInstance) {
        driverInstance.destroy();
      }
    };
  }, [location.pathname, toast]);

  return null; // This component doesn't render anything
};

export default DashboardTour;
