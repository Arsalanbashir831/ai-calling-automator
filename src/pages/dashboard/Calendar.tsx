
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

// Sample data for calendar events
const events = [
  {
    id: "1",
    title: "Call with John Smith",
    date: new Date(2024, 4, 16, 10, 30),
    duration: 30,
    type: "AI Call",
  },
  {
    id: "2",
    title: "Follow-up with Lisa Johnson",
    date: new Date(2024, 4, 16, 14, 0),
    duration: 15,
    type: "Follow-up",
  },
  {
    id: "3",
    title: "Meeting with Michael Brown",
    date: new Date(2024, 4, 18, 11, 0),
    duration: 45,
    type: "Meeting",
  },
  {
    id: "4",
    title: "Sales call with TechCorp",
    date: new Date(2024, 4, 20, 9, 30),
    duration: 30,
    type: "AI Call",
  },
];

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Filter events for the selected date
  const selectedDateEvents = date 
    ? events.filter(
        (event) => 
          event.date.getDate() === date.getDate() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getFullYear() === date.getFullYear()
      )
    : [];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">
          Manage your calls and appointments
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Date</CardTitle>
            <CardDescription>Select a date to view events</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md"
            />
            <div className="mt-4">
              <Button className="w-full">
                <CalendarIcon className="mr-2 h-4 w-4" /> Schedule Call
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>
              {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No Date Selected'}
            </CardTitle>
            <CardDescription>
              {selectedDateEvents.length} events scheduled
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No events scheduled for this day
              </div>
            ) : (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start p-4 rounded-lg border"
                  >
                    <div className="min-w-[60px] text-center">
                      <div className="text-sm font-medium">
                        {event.date.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {event.duration} min
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {event.type}
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs self-start ${
                        event.type === "AI Call"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                          : event.type === "Meeting"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendarPage;
