
import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentCallsTable from "@/components/dashboard/RecentCallsTable";
import { Button } from "@/components/ui/button";
import { Phone, BarChart2, Users, Clock, Menu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar collapsed={sidebarCollapsed} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, your calls are performing well.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={toggleSidebar} variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
              <Button>
                <Phone className="mr-2 h-4 w-4" /> New Call
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <StatsCard
              title="Total Calls"
              value="164"
              description="Last 30 days"
              icon={<Phone className="h-4 w-4" />}
              trend={{ value: 12, positive: true }}
            />
            <StatsCard
              title="Call Success Rate"
              value="68%"
              description="Calls that reached a person"
              icon={<BarChart2 className="h-4 w-4" />}
              trend={{ value: 5, positive: true }}
            />
            <StatsCard
              title="Lead Contacts"
              value="1,284"
              description="Available in database"
              icon={<Users className="h-4 w-4" />}
            />
            <StatsCard
              title="Avg. Call Duration"
              value="2:42"
              description="Minutes per call"
              icon={<Clock className="h-4 w-4" />}
              trend={{ value: 3, positive: false }}
            />
          </div>
          
          <div className="grid gap-6 md:grid-cols-7 mb-6">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Call Performance</CardTitle>
                <CardDescription>Your recent calling activity</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[200px] flex items-center justify-center text-muted-foreground border rounded-md border-dashed">
                  Chart visualization placeholder
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Monthly Usage</CardTitle>
                <CardDescription>Your plan limits and current usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">AI Calls</span>
                      <span className="text-sm text-muted-foreground">42/50</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: "84%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Lead Uploads</span>
                      <span className="text-sm text-muted-foreground">156/200</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      Upgrade Plan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Recent Calls</h2>
            <RecentCallsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
