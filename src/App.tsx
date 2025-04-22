
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdminProtectedRoute } from "@/components/auth/AdminProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RaffleDetail from "./pages/RaffleDetail";
import RafflesPage from "./pages/RafflesPage";
import Auth from "./pages/Auth";
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRaffles from "./pages/admin/AdminRaffles";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminNewRaffle from "./pages/admin/AdminNewRaffle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/raffles" element={<RafflesPage />} />
            <Route path="/raffle/:id" element={<RaffleDetail />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Admin Routes - Protected */}
            <Route element={<AdminProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="raffles" element={<AdminRaffles />} />
                <Route path="raffles/new" element={<AdminNewRaffle />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>
            </Route>
            
            {/* Catch All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
