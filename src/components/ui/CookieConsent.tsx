import { useEffect, useState } from 'react';
import { grantConsent, hasConsent } from '@/lib/analytics';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostra banner só se ainda não decidiu
    if (!hasConsent() && !localStorage.getItem('girob2b_cookie_dismissed')) {
      setVisible(true);
    }
  }, []);

  function accept() {
    grantConsent();
    setVisible(false);
  }

  function dismiss() {
    try {
      localStorage.setItem('girob2b_cookie_dismissed', '1');
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-graphite text-offwhite p-4 md:p-6 shadow-lg"
    >
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm flex-1">
          Usamos cookies para entender o uso da página e melhorar a experiência. Ao continuar, você concorda.{' '}
          <a href="/privacidade" className="underline">
            Saiba mais
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={dismiss}
            className="px-4 py-2 text-sm border border-offwhite rounded hover:bg-graphite-soft transition"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-gold-burnt text-white rounded hover:bg-gold-soft transition font-medium"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
