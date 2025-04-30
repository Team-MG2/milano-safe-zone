
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-gradient">Sicurezza</span> Per La Comunità <span className="text-gradient">LGBTQ+</span> di Milano
            </h1>
            <p className="text-lg mb-8 md:mb-10 text-muted-foreground">
              Sentiti libero di esprimerti, vesti come preferisci, e cammina in sicurezza nelle strade di Milano con le nostre soluzioni innovative per la tua protezione personale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-pride hover:opacity-90"
                onClick={() => document.getElementById('soluzioni')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Scopri le Soluzioni
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Perché è Importante
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-muted-foreground">
              <div className="flex -space-x-2 overflow-hidden mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`inline-block h-8 w-8 rounded-full bg-pride-${i === 1 ? 'purple' : i === 2 ? 'magenta' : i === 3 ? 'pink' : 'blue'} border-2 border-background`}></div>
                ))}
              </div>
              <span>+500 persone nella nostra comunità</span>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-pride rounded-lg blur-md opacity-75 animate-pulse-glow"></div>
              <div className="relative bg-background rounded-lg shadow-xl overflow-hidden aspect-square md:aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                  <div className="text-center p-6 md:p-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gradient">La Sicurezza che Meriti</h2>
                    <p className="text-sm md:text-base mb-6">
                      Tre soluzioni innovative per proteggere te stesso mentre ti esprimi liberamente
                    </p>
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                      #MilanoSafeZone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
