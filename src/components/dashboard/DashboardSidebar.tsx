
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, Calendar, MessageSquare, Settings, Users, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const sidebarItems = [
  {
    icon: Home,
    label: "Overview",
    href: "/dashboard",
  },
  {
    icon: BarChart2,
    label: "Analytics",
    href: "/dashboard/analytics",
  },
  {
    icon: Users,
    label: "Leads",
    href: "/dashboard/leads",
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/dashboard/calendar",
  },
  {
    icon: MessageSquare,
    label: "Messages",
    href: "/dashboard/messages",
    badge: 3,
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
  },
];

interface DashboardSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const DashboardSidebar = ({ collapsed = false, onToggle }: DashboardSidebarProps) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");
  
  // Set the active item based on the current route
  useEffect(() => {
    const path = location.pathname;
    
    // Find the matching item
    const matchingItem = sidebarItems.find(item => {
      if (item.href === "/dashboard" && path === "/dashboard") {
        return true;
      }
      return path.startsWith(item.href);
    });
    
    if (matchingItem) {
      setActiveItem(matchingItem.label);
    }
  }, [location.pathname]);
  
  return (
    <aside 
      id="sidebar"
      className={`border-r border-border/40 flex flex-col bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex-1 overflow-auto py-2">
        <div className="px-3 py-2">
          <div className="flex items-center h-12">
            {!collapsed && (
              <div className="flex items-center gap-2 px-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                  AI
                </div>
                <span className="font-semibold">AI Calling</span>
              </div>
            )}
          </div>
        </div>
        
        <nav className="mt-4 px-2 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center ${
                collapsed ? "justify-center" : ""
              } px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                activeItem === item.label
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted"
              }`}
              onClick={() => setActiveItem(item.label)}
            >
              <item.icon className={`h-5 w-5 ${activeItem === item.label ? "text-primary" : ""}`} />
              {!collapsed && (
                <span className="ml-3 flex-1">{item.label}</span>
              )}
              {!collapsed && item.badge && (
                <span className="ml-auto bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-2 border-t border-border/40 mt-auto">
        <Button
          variant="ghost"
          className={`w-full flex items-center ${
            collapsed ? "justify-center px-0" : "justify-start"
          } text-muted-foreground hover:text-foreground`}
          onClick={() => {
            // Logout functionality would go here
            window.location.href = "/login";
          }}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
