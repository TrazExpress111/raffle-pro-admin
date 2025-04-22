
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { SearchIcon } from "lucide-react";

export default function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock user data
  const users = [
    {
      id: "user1",
      name: "John Doe",
      email: "john.doe@example.com",
      ticketsPurchased: 23,
      amountSpent: "$230.00",
      joinDate: "2025-01-15",
      status: "active",
    },
    {
      id: "user2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      ticketsPurchased: 45,
      amountSpent: "$395.00",
      joinDate: "2025-02-03",
      status: "active",
    },
    {
      id: "user3",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      ticketsPurchased: 12,
      amountSpent: "$120.00",
      joinDate: "2025-02-12",
      status: "active",
    },
    {
      id: "user4",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      ticketsPurchased: 78,
      amountSpent: "$975.00",
      joinDate: "2024-11-25",
      status: "active",
    },
    {
      id: "user5",
      name: "Alex Brown",
      email: "alex.brown@example.com",
      ticketsPurchased: 31,
      amountSpent: "$355.00",
      joinDate: "2025-01-05",
      status: "inactive",
    },
    {
      id: "user6",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      ticketsPurchased: 9,
      amountSpent: "$90.00",
      joinDate: "2025-03-21",
      status: "active",
    },
    {
      id: "user7",
      name: "Chris Martin",
      email: "chris.martin@example.com",
      ticketsPurchased: 0,
      amountSpent: "$0.00",
      joinDate: "2025-04-10",
      status: "inactive",
    }
  ];
  
  // Filter users based on search query
  const filteredUsers = users.filter(user => {
    const searchLower = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower)
    );
  });
  
  // Status badge styles
  const statusStyles = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-gray-100 text-gray-800"
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">View and manage all users</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative md:w-80">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead>Tickets</TableHead>
                  <TableHead className="hidden sm:table-cell">Spent</TableHead>
                  <TableHead className="hidden lg:table-cell">Joined</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.email}</TableCell>
                    <TableCell>{user.ticketsPurchased}</TableCell>
                    <TableCell className="hidden sm:table-cell">{user.amountSpent}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge className={statusStyles[user.status as keyof typeof statusStyles]}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
