
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RaffleCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  totalTickets: number;
  soldTickets: number;
  endDate: string;
  status: 'active' | 'upcoming' | 'ended';
}

export function RaffleCard({
  id,
  title,
  image,
  price,
  totalTickets,
  soldTickets,
  endDate,
  status
}: RaffleCardProps) {
  const statusColors = {
    active: "bg-green-500",
    upcoming: "bg-blue-500",
    ended: "bg-gray-500"
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title}
          className="w-full aspect-[3/2] object-cover" 
        />
        <Badge 
          className={`absolute top-2 right-2 ${statusColors[status]}`}
        >
          {status === 'active' ? 'Active' : status === 'upcoming' ? 'Upcoming' : 'Ended'}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Price:</span>
          <span className="font-medium">${price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tickets:</span>
          <span className="font-medium">{soldTickets} / {totalTickets}</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2 mt-2">
          <div
            className="bg-raffle-purple h-2 rounded-full"
            style={{ width: `${(soldTickets / totalTickets) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>Draw Date:</span>
          <span className="font-medium">{new Date(endDate).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/raffle/${id}`} className="w-full">
          <Button className="w-full bg-raffle-purple hover:bg-raffle-purple/90" disabled={status === 'ended'}>
            {status === 'active' ? 'Buy Tickets' : status === 'upcoming' ? 'View Details' : 'View Results'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
