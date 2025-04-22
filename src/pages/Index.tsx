
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RaffleCard } from "@/components/raffle/RaffleCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Mock data for featured raffles
const featuredRaffles = [
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
    status: "active" as const
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
  }
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-raffle-purple/90 to-purple-700 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Win Amazing Prizes with RafflePro
              </h1>
              <p className="text-white/90 md:text-xl">
                Join thousands of winners in our secure online raffle platform. Purchase tickets, track your entries, and win incredible prizes.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/raffles">
                  <Button className="bg-white text-raffle-purple hover:bg-white/90">
                    Browse Raffles
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 lg:flex lg:justify-end">
              <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Prize raffle illustration" 
                  className="relative z-10 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Raffles */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Raffles</h2>
              <p className="text-muted-foreground mt-2">
                Check out our most popular active raffles
              </p>
            </div>
            <Link to="/raffles">
              <Button variant="outline">View All Raffles</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRaffles.map((raffle) => (
              <RaffleCard key={raffle.id} {...raffle} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="w-full py-12 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="text-muted-foreground mt-4 max-w-[700px]">
              RafflePro makes it easy to participate in our secure, transparent raffles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-raffle-purple text-white p-3 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
              <h3 className="text-xl font-bold">Choose a Raffle</h3>
              <p className="text-muted-foreground">Browse our active raffles and find prizes you'd love to win</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-raffle-purple text-white p-3 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
              <h3 className="text-xl font-bold">Purchase Tickets</h3>
              <p className="text-muted-foreground">Select your ticket numbers and complete the purchase</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-raffle-purple text-white p-3 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
              <h3 className="text-xl font-bold">Win Prizes</h3>
              <p className="text-muted-foreground">Join the live draw and claim your prize if you win</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Winners */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Recent Winners</h2>
            <p className="text-muted-foreground mt-4 max-w-[700px]">
              Congratulations to our latest lucky winners
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Winner cards would go here */}
            <div className="bg-background rounded-lg overflow-hidden shadow border">
              <div className="p-6 space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-raffle-softPurple flex items-center justify-center">
                  <span className="text-raffle-purple text-xl font-bold">JD</span>
                </div>
                <h3 className="font-bold">John D.</h3>
                <p className="text-sm">Won: iPhone 15 Pro Max</p>
                <p className="text-xs text-muted-foreground">April 10, 2025</p>
              </div>
            </div>
            
            <div className="bg-background rounded-lg overflow-hidden shadow border">
              <div className="p-6 space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-raffle-softPurple flex items-center justify-center">
                  <span className="text-raffle-purple text-xl font-bold">MS</span>
                </div>
                <h3 className="font-bold">Maria S.</h3>
                <p className="text-sm">Won: Gaming PC Setup</p>
                <p className="text-xs text-muted-foreground">April 5, 2025</p>
              </div>
            </div>
            
            <div className="bg-background rounded-lg overflow-hidden shadow border">
              <div className="p-6 space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-raffle-softPurple flex items-center justify-center">
                  <span className="text-raffle-purple text-xl font-bold">RK</span>
                </div>
                <h3 className="font-bold">Robert K.</h3>
                <p className="text-sm">Won: Weekend Spa Getaway</p>
                <p className="text-xs text-muted-foreground">March 28, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-raffle-purple text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Win?</h2>
            <p className="text-white/90 max-w-[600px] mx-auto">
              Join thousands of happy customers who have already won amazing prizes on our platform
            </p>
            <Link to="/raffles">
              <Button className="bg-white text-raffle-purple hover:bg-white/90">
                Start Playing Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
