
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

export interface AuthUser {
  id: string;
  email?: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials extends SignInCredentials {
  name: string;
}

export const signIn = async ({ email, password }: SignInCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error during sign in:", error);
    toast({
      title: "Erro ao fazer login",
      description: error.message,
      variant: "destructive",
    });
    return { user: null, error };
  }

  toast({
    title: "Login realizado com sucesso",
    description: "Bem-vindo de volta!",
  });

  return { user: data.user, error: null };
};

export const signUp = async ({ email, password, name }: SignUpCredentials) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      }
    }
  });

  if (error) {
    console.error("Error during sign up:", error);
    toast({
      title: "Erro ao criar conta",
      description: error.message,
      variant: "destructive",
    });
    return { user: null, error };
  }

  toast({
    title: "Conta criada com sucesso",
    description: "Verifique seu email para confirmar o cadastro.",
  });

  return { user: data.user, error: null };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error during sign out:", error);
    toast({
      title: "Erro ao sair",
      description: error.message,
      variant: "destructive",
    });
    return false;
  }

  toast({
    title: "Sessão encerrada",
    description: "Você saiu com sucesso.",
  });

  return true;
};

export const getCurrentUser = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Error getting user:", error);
    return null;
  }

  return session?.user || null;
};

export const isAdmin = async (userId: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', userId)
    .eq('role', 'admin')
    .maybeSingle();

  if (error) {
    console.error("Error checking admin role:", error);
    return false;
  }

  return !!data;
};
