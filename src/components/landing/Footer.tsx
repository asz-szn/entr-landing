import { Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-grid">
      <div className="card-raised card-pad">
        <div className="grid md:grid-cols-4 gap-[40px]">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-5xl font-bold tracking-tight mb-[20px]">ENTR</h3>
            <p className="font-mono text-xs opacity-50 max-w-xs leading-relaxed">
              The future of event ticketing. Built on blockchain for fairness, transparency, and true ownership.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs tracking-widest opacity-30 mb-[20px]">[ LINKS ]</h4>
            <ul className="space-y-2">
              {["About", "Documentation", "Blog", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs tracking-widest opacity-30 mb-[20px]">[ CONNECT ]</h4>
            <div className="grid-cols-inner grid-cols-[repeat(auto-fill,40px)]">
              {[Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="card-raised w-[40px] h-[40px] flex items-center justify-center hover:bg-card/80 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/8 mt-[40px] pt-[20px] flex flex-col md:flex-row justify-between items-center gap-[20px]">
          <p className="font-mono text-[10px] opacity-30">© 2025 ENTR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-[40px]">
            <a href="#" className="font-mono text-[10px] opacity-30 hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="font-mono text-[10px] opacity-30 hover:opacity-100 transition-opacity">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
