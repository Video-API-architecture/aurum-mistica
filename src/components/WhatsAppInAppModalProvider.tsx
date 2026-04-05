import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import WhatsAppHelperNumberAndActions from "@/components/WhatsAppHelperNumberAndActions";

type WhatsAppInAppContextValue = {
  openWhatsAppHelper: () => void;
};

export const WhatsAppInAppModalContext = createContext<WhatsAppInAppContextValue | null>(null);

export function WhatsAppInAppModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openWhatsAppHelper = useCallback(() => setOpen(true), []);

  const value = useMemo(() => ({ openWhatsAppHelper }), [openWhatsAppHelper]);

  return (
    <WhatsAppInAppModalContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-md overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl sm:text-2xl">
              Fale com a Aurum Mística no WhatsApp
            </DialogTitle>
            <DialogDescription className="text-left text-base">
              No app do TikTok ou Instagram, o link direto pode ser bloqueado. Use o número abaixo ou
              abra o site no Chrome ou Safari.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center">
            <span className="mb-2 block text-4xl" aria-hidden>
              💬
            </span>
            <WhatsAppHelperNumberAndActions numberBlockClassName="mt-4" />
          </div>
        </DialogContent>
      </Dialog>
    </WhatsAppInAppModalContext.Provider>
  );
}
