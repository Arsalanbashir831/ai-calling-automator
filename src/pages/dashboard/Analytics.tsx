
import { BarChart2, ArrowUp, ArrowDown, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatsCard from "@/components/dashboard/StatsCard";

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Track your calling performance and metrics</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-3 max-w-md">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="calls">Calls</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Successful Calls"
              value="124"
              description="Last 30 days"
              icon={<BarChart2 className="h-4 w-4" />}
              trend={{ value: 12, positive: true }}
            />
            <StatsCard
              title="Conversion Rate"
              value="24%"
              description="From last month"
              icon={<ArrowUp className="h-4 w-4" />}
              trend={{ value: 8, positive: true }}
            />
            <StatsCard
              title="Missed Opportunities"
              value="36"
              description="Last 30 days"
              icon={<ArrowDown className="h-4 w-4" />}
              trend={{ value: 5, positive: false }}
            />
            <StatsCard
              title="Scheduled Meetings"
              value="28"
              description="Last 30 days"
              icon={<Calendar className="h-4 w-4" />}
              trend={{ value: 15, positive: true }}
            />
          </div>
          
          <div className="grid gap-6 md:grid-cols-7 mt-6">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Call Trends</CardTitle>
                <CardDescription>Your calling activity over time</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[300px] flex items-center justify-center text-muted-foreground border rounded-md border-dashed">
                  Chart visualization will appear here
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Conversion Analysis</CardTitle>
                <CardDescription>Call outcomes breakdown</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[300px] flex items-center justify-center text-muted-foreground border rounded-md border-dashed">
                  Pie chart will appear here
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Detailed analysis of your calling performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground border rounded-md border-dashed">
                Detailed metrics will appear here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calls">
          <Card>
            <CardHeader>
              <CardTitle>Call Records</CardTitle>
              <CardDescription>Complete history of all your AI calls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground border rounded-md border-dashed">
                Call history table will appear here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
