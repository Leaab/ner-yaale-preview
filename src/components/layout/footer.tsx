import { Heart, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Accompagnement", href: "#accompagnement" },
    { label: "Comprendre les écoles", href: "#services" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-white mb-2">
              Ner Yaalé
            </h3>
            <p className="text-sky/80 text-sm mb-1">Mon école en Israël</p>
            <p className="text-white/60 leading-relaxed max-w-md mt-4">
              Informer, conseiller et accompagner les familles francophones
              pour le choix des écoles en Israël — pour que chaque enfant
              trouve un cadre adapté à son projet familial.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sky" />
                <span>113, rue Bayit Vagan, Jérusalem</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-sky" />
                <span>France : 01 86 96 39 86</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-sky" />
                <span>Israël : 053 708 4387</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-sky" />
                <a
                  href="mailto:contact@neryaale.com"
                  className="hover:text-white transition-colors"
                >
                  contact@neryaale.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-white mb-4">Liens</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#don"
                  className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                >
                  <Heart size={14} />
                  Faire un don
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Ner Yaalé — Association bénévole</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
