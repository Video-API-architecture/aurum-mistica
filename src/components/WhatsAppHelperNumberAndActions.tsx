import { useCallback } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import {
  WHATSAPP_DISPLAY_BR,
  WHATSAPP_E164_PLUS,
  WHATSAPP_URL,
} from "@/constants/whatsapp";

type Props = {
  /** Extra classes for the first block (e.g. mt-4 in modal vs mt-10 on full page). */
  numberBlockClassName?: string;
};

const WhatsAppHelperNumberAndActions = ({ numberBlockClassName = "mt-10" }: Props) => {
  const copyNumber = useCallback(async () => {
    const text = WHATSAPP_E164_PLUS;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Número copiado! Cole no WhatsApp.");
    } catch {
      toast.error("Não foi possível copiar. Anote o número na tela.");
    }
  }, []);

  return (
    <>
      <p
        className={`font-display text-3xl font-semibold tracking-wide text-primary sm:text-4xl ${numberBlockClassName}`}
      >
        {WHATSAPP_DISPLAY_BR}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{WHATSAPP_E164_PLUS}</p>

      <button
        type="button"
        onClick={copyNumber}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-8 py-4 font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <Copy className="h-5 w-5" aria-hidden />
        Copiar número com DDI
      </button>

      <div className="mt-10 rounded-xl border border-border/50 bg-muted/30 p-5 text-left text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Como abrir no WhatsApp a partir do TikTok</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            Toque em <strong className="text-foreground">⋯</strong> (três pontos) no canto da tela.
          </li>
          <li>
            Escolha <strong className="text-foreground">Abrir no navegador</strong> (Chrome ou Safari).
          </li>
          <li>
            Volte ao site e use o botão &quot;Abrir WhatsApp&quot; abaixo, ou cole o número que você copiou.
          </li>
        </ol>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
      >
        Abrir WhatsApp (funciona melhor no navegador externo)
      </a>
    </>
  );
};

export default WhatsAppHelperNumberAndActions;
