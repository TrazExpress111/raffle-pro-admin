
import { useNavigate } from "react-router-dom";
import { RaffleForm } from "@/components/admin/RaffleForm";

export default function AdminNewRaffle() {
  const navigate = useNavigate();
  
  const handleCreateRaffle = (formData: any) => {
    // Here you would normally send the data to your API
    console.log("Creating new raffle:", formData);
    
    // For demo purposes, just navigate back to the raffles list
    navigate("/admin/raffles");
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Raffle</h1>
        <p className="text-muted-foreground">Set up a new raffle for your platform</p>
      </div>
      
      <RaffleForm onSubmit={handleCreateRaffle} />
    </div>
  );
}
