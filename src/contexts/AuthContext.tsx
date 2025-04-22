
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isLoading: true,
  isAdmin: false,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Primeiro, configura o listener para mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, currentSession) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setIsLoading(false);
      
      // Verificar papel de admin quando houver uma alteração na autenticação
      if (currentSession?.user) {
        checkAdminRole(currentSession.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    // Depois, verifica a sessão atual
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setIsLoading(false);
      
      // Verificar papel de admin na inicialização
      if (currentSession?.user) {
        checkAdminRole(currentSession.user.id);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) {
        console.error("Error checking admin role:", error);
        setIsAdmin(false);
        return;
      }

      setIsAdmin(!!data);
    } catch (error) {
      console.error("Error checking admin role:", error);
      setIsAdmin(false);
    }
  };

  return (
    <AuthContext.Provider value={{ session, user, isLoading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
