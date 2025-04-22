
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RaffleCard } from "@/components/raffle/RaffleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

// Mock data for all raffles
const allRaffles = [
  {
    id: "raffle1",
    title: "iPhone 15 Pro Max",
    image: "https://images.unsplash.com/photo-1707165511051-17bee00a637d",
    price: 10,
    totalTickets: 500,
    soldTickets: 350,
    endDate: "2025-05-15",
    status: "active" as const
  },
  {
    id: "raffle2",
    title: "PlayStation 5 Console Bundle",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e",
    price: 5,
    totalTickets: 1000,
    soldTickets: 750,
    endDate: "2025-05-10",
    status: "active" as const
  },
  {
    id: "raffle3",
    title: "Luxury Weekend Getaway",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    price: 25,
    totalTickets: 200,
    soldTickets: 120,
    endDate: "2025-06-01",
    status: "upcoming" as const
  },
  {
    id: "raffle4",
    title: "MacBook Pro 16\"",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
    price: 15,
    totalTickets: 300,
    soldTickets: 200,
    endDate: "2025-05-20",
    status: "active" as const
  },
  {
    id: "raffle5",
    title: "Gaming PC Setup",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
    price: 20,
    totalTickets: 400,
    soldTickets: 400,
    endDate: "2025-04-10",
    status: "ended" as const
  },
  {
    id: "raffle6",
    title: "Spa Weekend for Two",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    price: 10,
    totalTickets: 500,
    soldTickets: 475,
    endDate: "2025-04-01",
    status: "ended" as const
  },
  {
    id: "raffle7",
    title: "Electric Bike",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
    price: 15,
    totalTickets: 300,
    soldTickets: 75,
    endDate: "2025-06-15",
    status: "active" as const
  },
  {
    id: "raffle8",
    title: "Designer Handbag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    price: 8,
    totalTickets: 250,
    soldTickets: 180,
    endDate: "2025-05-25",
    status: "active" as const
  }
];

export default function RafflesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("endDate");
  
  // Filter raffles based on search query and status filter
  const filteredRaffles = allRaffles.filter(raffle => {
    const matchesSearch = raffle.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || raffle.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // Sort raffles based on the selected sort option
  const sortedRaffles = [...filteredRaffles].sort((a, b) => {
    switch (sortBy) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "endDate":
        return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
      case "popularity":
        return (b.soldTickets / b.totalTickets) - (a.soldTickets / a.totalTickets);
      default:
        return 0;
    }
  });
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Browse Raffles</h1>
          <p className="text-muted-foreground mb-8">
            Find and enter amazing raffles to win incredible prizes
          </p>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search raffles..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Raffles</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="ended">Ended</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="endDate">End Date (Soonest)</SelectItem>
                  <SelectItem value="priceAsc">Price (Low to High)</SelectItem>
                  <SelectItem value="priceDesc">Price (High to Low)</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Results */}
          {sortedRaffles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedRaffles.map((raffle) => (
                <RaffleCard key={raffle.id} {...raffle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No raffles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
