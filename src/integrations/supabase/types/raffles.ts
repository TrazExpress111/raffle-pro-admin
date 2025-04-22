
export interface Raffle {
  id: string;
  title: string;
  description: string | null;
  image: string | null;
  price: number;
  total_tickets: number;
  start_date: string | null;
  end_date: string | null;
  status: 'draft' | 'active' | 'upcoming' | 'ended';
  created_by: string | null;
  created_at: string;
}

export interface RaffleFormData {
  title: string;
  description: string;
  image: string;
  price: number;
  totalTickets: number;
  startDate: string;
  endDate: string;
  status: 'draft' | 'active' | 'upcoming' | 'ended';
}
