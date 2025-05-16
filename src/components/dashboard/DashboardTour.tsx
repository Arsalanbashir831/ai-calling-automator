
import React, { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { driver as driverjs } from 'driver.js';
import { X } from "lucide-react";
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
    // Create and customize driver.js with theme colors
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
      },
      // Use popoverClass instead of className for styling the popover
      popoverClass: 'dashboard-tour-popover',
      overlayColor: 'rgba(0, 0, 0, 0.5)',
      padding: 5,
    });

    // Add CSS to style the driver.js overlay and popover to match the theme
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .driver-popover {
        background: hsl(var(--card)) !important;
        border: 1px solid hsl(var(--border)) !important;
        color: hsl(var(--card-foreground)) !important;
      }
      
      .driver-popover-title {
        color: hsl(var(--primary)) !important;
        font-weight: bold !important;
      }
      
      .driver-popover-description {
        color: hsl(var(--card-foreground)) !important;
      }
      
      .driver-popover-footer button {
        background: hsl(var(--primary)) !important;
        color: hsl(var(--primary-foreground)) !important;
      }
      
      .driver-popover-footer button.driver-prev-btn {
        background: hsl(var(--muted)) !important;
        color: hsl(var(--muted-foreground)) !important;
      }
      
      .driver-popover-footer button.driver-close-btn {
        background: hsl(var(--muted)) !important;
        color: hsl(var(--muted-foreground)) !important;
      }
      
      .driver-popover-footer button:hover {
        background: hsl(var(--primary)/90%) !important;
      }
      
      .driver-popover-footer button.driver-prev-btn:hover,
      .driver-popover-footer button.driver-close-btn:hover {
        background: hsl(var(--muted)/80%) !important;
      }
      
      .driver-popover-navigation-btns {
        display: flex;
        gap: 8px;
      }
      
      /* Add skip button specific style */
      .driver-popover-footer .driver-close-btn {
        margin-right: auto;
      }
    `;
    document.head.appendChild(styleElement);

    // Add a skip button option
    const skipButtonElement = document.createElement('button');
    skipButtonElement.className = 'driver-close-btn';
    skipButtonElement.innerHTML = '<span>Skip Tour</span>';
    skipButtonElement.addEventListener('click', () => {
      if (window.confirm('Are you sure you want to skip the tour? You can restart it anytime from the help icon.')) {
        localStorage.setItem('dashboardTourCompleted', 'true');
        toast({
          title: "Tour skipped",
          description: "You can restart the tour anytime using the help button in the header.",
        });
        driverObj.destroy();
      }
    });

    // Start the tour
    driverObj.drive();

    // After tour has started, insert the skip button into the popover footer
    setTimeout(() => {
      const popoverFooter = document.querySelector('.driver-popover-footer');
      if (popoverFooter) {
        const navigationBtns = document.querySelector('.driver-popover-navigation-btns');
        if (navigationBtns) {
          popoverFooter.insertBefore(skipButtonElement, navigationBtns);
        }
      }
    }, 500);

    return () => {
      document.head.removeChild(styleElement);
    };
  };

  return null; // This component doesn't render anything visible
};

export default DashboardTour;
