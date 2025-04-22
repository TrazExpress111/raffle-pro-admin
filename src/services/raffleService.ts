
import { supabase } from "@/integrations/supabase/client";
import { Raffle, RaffleFormData } from "@/integrations/supabase/types/raffles";
import { toast } from "@/components/ui/use-toast";

export const fetchRaffles = async (): Promise<Raffle[]> => {
  const { data, error } = await supabase
    .from('raffles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching raffles:", error);
    toast({
      title: "Erro ao carregar rifas",
      description: error.message,
      variant: "destructive",
    });
    return [];
  }

  return data || [];
};

export const fetchRaffle = async (id: string): Promise<Raffle | null> => {
  const { data, error } = await supabase
    .from('raffles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error("Error fetching raffle:", error);
    toast({
      title: "Erro ao carregar detalhes da rifa",
      description: error.message,
      variant: "destructive",
    });
    return null;
  }

  return data;
};

export const createRaffle = async (formData: RaffleFormData): Promise<Raffle | null> => {
  // Convert from form data format to database format
  const raffleData = {
    title: formData.title,
    description: formData.description,
    image: formData.image,
    price: formData.price,
    total_tickets: formData.totalTickets,
    start_date: formData.startDate,
    end_date: formData.endDate,
    status: formData.status,
  };

  const { data, error } = await supabase
    .from('raffles')
    .insert([raffleData])
    .select()
    .single();

  if (error) {
    console.error("Error creating raffle:", error);
    toast({
      title: "Erro ao criar rifa",
      description: error.message,
      variant: "destructive",
    });
    return null;
  }

  toast({
    title: "Rifa criada com sucesso",
    description: "A rifa foi adicionada ao sistema.",
  });

  return data;
};

export const updateRaffle = async (id: string, formData: RaffleFormData): Promise<Raffle | null> => {
  // Convert from form data format to database format
  const raffleData = {
    title: formData.title,
    description: formData.description,
    image: formData.image,
    price: formData.price,
    total_tickets: formData.totalTickets,
    start_date: formData.startDate,
    end_date: formData.endDate,
    status: formData.status,
  };

  const { data, error } = await supabase
    .from('raffles')
    .update(raffleData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error("Error updating raffle:", error);
    toast({
      title: "Erro ao atualizar rifa",
      description: error.message,
      variant: "destructive",
    });
    return null;
  }

  toast({
    title: "Rifa atualizada com sucesso",
    description: "As alterações foram salvas.",
  });

  return data;
};

export const deleteRaffle = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('raffles')
    .delete()
    .eq('id', id);

  if (error) {
    console.error("Error deleting raffle:", error);
    toast({
      title: "Erro ao excluir rifa",
      description: error.message,
      variant: "destructive",
    });
    return false;
  }

  toast({
    title: "Rifa excluída com sucesso",
    description: "A rifa foi removida do sistema.",
  });

  return true;
};
