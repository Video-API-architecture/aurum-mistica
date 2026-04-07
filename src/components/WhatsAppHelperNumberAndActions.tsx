import { useCallback } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import {
  WHATSAPP_DISPLAY_BR,
  WHATSAPP_E164_PLUS,
  WHATSAPP_URL,
} from "@/constants/whatsapp";

type Props = {
  numberBlockClassName?: string;
};

const strongClass = { strong: <strong className="text-foreground" /> };

const WhatsAppHelperNumberAndActions = ({ numberBlockClassName = "mt-10" }: Props) => {
  const { t } = useTranslation();

  const copyNumber = useCallback(async () => {
    const text = WHATSAPP_E164_PLUS;
    try {
      await navigator.clipboard.writeText(text);
      toast.success(t("whatsappHelper.copied"));
    } catch {
      toast.error(t("whatsappHelper.copyError"));
    }
  }, [t]);

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
        {t("whatsappHelper.copyBtn")}
      </button>

      <div className="mt-10 rounded-xl border border-border/50 bg-muted/30 p-5 text-left text-sm text-muted-foreground">
        <p className="font-medium text-foreground">{t("whatsappHelper.tiktokTitle")}</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            <Trans i18nKey="whatsappHelper.tiktokStep1" components={strongClass} />
          </li>
          <li>
            <Trans i18nKey="whatsappHelper.tiktokStep2" components={strongClass} />
          </li>
          <li>
            <Trans i18nKey="whatsappHelper.tiktokStep3" components={strongClass} />
          </li>
        </ol>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
      >
        {t("whatsappHelper.openLink")}
      </a>
    </>
  );
};

export default WhatsAppHelperNumberAndActions;
