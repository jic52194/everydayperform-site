import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ScrollToHash } from "@/components/ScrollToHash";
import Index from "./pages/Index"; // eager: homepage is the primary entry and LCP

// Route-split the remaining pages so each landing page ships only its own code
// instead of one ~630KB bundle for all 24 routes. This cuts the main-thread
// blocking on first load (the homepage no longer parses every other page's JS).
// The build-time prerender (scripts/prerender-legal.tsx) imports these pages
// directly and is unaffected by lazy loading here.
const Features = lazy(() => import("./pages/Features"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Faq = lazy(() => import("./pages/Faq"));
const Compare = lazy(() => import("./pages/Compare"));
const Guides = lazy(() => import("./pages/Guides"));
const FiveMinuteDay = lazy(() => import("./pages/FiveMinuteDay"));
const BusyParents = lazy(() => import("./pages/BusyParents"));
const FiveMinuteWorkouts = lazy(() => import("./pages/FiveMinuteWorkouts"));
const Entrepreneurs = lazy(() => import("./pages/Entrepreneurs"));
const Professionals = lazy(() => import("./pages/Professionals"));
const StreakApp = lazy(() => import("./pages/StreakApp"));
const Consistency = lazy(() => import("./pages/Consistency"));
const Adhd = lazy(() => import("./pages/Adhd"));
const NoEquipment = lazy(() => import("./pages/NoEquipment"));
const Accountability = lazy(() => import("./pages/Accountability"));
const StreakTracker = lazy(() => import("./pages/StreakTracker"));
const SimpleHabit = lazy(() => import("./pages/SimpleHabit"));
const Beginners = lazy(() => import("./pages/Beginners"));
const DailyTracker = lazy(() => import("./pages/DailyTracker"));
const PressKit = lazy(() => import("./pages/PressKit"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
        <Suspense fallback={<div className="min-h-screen" />}>
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
            <Route path="/guides/habit-tracker-for-adhd" element={<Adhd />} />
            <Route path="/guides/home-workout-no-equipment" element={<NoEquipment />} />
            <Route path="/guides/accountability-fitness-app" element={<Accountability />} />
            <Route path="/guides/workout-streak-tracker" element={<StreakTracker />} />
            <Route path="/guides/simple-habit-app" element={<SimpleHabit />} />
            <Route path="/guides/fitness-app-for-beginners" element={<Beginners />} />
            <Route path="/guides/daily-habit-tracker" element={<DailyTracker />} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/affiliate" element={<Affiliate />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
