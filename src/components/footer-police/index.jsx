import { useTranslation } from "react-i18next";
export default function FooterPolice() {
    const { t } = useTranslation();

    return (
        <div
            className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            {t('global.footerText')} <a href="#">{t('global.footerTerms')}</a>{" "}
            {t('global.footerAnd')} <a href="#">{t('global.footerPolice')}</a>.
        </div>
    );
}
