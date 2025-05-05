
import { Shield } from "lucide-react";

const Problem = () => {
  return (
    <section id="problema" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Il <span className="text-gradient">Problema</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Perché abbiamo bisogno di soluzioni per la sicurezza personale nelle nostre città
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background p-6 md:p-8 rounded-xl shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Intimidazioni Verbali</h3>
            <p className="text-muted-foreground">
              L'84% delle persone a Milano ha subito insulti o molestie verbali mentre camminava per strada, soprattutto di sera.
            </p>
          </div>
          
          <div className="bg-background p-6 md:p-8 rounded-xl shadow-md">
            <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Paura di Esprimersi</h3>
            <p className="text-muted-foreground">
              Il 72% delle persone limita il proprio modo di vestirsi o esprimersi per paura di attacchi o discriminazioni.
            </p>
          </div>
          
          <div className="bg-background p-6 md:p-8 rounded-xl shadow-md">
            <div className="bg-pride-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-pride-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Aggressioni Fisiche</h3>
            <p className="text-muted-foreground">
              Il 23% delle persone a Milano ha subito un'aggressione fisica o è stata minacciata nell'ultimo anno.
            </p>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 p-6 md:p-10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Dovresti sentirti a tuo agio nell'esprimerti
              </h3>
              <p className="text-muted-foreground">
                Vogliamo creare una Milano dove chiunque possa vestirsi, esprimersi e camminare per le strade senza paura. Nessuno dovrebbe sentirsi in pericolo per il solo fatto di essere se stesso.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="inline-block p-6 rounded-full bg-secondary/10 animate-pulse">
                <p className="text-3xl font-bold text-gradient">63%</p>
                <p className="text-sm text-center mt-2">evita certe zone di Milano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
