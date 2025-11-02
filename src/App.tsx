import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Investments from "./pages/Investments";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Articles from "./pages/Articles";
import AboutTeakwood from "./pages/AboutTeakwood";
import OurTeam from "./pages/OurTeam";
import FAQs from "./pages/FAQs";
import Impact from "./pages/Impact";
import OurImpact from "./pages/OurImpact";
import OurProjects from "./pages/OurProjects";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about-teakwood" element={<AboutTeakwood />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
