import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BrowserLocaleRedirect from "@/components/BrowserLocaleRedirect";
import LocaleLayout from "@/components/LocaleLayout";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatsAppChatPage from "./pages/WhatsAppChatPage.tsx";
import ServicePage from "./pages/ServicePage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BrowserLocaleRedirect />
        <Routes>
          <Route element={<LocaleLayout locale="pt" prefix="" />}>
            <Route path="/" element={<Index />} />
            <Route path="whatsapp" element={<WhatsAppChatPage />} />
            <Route path="servicos/:slug" element={<ServicePage />} />
          </Route>

          <Route path="/en" element={<LocaleLayout locale="en" prefix="/en" />}>
            <Route index element={<Index />} />
            <Route path="whatsapp" element={<WhatsAppChatPage />} />
            <Route path="servicos/:slug" element={<ServicePage />} />
          </Route>

          <Route path="/es" element={<LocaleLayout locale="es" prefix="/es" />}>
            <Route index element={<Index />} />
            <Route path="whatsapp" element={<WhatsAppChatPage />} />
            <Route path="servicos/:slug" element={<ServicePage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
