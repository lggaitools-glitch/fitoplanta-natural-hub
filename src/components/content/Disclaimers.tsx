import { AlertTriangle, Link as LinkIcon } from 'lucide-react';

export const MedicalDisclaimer = () => {
  return (
    <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
      <div className="flex gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-1">
            Aviso Importante
          </h4>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Este conteúdo é apenas informativo e não substitui orientação médica profissional. 
            Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento, 
            especialmente se você está grávida, amamentando ou possui condições de saúde preexistentes.
          </p>
        </div>
      </div>
    </div>
  );
};

export const AffiliateDisclaimer = () => {
  return (
    <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
      <div className="flex gap-3">
        <LinkIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">
            Transparência
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Este artigo pode conter links de afiliados. Isso significa que podemos receber uma 
            comissão se você comprar através dos nossos links, sem custo adicional para você. 
            Isso nos ajuda a manter o site e continuar produzindo conteúdo de qualidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CombinedDisclaimer = () => {
  return (
    <div className="space-y-4 mt-8 pt-8 border-t border-border">
      <MedicalDisclaimer />
      <AffiliateDisclaimer />
    </div>
  );
};
