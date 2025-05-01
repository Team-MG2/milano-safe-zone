
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Shield } from "lucide-react";
import * as amplitude from '@amplitude/analytics-browser';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleContactClick = (e: React.MouseEvent) => {
    try {
      // Check if Amplitude is initialized and available before tracking
      // If you used the `@amplitude/analytics-browser` import:
      amplitude.track('Contattaci', {
        location: mobileMenuOpen ? 'mobile_menu' : 'desktop_navbar'
      });

    } catch (error) {
      console.error("Error tracking Amplitude event:", error);
      // Optionally handle the error, though typically tracking errors are non-critical
    }
    // --- End Amplitude Tracking Snippet ---

    // Redirect to the email address
    window.location.href = "mailto:milano.safe@gmail.com";
  };
  
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="flex items-center text-xl font-bold text-gradient">
                <Shield className="mr-2 h-6 w-6" /> 
                <span>MilanoSafe</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary">Home</a>
              <a href="#problema" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary">Il Problema</a>
              <a href="#soluzioni" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary">Le Soluzioni</a>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-gradient-pride hover:opacity-90"
                onClick={handleContactClick}
              >
                Contattaci
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Apri menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary">Home</a>
            <a href="#problema" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary">Il Problema</a>
            <a href="#soluzioni" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary">Le Soluzioni</a>
            <Button 
              variant="default" 
              size="sm" 
              className="mt-2 w-full bg-gradient-pride hover:opacity-90"
              onClick={handleContactClick}
            >
              Contattaci
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
