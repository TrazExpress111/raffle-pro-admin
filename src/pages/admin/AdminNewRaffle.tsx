
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RaffleForm } from "@/components/admin/RaffleForm";
import { RaffleFormData } from "@/integrations/supabase/types/raffles";
import { createRaffle } from "@/services/raffleService";
import { useToast } from "@/components/ui/use-toast";

export default function AdminNewRaffle() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleCreateRaffle = async (formData: RaffleFormData) => {
    setIsSubmitting(true);
    
    try {
      const newRaffle = await createRaffle(formData);
      
      if (newRaffle) {
        // Navegue para a lista de rifas após a criação bem-sucedida
        navigate("/admin/raffles");
      }
    } catch (error) {
      console.error("Error creating raffle:", error);
      toast({
        title: "Erro ao criar rifa",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Criar Nova Rifa</h1>
        <p className="text-muted-foreground">Configure uma nova rifa para sua plataforma</p>
      </div>
      
      <RaffleForm onSubmit={handleCreateRaffle} isSubmitting={isSubmitting} />
    </div>
  );
}
