import { PublicNavbar } from "@/components/PublicNavbar";
import { PublicFooter } from "@/components/PublicFooter";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CARD_LINE,
  FREE_FAQ_ANSWER,
  HEALTH_DISCLAIMER,
  PRICING_TEASER,
  SIGNUP_URL,
} from "@/content/marketing";

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { sounds } from "@/lib/sounds";
import { Play, Pause, CheckCircle2, Circle, Clock, Trophy, Flame, Dumbbell, ShieldCheck, ArrowRight } from "lucide-react";

/* ─── App Preview Cards ─────────────────────────────────────── */

const cardBase =
  "w-full h-full bg-[#0e0e0e] border border-white/8 p-7 rounded-[2rem] backdrop-blur-xl relative overflow-hidden text-left group transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_-20px_rgba(143,143,86,0.35)] flex flex-col justify-between";

const HabitTrackerPreview = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Morning Hydration", completed: true },
    { id: 2, name: "5-Min Mobility", completed: false },
    { id: 3, name: "Walk or Workout", completed: false },
    { id: 4, name: "Evening Reset", completed: false },
  ]);

  const toggleHabit = (id: number) => {
    sounds.playClick();
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const completedCount = habits.filter(h => h.completed).length;
  const progress = (completedCount / habits.length) * 100;

  return (
    <div className={cardBase} style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/15 blur-[70px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5">
        <motion.div className="h-full bg-gradient-to-r from-primary to-primary/60" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5, ease: "easeInOut" }} />
      </div>

      <div className="flex justify-between items-center mb-6 mt-1 relative z-10">
        <div>
          <h3 className="text-white font-oswald uppercase text-lg tracking-widest mb-0.5">Today's Habits</h3>
          <p className="text-muted-foreground text-xs">{completedCount} of {habits.length} completed</p>
        </div>
        <div className="w-11 h-11 rounded-full flex items-center justify-center relative shrink-0">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="8" />
            <motion.circle cx="50" cy="50" r="44" fill="none" stroke="#8F8F56" strokeWidth="8" strokeLinecap="round" initial={{ strokeDasharray: "276 276", strokeDashoffset: 276 }} animate={{ strokeDashoffset: 276 - (276 * progress) / 100 }} transition={{ duration: 0.5, ease: "easeInOut" }} />
          </svg>
          <span className="text-[10px] font-bold text-white">{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="space-y-2.5 relative z-10">
        {habits.map((habit) => (
          <motion.button key={habit.id} onClick={() => toggleHabit(habit.id)} whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
              habit.completed ? "bg-primary/10 border-primary/25 text-white" : "bg-white/[0.03] border-white/[0.06] text-gray-400 hover:bg-white/[0.06]"
            }`}
          >
            <div className={`shrink-0 transition-colors duration-300 ${habit.completed ? "text-primary" : "text-gray-600"}`}>
              {habit.completed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
            </div>
            <span className={`text-sm font-medium transition-all duration-300 text-left ${habit.completed ? "line-through opacity-60" : ""}`}>{habit.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const StreakPreview = () => (
  <div className={cardBase} style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}>
    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-500/15 blur-[70px] rounded-full pointer-events-none" />
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white font-oswald uppercase text-lg tracking-widest">Current Streak</h3>
        <div className="w-9 h-9 rounded-xl bg-orange-500/15 flex items-center justify-center border border-orange-500/20">
          <Flame className="w-5 h-5 text-orange-400" />
        </div>
      </div>
      <div className="text-6xl font-bold text-white mb-1 leading-none">14</div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Day Streak</p>
      <p className="text-sm text-orange-400 font-medium">You're building proof. Keep going.</p>
    </div>
    <div className="mt-auto pt-8">
      <div className="flex justify-between text-xs mb-2.5">
        <span className="text-white font-semibold tracking-wide">Level 3 — Warrior</span>
        <span className="text-primary font-semibold">850 / 1000 XP</span>
      </div>
      <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
        <motion.div className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full" initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }} />
      </div>
      <div className="flex justify-between text-xs mt-2 text-muted-foreground">
        <span>150 XP to next level</span>
        <span>🏆 Warrior</span>
      </div>
    </div>
  </div>
);

const WorkoutPreview = () => (
  <div className={cardBase} style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}>
    <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[70px] rounded-full pointer-events-none" />
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white font-oswald uppercase text-lg tracking-widest">Today's Workout</h3>
        <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/20">
          <Dumbbell className="w-5 h-5 text-blue-400" />
        </div>
      </div>
      <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-4 mb-3">
        <h4 className="text-white font-semibold text-base mb-2">Upper Body Power</h4>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 22 min</span>
          <span className="flex items-center gap-1.5"><Dumbbell className="w-3.5 h-3.5" /> Bodyweight-friendly</span>
        </div>
      </div>
      <div className="flex gap-2">
        {["Push-Ups", "Rows", "Dips"].map(e => (
          <span key={e} className="text-xs bg-white/5 border border-white/8 rounded-full px-3 py-1 text-gray-400">{e}</span>
        ))}
      </div>
    </div>
    <div className="flex items-center justify-center mt-6">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="8" />
          <motion.circle cx="50" cy="50" r="44" fill="none" stroke="#60a5fa" strokeWidth="8" strokeLinecap="round" initial={{ strokeDasharray: "276 276", strokeDashoffset: 276 }} whileInView={{ strokeDashoffset: 276 - (276 * 65) / 100 }} transition={{ duration: 1.2, delay: 0.3 }} />
        </svg>
        <div className="text-center">
          <div className="text-lg font-bold text-white">65%</div>
          <div className="text-[9px] text-gray-500 uppercase tracking-wider">Done</div>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Testimonial Card ───────────────────────────────────────── */

type Note = {
  name: string;
  role: string;
  text: string;
  avatar?: string;
  mediaUrl?: string;
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Note; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!mediaRef.current) return;
    if (isPlaying) {
      mediaRef.current.pause();
    } else {
      void mediaRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="bg-[#0e0e0e] border border-white/8 p-8 rounded-[2rem] flex flex-col items-center text-center h-full hover:border-primary/30 hover:shadow-[0_0_50px_-20px_rgba(143,143,86,0.3)] transition-all duration-500"
    >
      {testimonial.avatar && (
        <div className="relative w-20 h-20 shrink-0 mb-5">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/30 p-[2px]">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
          </div>
          {testimonial.mediaUrl && (
            <>
              <button onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/55 rounded-full hover:bg-black/70 transition-colors text-white"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </button>
              <video ref={mediaRef} src={testimonial.mediaUrl} className="hidden" onEnded={() => setIsPlaying(false)} playsInline />
            </>
          )}
        </div>
      )}
      <p className="text-gray-300 text-base leading-relaxed mb-7 flex-1 italic">"{testimonial.text}"</p>
      <div>
        <div className="font-oswald uppercase text-lg font-semibold tracking-wider text-white">{testimonial.name}</div>
        <div className="text-primary text-xs mt-1 tracking-wide">{testimonial.role}</div>
      </div>
    </motion.div>
  );
};

/* ─── Section Wrapper ────────────────────────────────────────── */
const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`relative z-10 w-full ${className}`}>
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">{children}</div>
  </section>
);

function OfferNotes({ showDisclaimer = false }: { showDisclaimer?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2 max-w-xl mx-auto">
      <p className="text-sm text-foreground/85">{PRICING_TEASER}</p>
      <p className="text-xs text-muted-foreground/80">{CARD_LINE}</p>
      {showDisclaimer && (
        <p className="text-xs text-muted-foreground/80 leading-relaxed">
          {HEALTH_DISCLAIMER}{" "}
          <Link to="/terms#health-disclaimer" className="underline underline-offset-2 hover:text-primary">
            Health disclaimer
          </Link>
        </p>
      )}
    </div>
  );
}

const SectionHeading = ({ eyebrow, title, accent, sub }: { eyebrow?: string; title: string; accent?: string; sub?: string }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
    {eyebrow && <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">{eyebrow}</p>}
    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight font-oswald leading-[1.1]">
      {title}{" "}
      {accent && <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">{accent}</span>}
    </h2>
    {sub && <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-5 leading-relaxed">{sub}</p>}
  </motion.div>
);

/* ─── Main Page ──────────────────────────────────────────────── */

const Index = () => {
  const appPreviewRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: appPreviewRef,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const y2 = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const y3 = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-background text-foreground font-sans">
      <SEO
        title="Everyday Performance OS"
        description="Everyday Performance gives you short workouts, daily habits, streaks, XP, and adaptive coaching for busy schedules."
      />
      <PublicNavbar />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }} className="absolute inset-0 bg-cover bg-[position:65%_center] md:bg-[position:center_20%]"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero-bg.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
        <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.4, 0.25] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/15 blur-[140px] rounded-full mix-blend-screen"
        />
      </div>

      <main className="flex-1 relative z-10 flex flex-col">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-28 md:pt-44 md:pb-32">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md px-5 py-2 text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-8"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Everyday Performance OS
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-bold uppercase tracking-tight font-oswald leading-[1.05] max-w-4xl mb-7"
          >
            Built for the <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
              Busiest People Alive.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Everyday Performance gives you short workouts, daily habits, streaks, XP, and adaptive coaching built for parents, professionals, entrepreneurs, and anyone whose schedule never stays perfect.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            <Button onPointerDown={() => sounds.playClick()} size="lg" className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-7 h-auto font-oswald uppercase tracking-[0.15em] shadow-[0_0_50px_-15px_rgba(143,143,86,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_70px_-15px_rgba(143,143,86,0.8)]" asChild>
              <a href={SIGNUP_URL} className="flex items-center justify-center gap-2 text-center">
                <span>Create an Account</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button onPointerDown={() => sounds.playClick()} size="lg" variant="outline" className="rounded-full border-white/15 hover:bg-white/8 backdrop-blur-sm bg-white/[0.04] text-base px-10 py-7 font-oswald uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 hover:border-white/30" asChild>
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-10">
            <OfferNotes showDisclaimer />
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-xs tracking-widest uppercase text-muted-foreground/70">
            Built for professionals, parents, entrepreneurs, and busy adults who need consistency without hour-long workouts.
          </motion.p>
        </section>


        {/* ── WHY WE'RE DIFFERENT ──────────────────────────────── */}
        <Section className="py-28">
          <SectionHeading eyebrow="The Difference" title="Why Everyday Performance Works" accent="When Normal Fitness Apps Don't" sub="Most fitness apps assume you have perfect time, perfect energy, and perfect motivation. Everyday Performance is built for real life: short wins, flexible plans, and progress that survives missed days." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Clock, color: "primary", glow: "bg-primary/15", label: "5-Minute Wins", body: "Start with tiny actions you can actually finish: hydration, mobility, walking, stretching, breathing, or a short workout. Build momentum even on packed days." },
              { icon: Trophy, color: "primary", glow: "bg-primary/15", label: "Gamified Progress", body: "Earn XP, build streaks, unlock badges, and level up for showing up. Everyday Performance turns consistency into a game you want to keep playing." },
              { icon: ShieldCheck, color: "primary", glow: "bg-primary/15", label: "Your Coach, Your Plan", body: "Get a plan that adapts to your schedule, energy, goals, and missed days. When life hits, the system adjusts instead of making you feel behind." },
            ].map(({ icon: Icon, color, glow, label, body }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-[#0e0e0e] border border-white/8 p-8 rounded-[2rem] hover:border-primary/30 hover:shadow-[0_0_50px_-20px_rgba(143,143,86,0.3)] transition-all duration-500 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${glow} flex items-center justify-center mb-7 border border-primary/20 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-oswald uppercase text-white mb-3 tracking-wide">{label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── APP PREVIEW ──────────────────────────────────────── */}
        <Section className="py-28">
          <SectionHeading eyebrow="Inside the App" title="See the System That" accent="Keeps You Consistent" sub="Track habits, workouts, streaks, XP, levels, and daily progress from one simple dashboard." />
          <div ref={appPreviewRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { el: <HabitTrackerPreview />, delay: 0.1, y: y1 },
              { el: <StreakPreview />, delay: 0.25, y: y2 },
              { el: <WorkoutPreview />, delay: 0.4, y: y3 },
            ].map(({ el, delay, y }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay }}>
                <motion.div style={{ y }} className="h-[420px]">
                  {el}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── OUR STORY ────────────────────────────────────────── */}
        <Section className="py-24 bg-[#0e0e0e]/40 border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-6">Our Mission</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight font-oswald leading-[1.2] mb-8 text-white">
              You shouldn't have to choose between your <span className="text-primary">career</span>, your <span className="text-primary">family</span>, and your <span className="text-primary">health</span>.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Everyday Performance exists to help busy people build healthier, stronger, and more productive lives through simple daily habits. By focusing on consistency over perfection, we help people create lasting results that fit into real life—not the other way around.
            </p>
          </motion.div>
        </Section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <Section id="how-it-works" className="py-28 bg-[#0e0e0e]/50 border-y border-white/5">
          <SectionHeading eyebrow="How It Works" title="Start Small. Stack Wins." accent="Stay Consistent." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              { step: "01", title: "Choose Your Focus", desc: "Pick habits, workouts, or both based on your schedule and goal." },
              { step: "02", title: "Get Today's Plan", desc: "Everyday Performance gives you a realistic daily plan you can complete even when life is busy." },
              { step: "03", title: "Earn Proof", desc: "Log wins, earn XP, keep your streak alive, and watch consistency become part of your identity." },
            ].map(({ step, title, desc }, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-[#0e0e0e] border border-white/8 p-8 rounded-[2rem] relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
              >
                <div className="text-6xl md:text-7xl font-oswald font-bold text-primary/20 absolute top-4 right-6 group-hover:text-primary/40 transition-colors duration-500">{step}</div>
                <h3 className="text-xl font-oswald uppercase text-white mb-3 tracking-wide relative z-10">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="flex justify-center">
            <Button onPointerDown={() => sounds.playClick()} size="lg" className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-7 h-auto font-oswald uppercase tracking-[0.15em] shadow-[0_0_50px_-15px_rgba(143,143,86,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_70px_-15px_rgba(143,143,86,0.8)]" asChild>
              <a href={SIGNUP_URL} className="flex items-center justify-center gap-2 text-center">
                <span>Create an Account</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </Section>

        {/* ── TESTIMONIALS ─────────────────────────────────────── */}
        <Section className="py-28">
          <SectionHeading title="A MESSAGE FROM A USER" />
          <div className="max-w-xl mx-auto">
            <TestimonialCard
              index={0}
              testimonial={{
                name: "Jared C",
                role: "Member",
                text: "Everyday Performance helped me keep a 14-day streak while traveling. The habits were simple enough to hold whether I was in Boston or Medellín.",
                avatar: `${import.meta.env.BASE_URL}jared-c.jpg`,
                mediaUrl: `${import.meta.env.BASE_URL}jared-c.mp4`,
              }}
            />
          </div>
        </Section>

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <Section className="py-20 pb-28">
          <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="relative bg-[#0e0e0e] border border-primary/25 rounded-[2.5rem] px-10 py-20 md:px-20 md:py-24 text-center overflow-hidden shadow-[0_0_100px_-30px_rgba(143,143,86,0.35)]"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-primary/15 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/8 blur-[80px] rounded-full" />
            </div>
            <p className="relative z-10 text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-6">The Bottom Line</p>
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold uppercase tracking-tight font-oswald leading-[1.08] mb-7 text-white">
              You Don't Need More Time.<br className="hidden md:block" />{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">You Need a System You Can Actually Repeat.</span>
            </h2>
            <p className="relative z-10 text-base md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Start with today's 5-minute plan. Build small wins. Earn XP. Keep your streak alive. Let consistency become automatic.
            </p>
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
              <a href={SIGNUP_URL} onPointerDown={() => sounds.playClick()}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-5 h-auto font-oswald uppercase tracking-[0.18em] shadow-[0_0_50px_-15px_rgba(143,143,86,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_-15px_rgba(143,143,86,0.9)] text-center"
              >
                <span>Create an Account</span>
                <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <div className="mt-2">
                <OfferNotes showDisclaimer />
              </div>
            </div>
          </motion.div>
        </Section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <Section className="pb-32">
          <div className="max-w-3xl mx-auto">
            <SectionHeading eyebrow="Got Questions?" title="Frequently Asked" accent="Questions" />
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {[
                  { q: "How much time do I need each day?", a: "You can start with 5 minutes. Everyday Performance is built around small daily wins, short workouts, and habits that scale up when you have more time." },
                  { q: "Do I need any special equipment?", a: "No. You can start with bodyweight workouts, mobility, walking, hydration, and simple habits. If you have equipment, your plan can use it — but it is not required." },
                  { q: "Is this personalized or a generic template?", a: "Everyday Performance is built around your goals, schedule, fitness level, habits, and available time. The system should help you build a plan that fits your actual life, not someone else's perfect routine." },
                  { q: "What happens if I miss a day?", a: "Missing a day does not mean you failed. Everyday Performance is designed for comeback behavior with streaks, resets, flexible plans, and small wins that help you restart quickly." },
                  { q: "Is this only for advanced fitness people?", a: "No. It is built for busy people at different levels, including beginners, parents, professionals, and anyone trying to become consistent again." },
                  { q: "What do I get for free?", a: FREE_FAQ_ANSWER },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}
                    className="bg-[#0e0e0e] border border-white/8 rounded-2xl px-6 data-[state=open]:bg-white/[0.04] data-[state=open]:border-primary/20 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-oswald uppercase text-base tracking-wide hover:no-underline py-6 hover:text-primary transition-colors">
                      {item.q}
                    </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-6">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col items-center justify-center mt-16 gap-4">
              <Button onPointerDown={() => sounds.playClick()} size="lg" className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-7 h-auto font-oswald uppercase tracking-[0.15em] shadow-[0_0_50px_-15px_rgba(143,143,86,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_70px_-15px_rgba(143,143,86,0.8)]" asChild>
                <a href={SIGNUP_URL} className="flex items-center justify-center gap-2 text-center">
                  <span>Create an Account</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <OfferNotes />
            </motion.div>
          </div>
        </Section>
      </main>

      {/* Spacer for mobile sticky bar */}
      <div className="md:hidden h-20" />

      <PublicFooter />

      {/* ── STICKY MOBILE CTA ────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#050505]/90 backdrop-blur-2xl border-t border-white/8 px-5 py-3">
          <a href={SIGNUP_URL}
            className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-oswald uppercase tracking-[0.18em] text-sm py-4 rounded-full shadow-[0_0_30px_-8px_rgba(143,143,86,0.7)] hover:bg-primary/90 transition-all active:scale-95"
          >
            Create an Account
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
