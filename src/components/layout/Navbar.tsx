
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserIcon, ShoppingCartIcon } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-raffle-purple">RafflePro</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-raffle-purple">
            Home
          </Link>
          <Link to="/raffles" className="transition-colors hover:text-raffle-purple">
            Raffles
          </Link>
          <Link to="/winners" className="transition-colors hover:text-raffle-purple">
            Winners
          </Link>
          <Link to="/about" className="transition-colors hover:text-raffle-purple">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCartIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <UserIcon className="mr-2 h-4 w-4" />
              Admin Panel
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
