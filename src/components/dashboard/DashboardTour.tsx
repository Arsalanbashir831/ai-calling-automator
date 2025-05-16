
import React, { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { driver as driverjs } from 'driver.js';
import 'driver.js/dist/driver.css';

const DashboardTour = () => {
  const { toast } = useToast();
  const [tourStarted, setTourStarted] = useState(false);

  useEffect(() => {
    // Check if the tour has been completed before
    const tourCompleted = localStorage.getItem('dashboardTourCompleted');
    
    if (!tourCompleted && !tourStarted) {
      startTour();
      setTourStarted(true);
    }
  }, []);

  const startTour = () => {
    // Create and customize driver.js
    const driverObj = driverjs({
      showProgress: true,
      animate: true,
      smoothScroll: true,
      allowClose: true,
      showButtons: ['next', 'previous', 'close'],
      steps: [
        // Welcome step
        {
          element: '#dashboard-main',
          popover: {
            title: 'Welcome to your Dashboard',
            description: 'This quick tour will guide you through the main features of your AI Calling Platform dashboard.',
            side: 'bottom',
            align: 'start'
          }
        },
        // Sidebar
        {
          element: '#sidebar',
          popover: {
            title: 'Navigation Sidebar',
            description: 'Use this sidebar to navigate between different sections of your dashboard.',
            side: 'right',
            align: 'start'
          }
        },
        // Stats cards
        {
          element: '#stats-cards',
          popover: {
            title: 'Performance Overview',
            description: 'These cards show your key metrics at a glance. Monitor your calls, success rates, and more.',
            side: 'bottom',
            align: 'start'
          }
        },
        // Call performance chart
        {
          element: '#call-performance-chart',
          popover: {
            title: 'Call Performance',
            description: 'View your calling activity and performance trends over time.',
            side: 'top',
            align: 'start'
          }
        },
        // Usage metrics
        {
          element: '#monthly-usage',
          popover: {
            title: 'Monthly Usage',
            description: 'Track your current plan usage and limits here.',
            side: 'left',
            align: 'start'
          }
        },
        // Recent calls table
        {
          element: '#recent-calls',
          popover: {
            title: 'Recent Calls',
            description: 'View and manage your most recent calls. Click "Details" to see more information about each call.',
            side: 'top',
            align: 'start'
          }
        },
        // New call button
        {
          element: '#new-call-button',
          popover: {
            title: 'Start a New Call',
            description: 'Click here to initiate a new AI-powered call to one of your leads.',
            side: 'bottom',
            align: 'end'
          }
        },
        // Notification bell
        {
          element: '#notification-bell',
          popover: {
            title: 'Notifications',
            description: 'Access your notifications here. We\'ll alert you about important events and updates.',
            side: 'bottom',
            align: 'end'
          }
        },
        // Help guide
        {
          element: '#help-button',
          popover: {
            title: 'Help & Support',
            description: 'Click here anytime to restart this tour or access help resources.',
            side: 'bottom',
            align: 'end'
          }
        }
      ],
      onDestroyStarted: () => {
        if (window.confirm('Are you sure you want to exit the tour? You can restart it anytime from the help icon.')) {
          localStorage.setItem('dashboardTourCompleted', 'true');
          toast({
            title: "Tour completed",
            description: "You can restart the tour anytime using the help button in the header.",
          });
          return true;
        }
        return false;
      },
      onDestroyed: () => {
        localStorage.setItem('dashboardTourCompleted', 'true');
      }
    });

    // Start the tour
    driverObj.drive();
  };

  return null; // This component doesn't render anything visible
};

export default DashboardTour;
