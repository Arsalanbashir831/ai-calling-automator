
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, UserPlus, FileText, DownloadCloud } from "lucide-react";

// Sample data
const leads = [
  {
    id: "1",
    name: "John Smith",
    company: "Acme Inc.",
    position: "CEO",
    phone: "(555) 123-4567",
    email: "john.smith@acme.com",
    status: "New",
    dateAdded: "2024-05-10",
  },
  {
    id: "2",
    name: "Lisa Johnson",
    company: "TechCorp",
    position: "CTO",
    phone: "(555) 987-6543",
    email: "lisa.johnson@techcorp.com",
    status: "Contacted",
    dateAdded: "2024-05-08",
  },
  {
    id: "3",
    name: "Michael Brown",
    company: "Global Industries",
    position: "Sales Director",
    phone: "(555) 456-7890",
    email: "michael.brown@globalind.com",
    status: "Meeting Scheduled",
    dateAdded: "2024-05-05",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    company: "Modern Solutions",
    position: "Marketing Manager",
    phone: "(555) 234-5678",
    email: "sarah.wilson@modern.com",
    status: "New",
    dateAdded: "2024-05-12",
  },
  {
    id: "5",
    name: "David Lee",
    company: "Innovate LLC",
    position: "Product Manager",
    phone: "(555) 345-6789",
    email: "david.lee@innovate.com",
    status: "Follow-up",
    dateAdded: "2024-05-01",
  },
];

const Leads = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
          <p className="text-muted-foreground">
            Manage your contacts and lead information
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" /> Add Lead
          </Button>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" /> Import
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Lead Management</CardTitle>
          <CardDescription>
            You have {leads.length} leads in your database
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search leads..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="shrink-0">
              <DownloadCloud className="mr-2 h-4 w-4" /> Export
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Company</TableHead>
                  <TableHead className="hidden lg:table-cell">Position</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{lead.name}</div>
                        <div className="text-xs text-muted-foreground hidden sm:inline-block">
                          {lead.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{lead.company}</TableCell>
                    <TableCell className="hidden lg:table-cell">{lead.position}</TableCell>
                    <TableCell>{lead.phone}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                          lead.status === "New"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : lead.status === "Contacted"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                            : lead.status === "Meeting Scheduled"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Call
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {filteredLeads.length} of {leads.length} leads
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Leads;
