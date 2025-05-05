
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BellRing, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://btfnxjwmzeqtcrdwxvwz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0Zm54andtemVxdGNyZHd4dnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMDI4NjcsImV4cCI6MjA2MTU3ODg2N30.I8_eYigIPjmBtctyuqd8b89wZej1sZwn79FeJANQWNs");
interface Solution {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: React.ElementType;
  color: string;
}

const solutions: Solution[] = [
  {
    id: 1,
    title: "SafeGuard Alarm",
    description: "Un dispositivo anti-stress con allarme e condivisione della posizione che può essere attivato quando ti senti in pericolo.",
    features: [
      "Allarme ad alto volume (120dB)",
      "Condivisione istantanea della posizione",
      "Design discreto e alla moda",
      "Batteria di lunga durata"
    ],
    price: "49 EUR",
    icon: BellRing,
    color: "primary"
  },
  {
    id: 2,
    title: "Safe mApp",
    description: "Un'applicazione che ti fa stare al sicurə quando sei in giro.",
    features: [
      "Condivisione della Posizione con contatti selezionati",
      "Registrazione audio e video di testimonianza",
      "Possibilità di richiedere soccorso a vigilanti professionisti",
      "... e molto altro"
    ],
    price: "9 EUR/mese",
    icon: MessageCircle,
    color: "secondary"
  }
];

const EmailForm = ({ solution, onClose }: { solution: Solution, onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [nome, setName] = useState("");
  const [cognome, setSurname] = useState("");
  const [numeroDiTelefono, setPhoneNumber] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const { error } = await supabase.from("Emails").insert([
        { email: email, name: nome, surname: cognome, phoneNumber: numeroDiTelefono, solution_id: solution.id },
      ]);
      if (error) throw error;
      toast({
        title: "Grazie per il tuo interesse!",
        description: "Ti contatteremo presto con maggiori informazioni.",
      });
      onClose();
    } catch (error) {
      console.error("Supabase Error:", error);
      toast({
        title: "Errore",
        description: "Non siamo riusciti a salvare la tua email. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
      <Label htmlFor="Nome">Nome</Label>
        <Input
          id="Nome"
          type="Nome"
          placeholder="Il tuo nome"
          required
          value={nome}
          onChange={(e) => setName(e.target.value)}
        /><Label htmlFor="Cognome">Cognome</Label>
        <Input
          id="Cognome"
          type="Cognome"
          placeholder="Il tuo cognome"
          required
          value={cognome}
          onChange={(e) => setSurname(e.target.value)}
        /><Label htmlFor="Numero di telefono">Numero di telefono</Label>
        <Input
          id="Numero di telefono"
          type="Numero di telefono"
          placeholder="Il tuo numero di telefono"
          required
          value={numeroDiTelefono}
          onChange={(e) => {const value = e.target.value.replace(/\D/g, "");
            setPhoneNumber(value ? Number(value) : 0);
            console.log(numeroDiTelefono)
          }
          }
        />
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Il tuo indirizzo email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-pride hover:opacity-90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Invio in corso..." : "Ricevi Informazioni"}
      </Button>
    </form>
  );
};

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  return (
    <section id="soluzioni" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Le Nostre <span className="text-gradient">Soluzioni</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Prodotti innovativi pensati per la sicurezza e la libertà di tutti
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.id} className="overflow-hidden border-t-4 border-t-pride-purple transition-transform hover:scale-105">
              <CardHeader>
                <div className={`bg-${solution.color}/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  <solution.icon className={`h-6 w-6 text-${solution.color}`} />
                </div>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-stretch gap-4">
                <div className="font-bold text-xl text-center">{solution.price}</div>
                <Button 
                  className={solution.id === 1 ? "w-full bg-primary hover:bg-primary/90" : "w-full bg-secondary hover:bg-secondary/90"}
                  onClick={() => setSelectedSolution(solution)}
                >
                  Mi interessa
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Dialog open={!!selectedSolution} onOpenChange={(open) => !open && setSelectedSolution(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedSolution?.title}</DialogTitle>
              <DialogDescription>
                Inserisci la tua email per ricevere maggiori informazioni su questo prodotto.
              </DialogDescription>
            </DialogHeader>
            {selectedSolution && (
              <EmailForm 
                solution={selectedSolution} 
                onClose={() => setSelectedSolution(null)} 
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Solutions;
