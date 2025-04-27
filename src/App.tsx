
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import Dishes from "./pages/Dishes";
import DishDetail from "./pages/DishDetail";
import SingleDishDetail from "./pages/SingleDishDetail";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:slug" element={<CityDetail />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/dishes/:slug" element={<DishDetail />} />
          <Route path="/dishes/:slug/:restaurantId" element={<SingleDishDetail />} />
          <Route path="/search" element={<SearchResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
