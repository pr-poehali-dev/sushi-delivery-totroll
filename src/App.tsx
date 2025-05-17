import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import { DeliveryModeProvider } from "@/hooks/use-delivery-mode";
import { CartProvider } from "@/hooks/use-cart";

function App() {
  return (
    <DeliveryModeProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </DeliveryModeProvider>
  );
}

export default App;
