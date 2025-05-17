
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./hooks/use-cart";
import { DeliveryModeProvider } from "./hooks/use-delivery-mode";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <DeliveryModeProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DeliveryModeProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
