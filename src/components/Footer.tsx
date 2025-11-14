import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import sfwLogo from "@/assets/sfw-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={sfwLogo} alt="SFW Technologies" className="h-10 w-auto" />
            <p className="text-sm text-white/70">
              Building the future of sales, matching, and financial management with AI-powered solutions.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" asChild className="text-white/70 hover:text-white hover:bg-white/10">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild className="text-white/70 hover:text-white hover:bg-white/10">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild className="text-white/70 hover:text-white hover:bg-white/10">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Softworks Link - Right Side */}
          <div className="md:text-right">
            <a 
              href="https://softworkstech.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl md:text-2xl font-semibold text-white hover:text-white/80 transition-colors underline"
            >
              Visit Softworks Technologies
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© 2025 SFW Technologies Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
