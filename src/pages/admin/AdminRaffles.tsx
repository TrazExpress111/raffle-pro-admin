
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusIcon, SearchIcon } from "lucide-react";

export default function AdminRaffles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Mock raffle data
  const raffles = [
    {
      id: "raffle1",
      title: "iPhone 15 Pro Max",
      price: 10,
      totalTickets: 500,
      soldTickets: 350,
      startDate: "2025-04-10",
      endDate: "2025-05-15",
      status: "active",
      revenue: "$3,500.00"
    },
    {
      id: "raffle2",
      title: "PlayStation 5 Console Bundle",
      price: 5,
      totalTickets: 1000,
      soldTickets: 750,
      startDate: "2025-04-01",
      endDate: "2025-05-10",
      status: "active",
      revenue: "$3,750.00"
    },
    {
      id: "raffle3",
      title: "Luxury Weekend Getaway",
      price: 25,
      totalTickets: 200,
      soldTickets: 120,
      startDate: "2025-05-01",
      endDate: "2025-06-01",
      status: "upcoming",
      revenue: "$3,000.00"
    },
    {
      id: "raffle4",
      title: "MacBook Pro 16\"",
      price: 15,
      totalTickets: 300,
      soldTickets: 200,
      startDate: "2025-04-05",
      endDate: "2025-05-20",
      status: "active",
      revenue: "$3,000.00"
    },
    {
      id: "raffle5",
      title: "Gaming PC Setup",
      price: 20,
      totalTickets: 400,
      soldTickets: 400,
      startDate: "2025-03-10",
      endDate: "2025-04-10",
      status: "ended",
      revenue: "$8,000.00"
    },
    {
      id: "raffle6",
      title: "Spa Weekend for Two",
      price: 10,
      totalTickets: 500,
      soldTickets: 475,
      startDate: "2025-03-01",
      endDate: "2025-04-01",
      status: "ended",
      revenue: "$4,750.00"
    },
    {
      id: "raffle7",
      title: "Electric Bike",
      price: 15,
      totalTickets: 300,
      soldTickets: 0,
      startDate: "2025-05-15",
      endDate: "2025-06-15",
      status: "draft",
      revenue: "$0.00"
    }
  ];
  
  // Filter raffles based on search query and status filter
  const filteredRaffles = raffles.filter(raffle => {
    const matchesSearch = raffle.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || raffle.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // Status badge styles
  const statusStyles = {
    draft: "bg-gray-200 text-gray-800",
    upcoming: "bg-blue-100 text-blue-800",
    active: "bg-green-100 text-green-800",
    ended: "bg-gray-100 text-gray-800"
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Raffles</h1>
          <p className="text-muted-foreground">Manage all your raffles in one place</p>
        </div>
        <Link to="/admin/raffles/new">
          <Button className="bg-raffle-purple hover:bg-raffle-purple/90">
            <PlusIcon className="w-4 h-4 mr-2" /> Create Raffle
          </Button>
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Raffles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative md:w-80">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search raffles..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="md:w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="ended">Ended</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="hidden sm:table-cell">Tickets</TableHead>
                  <TableHead className="hidden md:table-cell">Dates</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden lg:table-cell">Revenue</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRaffles.map((raffle) => (
                  <TableRow key={raffle.id}>
                    <TableCell className="font-medium">{raffle.title}</TableCell>
                    <TableCell>${raffle.price.toFixed(2)}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {raffle.soldTickets}/{raffle.totalTickets}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <span className="text-xs text-muted-foreground block">
                        Start: {new Date(raffle.startDate).toLocaleDateString()}
                      </span>
                      <span className="text-xs text-muted-foreground block">
                        End: {new Date(raffle.endDate).toLocaleDateString()}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusStyles[raffle.status as keyof typeof statusStyles]}>
                        {raffle.status.charAt(0).toUpperCase() + raffle.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">{raffle.revenue}</TableCell>
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
