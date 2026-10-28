import { Link } from "react-router-dom";
import { PublicNavbar } from "@/components/PublicNavbar";
import { PublicFooter } from "@/components/PublicFooter";
import { SEO } from "@/components/SEO";
import { StickySignup } from "@/components/StickySignup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PAGES, pressJsonLd, PRICING_HASH } from "@/content/seo";
import { Download } from "lucide-react";

import { motion, Variants } from "framer-motion";

export default function PressKit() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <SEO
        title={PAGES.press.title}
        description={PAGES.press.description}
        path={PAGES.press.path}
        jsonLd={pressJsonLd}
      />
      <PublicNavbar />
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}press-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
        />
      </div>

      <main id="main" className="flex-1 relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tight mb-6 leading-[1.1]">
              Press & <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">Media Kit</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Everything you need to cover Everyday Performance OS. For press inquiries, please contact press@everydayperform.com.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-8 py-6 md:px-10 md:py-7 font-oswald uppercase tracking-wider shadow-[0_0_40px_-10px_rgba(143,143,86,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(143,143,86,0.7)]"
                asChild
              >
                <a href="https://app.everydayperform.com/signup">Sign Up</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full border-white/20 hover:bg-white/10 backdrop-blur-sm bg-white/5 text-base md:text-lg px-8 py-6 md:px-10 md:py-7 font-oswald uppercase tracking-wider transition-all hover:scale-105"
                asChild
              >
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              <Link to={PAGES.features.path} className="underline underline-offset-4 hover:text-primary">Features</Link>
              {" · "}
              <Link to={PRICING_HASH} className="underline underline-offset-4 hover:text-primary">Pricing</Link>
              {" · "}
              <Link to={PAGES.faq.path} className="underline underline-offset-4 hover:text-primary">FAQ</Link>
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-16"
          >
            {/* Mission Statement */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-oswald font-bold uppercase mb-8 border-b border-white/10 pb-4 text-primary">Mission Statement</h2>
              <Card className="bg-black/40 border-white/10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-colors">
                <CardContent className="p-8 md:p-10">
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium italic">
                    "Everyday Performance exists to help busy people build healthier, stronger, and more productive lives through simple daily habits. We believe you shouldn't have to choose between your career, your family, and your health. By focusing on consistency over perfection, we help people create lasting results that fit into real life—not the other way around."
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* Brand Assets */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-oswald font-bold uppercase mb-8 border-b border-white/10 pb-4 text-primary">Brand Assets</h2>
              <div className="max-w-3xl gap-8">
                <Card className="bg-black/40 border-white/10 backdrop-blur-md shadow-2xl overflow-hidden group hover:border-white/20 transition-all">
                  <CardHeader className="border-b border-white/5 bg-white/5">
                    <CardTitle className="font-oswald uppercase text-foreground tracking-wider">Primary Logo</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-center py-12 bg-black/60 rounded-xl border border-white/5 group-hover:border-primary/30 transition-colors shadow-inner">
                      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Everyday Performance Logo" className="h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                    </div>
                    <Button variant="outline" className="w-full border-white/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" asChild>
                      <a href={`${import.meta.env.BASE_URL}logo.png`} download="everyday-performance-logo.png">
                        <Download className="w-4 h-4" /> Download Logo Assets
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Colors */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-oswald font-bold uppercase mb-8 border-b border-white/10 pb-4 text-primary">Color Palette</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-3 group">
                  <div className="h-32 rounded-xl bg-[#050505] border border-white/10 shadow-lg group-hover:scale-105 transition-transform group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
                  <div>
                    <div className="font-semibold text-base">Background</div>
                    <div className="text-sm text-muted-foreground font-mono mt-1">HEX: #050505</div>
                  </div>
                </div>
                <div className="space-y-3 group">
                  <div className="h-32 rounded-xl bg-[#121212] border border-white/10 shadow-lg group-hover:scale-105 transition-transform group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
                  <div>
                    <div className="font-semibold text-base">Card/Surface</div>
                    <div className="text-sm text-muted-foreground font-mono mt-1">HEX: #121212</div>
                  </div>
                </div>
                <div className="space-y-3 group">
                  <div className="h-32 rounded-xl bg-[#8F8F56] border border-white/10 shadow-lg group-hover:scale-105 transition-transform group-hover:shadow-[0_0_20px_rgba(143,143,86,0.3)]"></div>
                  <div>
                    <div className="font-semibold text-base">Primary Accent</div>
                    <div className="text-sm text-muted-foreground font-mono mt-1">HEX: #8F8F56</div>
                  </div>
                </div>
                <div className="space-y-3 group">
                  <div className="h-32 rounded-xl bg-[#F5F5F5] border border-white/10 shadow-lg group-hover:scale-105 transition-transform group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"></div>
                  <div>
                    <div className="font-semibold text-base text-black dark:text-white">Text Primary</div>
                    <div className="text-sm text-muted-foreground font-mono mt-1">HEX: #F5F5F5</div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Typography */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-oswald font-bold uppercase mb-8 border-b border-white/10 pb-4 text-primary">Typography</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-black/40 border-white/10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-colors">
                  <CardContent className="p-8 space-y-4">
                    <div className="mb-6">
                      <div className="text-sm text-primary font-semibold tracking-widest uppercase mb-2">Headings</div>
                      <div className="font-oswald text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Oswald</div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      We use Oswald for all primary headings, titles, and bold uppercase accents to convey strength, structure, and athletic performance.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-black/40 border-white/10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-colors">
                  <CardContent className="p-8 space-y-4">
                    <div className="mb-6">
                      <div className="text-sm text-primary font-semibold tracking-widest uppercase mb-2">Body Text</div>
                      <div className="font-sans text-4xl font-medium text-white">Inter</div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Inter is used for all body copy, paragraphs, and UI elements to ensure maximum readability, clarity, and a clean modern aesthetic.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

          </motion.div>
        </div>
      </main>

      <div className="md:hidden h-24" aria-hidden="true" />
      <PublicFooter />
      <StickySignup />
    </div>
  );
}
