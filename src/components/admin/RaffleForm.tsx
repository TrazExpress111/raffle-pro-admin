
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { RaffleFormData } from "@/integrations/supabase/types/raffles";

interface RaffleFormProps {
  initialData?: RaffleFormData;
  onSubmit: (data: RaffleFormData) => void;
  isEditing?: boolean;
  isSubmitting?: boolean;
}

export function RaffleForm({ 
  initialData, 
  onSubmit, 
  isEditing = false,
  isSubmitting = false
}: RaffleFormProps) {
  const [formData, setFormData] = useState<RaffleFormData>(initialData || {
    title: "",
    description: "",
    image: "",
    price: 5,
    totalTickets: 100,
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: "draft"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: Number(value) }));
  };

  const handleStatusChange = (value: string) => {
    setFormData(prev => ({ ...prev, status: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{isEditing ? "Editar Rifa" : "Criar Nova Rifa"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">URL da Imagem</Label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Preço do Bilhete (R$)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                min="1"
                step="0.01"
                value={formData.price}
                onChange={handleNumberChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="totalTickets">Total de Bilhetes</Label>
              <Input
                id="totalTickets"
                name="totalTickets"
                type="number"
                min="1"
                value={formData.totalTickets}
                onChange={handleNumberChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Data de Início</Label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endDate">Data de Término</Label>
              <Input
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select 
              value={formData.status} 
              onValueChange={handleStatusChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Rascunho</SelectItem>
                <SelectItem value="upcoming">Em Breve</SelectItem>
                <SelectItem value="active">Ativa</SelectItem>
                <SelectItem value="ended">Encerrada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => window.history.back()}
          >
            Cancelar
          </Button>
          <Button 
            type="submit" 
            className="bg-raffle-purple hover:bg-raffle-purple/90"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (isEditing ? "Atualizando..." : "Criando...") 
              : (isEditing ? "Atualizar Rifa" : "Criar Rifa")}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
