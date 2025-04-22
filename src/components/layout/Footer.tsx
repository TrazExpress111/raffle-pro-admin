
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container flex flex-col gap-6 py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <Link to="/" className="text-lg font-bold">
              RafflePro
            </Link>
            <p className="text-sm text-muted-foreground">
              Secure raffle platform with guaranteed fair draws
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link to="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-sm hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RafflePro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
