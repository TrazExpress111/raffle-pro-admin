
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChartBarIcon, 
  ShoppingCartIcon, 
  UsersIcon, 
  SettingsIcon 
} from "lucide-react";

export function AdminLayout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-raffle-charcoal text-white">
        <div className="flex h-14 items-center border-b border-white/10 px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">RafflePro</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-4 px-2">
          <nav className="flex flex-col gap-1">
            <Link to="/admin">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive("/admin") 
                    ? "bg-white/10 hover:bg-white/10" 
                    : "hover:bg-white/5"
                } text-white`}
              >
                <ChartBarIcon className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link to="/admin/raffles">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive("/admin/raffles") 
                    ? "bg-white/10 hover:bg-white/10" 
                    : "hover:bg-white/5"
                } text-white`}
              >
                <ShoppingCartIcon className="mr-2 h-4 w-4" />
                Raffles
              </Button>
            </Link>
            <Link to="/admin/users">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive("/admin/users") 
                    ? "bg-white/10 hover:bg-white/10" 
                    : "hover:bg-white/5"
                } text-white`}
              >
                <UsersIcon className="mr-2 h-4 w-4" />
                Users
              </Button>
            </Link>
            <Link to="/admin/settings">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive("/admin/settings") 
                    ? "bg-white/10 hover:bg-white/10" 
                    : "hover:bg-white/5"
                } text-white`}
              >
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b flex items-center px-4 md:px-6 justify-between">
          <div className="md:hidden font-bold">Admin Panel</div>
          <div className="md:flex items-center gap-4 hidden">
            <span className="text-sm text-muted-foreground">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="sm">
                Exit Admin
              </Button>
            </Link>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
