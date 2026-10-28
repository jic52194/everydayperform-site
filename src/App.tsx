import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToHash } from "@/components/ScrollToHash";
import Index from "./pages/Index";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Faq from "./pages/Faq";
import Compare from "./pages/Compare";
import Guides from "./pages/Guides";
import FiveMinuteDay from "./pages/FiveMinuteDay";
import BusyParents from "./pages/BusyParents";
import FiveMinuteWorkouts from "./pages/FiveMinuteWorkouts";
import Entrepreneurs from "./pages/Entrepreneurs";
import Professionals from "./pages/Professionals";
import StreakApp from "./pages/StreakApp";
import Consistency from "./pages/Consistency";
import PressKit from "./pages/PressKit";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Vite BASE_URL includes a trailing slash. React Router basename must not.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/five-minute-day" element={<FiveMinuteDay />} />
          <Route path="/guides/habit-tracker-for-busy-parents" element={<BusyParents />} />
          <Route path="/guides/5-minute-workouts" element={<FiveMinuteWorkouts />} />
          <Route path="/guides/workout-app-for-entrepreneurs" element={<Entrepreneurs />} />
          <Route path="/guides/workout-app-for-professionals" element={<Professionals />} />
          <Route path="/guides/habit-streak-app" element={<StreakApp />} />
          <Route path="/guides/how-to-stay-consistent" element={<Consistency />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
