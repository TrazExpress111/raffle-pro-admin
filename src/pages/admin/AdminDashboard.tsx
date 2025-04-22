
import { ChartBarIcon, UsersIcon, ShoppingCartIcon, CreditCardIcon } from "lucide-react";
import { DashboardCard } from "@/components/admin/DashboardCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminDashboard() {
  // Mock data for dashboard
  const stats = {
    totalSales: "$24,857",
    ticketsSold: "3,254",
    activeRaffles: "12",
    totalUsers: "1,489"
  };

  // Mock data for recent sales
  const recentSales = [
    { id: "S123", user: "John Doe", raffle: "iPhone 15 Pro", tickets: 5, amount: "$50.00", date: "2025-04-21" },
    { id: "S124", user: "Jane Smith", raffle: "PlayStation 5", tickets: 3, amount: "$15.00", date: "2025-04-21" },
    { id: "S125", user: "Mike Johnson", raffle: "Luxury Getaway", tickets: 2, amount: "$50.00", date: "2025-04-20" },
    { id: "S126", user: "Sarah Williams", raffle: "MacBook Pro", tickets: 10, amount: "$150.00", date: "2025-04-20" },
    { id: "S127", user: "Alex Brown", raffle: "Gaming PC", tickets: 4, amount: "$40.00", date: "2025-04-19" },
  ];

  // Mock data for upcoming draws
  const upcomingDraws = [
    { id: "R123", title: "iPhone 15 Pro Max", tickets: "350/500", date: "2025-05-15", prize: "$1,299.00" },
    { id: "R124", title: "PlayStation 5 Bundle", tickets: "750/1000", date: "2025-05-10", prize: "$599.00" },
    { id: "R125", title: "Luxury Weekend Getaway", tickets: "120/200", date: "2025-06-01", prize: "$2,500.00" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your raffle business</p>
        </div>
        <Button className="bg-raffle-purple hover:bg-raffle-purple/90">
          + Create New Raffle
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Sales"
          value={stats.totalSales}
          icon={<CreditCardIcon className="h-4 w-4 text-muted-foreground" />}
          description="This month"
          trend={{ value: 12.5, positive: true }}
        />
        <DashboardCard
          title="Tickets Sold"
          value={stats.ticketsSold}
          icon={<ShoppingCartIcon className="h-4 w-4 text-muted-foreground" />}
          description="This month"
          trend={{ value: 8.2, positive: true }}
        />
        <DashboardCard
          title="Active Raffles"
          value={stats.activeRaffles}
          icon={<ChartBarIcon className="h-4 w-4 text-muted-foreground" />}
          description="Currently running"
        />
        <DashboardCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<UsersIcon className="h-4 w-4 text-muted-foreground" />}
          description="All time"
          trend={{ value: 4.1, positive: true }}
        />
      </div>

      <Tabs defaultValue="sales" className="w-full">
        <TabsList>
          <TabsTrigger value="sales">Recent Sales</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Draws</TabsTrigger>
        </TabsList>
        <TabsContent value="sales" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium">Order ID</th>
                      <th className="text-left py-3 font-medium">User</th>
                      <th className="text-left py-3 font-medium">Raffle</th>
                      <th className="text-left py-3 font-medium">Tickets</th>
                      <th className="text-left py-3 font-medium">Amount</th>
                      <th className="text-left py-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSales.map((sale) => (
                      <tr key={sale.id} className="border-b last:border-b-0">
                        <td className="py-3">{sale.id}</td>
                        <td className="py-3">{sale.user}</td>
                        <td className="py-3">{sale.raffle}</td>
                        <td className="py-3">{sale.tickets}</td>
                        <td className="py-3">{sale.amount}</td>
                        <td className="py-3">{new Date(sale.date).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Draws</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium">Raffle ID</th>
                      <th className="text-left py-3 font-medium">Title</th>
                      <th className="text-left py-3 font-medium">Tickets Sold</th>
                      <th className="text-left py-3 font-medium">Draw Date</th>
                      <th className="text-left py-3 font-medium">Prize Value</th>
                      <th className="text-left py-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingDraws.map((draw) => (
                      <tr key={draw.id} className="border-b last:border-b-0">
                        <td className="py-3">{draw.id}</td>
                        <td className="py-3">{draw.title}</td>
                        <td className="py-3">{draw.tickets}</td>
                        <td className="py-3">{new Date(draw.date).toLocaleDateString()}</td>
                        <td className="py-3">{draw.prize}</td>
                        <td className="py-3">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
