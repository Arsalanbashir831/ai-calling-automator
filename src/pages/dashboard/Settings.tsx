
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Settings saved",
        description: "Your settings have been updated successfully.",
      });
    }, 1000);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and AI calling settings
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid grid-cols-4 max-w-[600px]">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="ai-voice">AI Voice</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  defaultValue="Sales professional with 5+ years of experience in B2B software sales."
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your subscription and account preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Current Plan</Label>
                <div className="flex items-center justify-between p-3 border rounded-md bg-muted/50">
                  <div>
                    <div className="font-medium">Pro Plan</div>
                    <div className="text-sm text-muted-foreground">
                      1,000 AI calls / month
                    </div>
                  </div>
                  <Button variant="outline">Upgrade</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="america-new_york">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america-new_york">Eastern Time (ET)</SelectItem>
                    <SelectItem value="america-chicago">Central Time (CT)</SelectItem>
                    <SelectItem value="america-denver">Mountain Time (MT)</SelectItem>
                    <SelectItem value="america-los_angeles">Pacific Time (PT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Change Password</Label>
                <div className="space-y-2">
                  <Input id="currentPassword" type="password" placeholder="Current password" />
                  <Input type="password" placeholder="New password" />
                  <Input type="password" placeholder="Confirm new password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ai-voice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Voice Settings</CardTitle>
              <CardDescription>
                Customize your AI calling voice and behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="voice">Voice Selection</Label>
                <Select defaultValue="amy">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a voice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amy">Amy (Female, Professional)</SelectItem>
                    <SelectItem value="michael">Michael (Male, Friendly)</SelectItem>
                    <SelectItem value="david">David (Male, Professional)</SelectItem>
                    <SelectItem value="sophia">Sophia (Female, Friendly)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4">
                <Label>Voice Preview</Label>
                <div className="h-16 bg-muted rounded-md flex items-center justify-center">
                  <Button variant="outline">Play Sample</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="speechRate">Speech Rate</Label>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <span className="text-sm text-muted-foreground">Slower</span>
                  <Input
                    id="speechRate"
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.1"
                    defaultValue="1"
                    className="col-span-1"
                  />
                  <span className="text-sm text-muted-foreground">Faster</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="natural-pauses">Natural Pauses</Label>
                  <div className="text-sm text-muted-foreground">
                    Add natural sounding pauses in conversation
                  </div>
                </div>
                <Switch id="natural-pauses" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="adaptive-responses">Adaptive Responses</Label>
                  <div className="text-sm text-muted-foreground">
                    AI adjusts to conversation flow
                  </div>
                </div>
                <Switch id="adaptive-responses" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how and when you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-calls">Completed Calls</Label>
                    <Switch id="email-calls" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-meetings">Meeting Scheduled</Label>
                    <Switch id="email-meetings" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-weekly">Weekly Report</Label>
                    <Switch id="email-weekly" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-calls">Call Reminders</Label>
                    <Switch id="push-calls" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-meetings">Meeting Notifications</Label>
                    <Switch id="push-meetings" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-messages">New Messages</Label>
                    <Switch id="push-messages" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
