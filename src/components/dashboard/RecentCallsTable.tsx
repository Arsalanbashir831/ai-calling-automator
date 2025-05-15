
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Sample data
const calls = [
  {
    id: "1",
    contact: "John Smith",
    phone: "(555) 123-4567",
    type: "Outgoing",
    status: "Completed",
    duration: "3:24",
    date: "Today, 10:30 AM",
  },
  {
    id: "2",
    contact: "Lisa Johnson",
    phone: "(555) 987-6543",
    type: "Incoming",
    status: "Missed",
    duration: "-",
    date: "Today, 9:15 AM",
  },
  {
    id: "3",
    contact: "Michael Brown",
    phone: "(555) 456-7890",
    type: "Outgoing",
    status: "Completed",
    duration: "1:47",
    date: "Yesterday, 3:20 PM",
  },
  {
    id: "4",
    contact: "Sarah Wilson",
    phone: "(555) 234-5678",
    type: "Outgoing",
    status: "Voicemail",
    duration: "0:42",
    date: "Yesterday, 11:05 AM",
  },
  {
    id: "5",
    contact: "David Lee",
    phone: "(555) 345-6789",
    type: "Incoming",
    status: "Completed",
    duration: "4:12",
    date: "Jul 13, 2:30 PM",
  },
];

const RecentCallsTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Contact</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden sm:table-cell">Duration</TableHead>
            <TableHead className="hidden lg:table-cell">Date/Time</TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calls.map((call) => (
            <TableRow key={call.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{call.contact}</div>
                  <div className="text-xs text-muted-foreground">{call.phone}</div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                    call.type === "Incoming"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                  }`}
                >
                  {call.type}
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                    call.status === "Completed"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : call.status === "Missed"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {call.status}
                </span>
              </TableCell>
              <TableCell className="hidden sm:table-cell">{call.duration}</TableCell>
              <TableCell className="hidden lg:table-cell">{call.date}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentCallsTable;
