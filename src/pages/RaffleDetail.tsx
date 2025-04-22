
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShoppingCartIcon, InfoIcon, CalendarIcon, TicketIcon } from "lucide-react";

export default function RaffleDetail() {
  const { id } = useParams();
  const [ticketCount, setTicketCount] = useState(1);
  
  // Mock raffle data - In a real app, you would fetch this based on the ID
  const raffle = {
    id: id || "raffle1",
    title: "iPhone 15 Pro Max",
    description: "Win the latest iPhone 15 Pro Max with 256GB storage. This flagship smartphone features the A17 Pro chip, 48MP camera system, and a stunning Super Retina XDR display with ProMotion technology. The prize includes the phone, charger, and a premium case.",
    image: "https://images.unsplash.com/photo-1707165511051-17bee00a637d",
    price: 10,
    totalTickets: 500,
    soldTickets: 350,
    startDate: "2025-04-10",
    endDate: "2025-05-15",
    status: "active",
    rules: [
      "Must be 18+ to participate",
      "One person can purchase a maximum of 20 tickets",
      "Winner will be selected randomly using a certified random number generator",
      "Winner will be notified via email within 24 hours of the draw",
      "Prize must be claimed within 30 days of notification",
      "Shipping is included to all locations within the continental US"
    ],
    prize: {
      name: "iPhone 15 Pro Max",
      description: "The latest iPhone 15 Pro Max with 256GB storage in Titanium Blue",
      value: "$1,299.00",
      image: "https://images.unsplash.com/photo-1707165511051-17bee00a637d"
    },
    organizer: {
      name: "RafflePro Official",
      verified: true
    }
  };
  
  const handleTicketCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 20) {
      setTicketCount(value);
    }
  };
  
  const getStatusClass = () => {
    switch (raffle.status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "ended":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-center mb-6">
            <Link to="/raffles" className="text-sm text-muted-foreground hover:underline">
              ← Back to Raffles
            </Link>
            <div className="hidden md:block text-muted-foreground">•</div>
            <Badge className={getStatusClass()}>
              {raffle.status.charAt(0).toUpperCase() + raffle.status.slice(1)}
            </Badge>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Raffle Image */}
            <div className="overflow-hidden rounded-lg border">
              <img 
                src={raffle.image} 
                alt={raffle.title}
                className="w-full aspect-square md:aspect-[4/3] object-cover"
              />
            </div>
            
            {/* Raffle Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{raffle.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-muted-foreground">Organized by:</span>
                  <span className="text-sm font-medium flex items-center">
                    {raffle.organizer.name}
                    {raffle.organizer.verified && (
                      <span className="ml-1 inline-flex items-center justify-center w-4 h-4 bg-blue-500 text-white rounded-full">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="w-3 h-3"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                    )}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Prize Value:</span>
                  <span className="font-medium">{raffle.prize.value}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ticket Price:</span>
                  <span className="font-medium">${raffle.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tickets Sold:</span>
                  <span className="font-medium">{raffle.soldTickets} / {raffle.totalTickets}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                  <div
                    className="bg-raffle-purple h-2 rounded-full"
                    style={{ width: `${(raffle.soldTickets / raffle.totalTickets) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Draw Date:</span>
                  <span className="font-medium flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1 text-muted-foreground" />
                    {new Date(raffle.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              <Separator />
              
              {raffle.status === "active" && (
                <div className="space-y-4">
                  <h3 className="font-medium">Buy Tickets</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-32">
                      <Input
                        type="number"
                        min={1}
                        max={20}
                        value={ticketCount}
                        onChange={handleTicketCountChange}
                      />
                    </div>
                    <div className="flex-1">
                      <Button className="w-full bg-raffle-purple hover:bg-raffle-purple/90">
                        <ShoppingCartIcon className="w-4 h-4 mr-2" />
                        Buy for ${(raffle.price * ticketCount).toFixed(2)}
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Maximum 20 tickets per person. Tickets cannot be refunded once purchased.
                  </p>
                </div>
              )}
              
              {raffle.status === "upcoming" && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium flex items-center text-blue-800">
                    <InfoIcon className="w-4 h-4 mr-2" />
                    Coming Soon
                  </h3>
                  <p className="text-sm text-blue-700 mt-1">
                    This raffle will start on {new Date(raffle.startDate).toLocaleDateString()}. Check back later to purchase tickets.
                  </p>
                </div>
              )}
              
              {raffle.status === "ended" && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium flex items-center text-gray-800">
                    <InfoIcon className="w-4 h-4 mr-2" />
                    Raffle Ended
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">
                    This raffle has ended. The winner will be announced shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <Tabs defaultValue="details" className="mt-10">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="prize">Prize Information</TabsTrigger>
              <TabsTrigger value="rules">Rules & Terms</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold">About This Raffle</h3>
                <p>{raffle.description}</p>
                <p>
                  Don't miss your chance to win this amazing prize! Purchase your tickets now before they sell out. The draw will be conducted live and the winner will be notified immediately.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="prize" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold">Prize Details</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start mt-4">
                  <div className="md:w-1/3">
                    <img
                      src={raffle.prize.image}
                      alt={raffle.prize.name}
                      className="w-full rounded-lg border"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold">{raffle.prize.name}</h4>
                    <p className="mt-2">{raffle.prize.description}</p>
                    <div className="mt-4 p-4 bg-secondary rounded-lg">
                      <div className="flex items-center justify-between">
                        <span>Retail Value:</span>
                        <span className="font-bold">{raffle.prize.value}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rules" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold">Raffle Rules</h3>
                <ul className="mt-4 space-y-2">
                  {raffle.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-raffle-purple text-white p-1 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mr-2 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg font-bold mt-6">Terms & Conditions</h4>
                <p>
                  By participating in this raffle, you agree to the complete terms and conditions of our platform. RafflePro reserves the right to modify these terms at any time without notice.
                </p>
                <p>
                  For more information, please read our full <Link to="/terms" className="text-raffle-purple hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-raffle-purple hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
