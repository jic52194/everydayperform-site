import { FREE_FAQ_ANSWER, HEALTH_DISCLAIMER } from "@/content/marketing";

export type FaqLink = { to: string; label: string };

export type FaqItem = {
  id: string;
  q: string;
  a: string;
  /** Visible on /faq. Kept out of FAQ JSON-LD so the answer text stays plain. */
  links?: readonly FaqLink[];
};

/** Questions shown on the homepage and repeated, expanded, on /faq. */
export const HOME_FAQ_IDS = ["time", "equipment", "personalized", "miss", "level", "free"] as const;

/** Objection handling next to the pricing cards. Also on /faq. */
export const PRICING_FAQ_IDS = ["card", "trial", "cancel", "app-store", "coach", "health"] as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "time",
    q: "How much time do I need each day?",
    a: "You can start with 5 minutes. One preset is 5 minutes of mindfulness. Everyday Performance is built around small daily wins, short workouts, and habits that scale up when you have more time.",
    links: [{ to: "/guides/five-minute-day/", label: "A five-minute day" }],
  },
  {
    id: "equipment",
    q: "Do I need any special equipment?",
    a: "No. You can start with bodyweight workouts, stretch or mobility, a short walk, and simple habits. If you have equipment, your plan can use it, but it is not required.",
    links: [{ to: "/features/#workouts", label: "Short workouts" }],
  },
  {
    id: "habits",
    q: "What habits can I track?",
    a: "You choose the habits on your plan. Presets include drinking enough water, moving for 20 minutes, stretch or mobility, 5 minutes of mindfulness, sleep of 7+ hours, steps, a protein target, reading 10 pages, getting up without snoozing, and no added sugar. The app is built for picking two or three that are small enough for a bad day. Completing a habit earns XP, and clearing the day's habits earns a bonus. A free account can start with habits, short workouts, or both, and it does not require a card.",
    links: [
      { to: "/features/#habits", label: "How habits fit the daily plan" },
      { to: "/guides/five-minute-day/", label: "A five-minute day" },
      { to: "/how-it-works/", label: "How the daily plan works" },
    ],
  },
  {
    id: "personalized",
    q: "Is this personalized or a generic template?",
    a: "You set a focus, how many days you train, your experience, and the habits on the plan. That is how the daily plan is shaped. It is not a clinical assessment, and it does not promise a specific body or performance outcome.",
    links: [{ to: "/features/#habits", label: "Habits and the daily plan" }],
  },
  {
    id: "miss",
    q: "What happens if I miss a day?",
    a: "Missing a day does not close your account. Streak freezes are built to turn on when a day is missed, so one miss does not have to erase the streak. Come back and complete one habit. A freeze is not a promise of a specific fitness result.",
    links: [
      { to: "/how-it-works/#restart", label: "Restart after a miss" },
      { to: "/guides/five-minute-day/", label: "What to do on a short day" },
    ],
  },
  {
    id: "level",
    q: "Is this only for advanced fitness people?",
    a: "No. Experience on the plan can be new to this, some experience, or very experienced. It is built for busy people, including beginners, parents, professionals, and anyone trying to become consistent again.",
  },
  {
    id: "free",
    q: "What do I get for free?",
    a: FREE_FAQ_ANSWER,
    links: [
      { to: "/#pricing", label: "Free and Pro pricing" },
      { to: "/faq/#faq-analytics", label: "What analytics stay on the free plan" },
    ],
  },
  {
    id: "card",
    q: "Does a free account require a card?",
    a: "No. A free account does not require a card. The 7-day Pro trial is a separate choice: it requires a card and auto-renews unless you cancel.",
    links: [{ to: "/#pricing", label: "Free and Pro pricing" }],
  },
  {
    id: "trial",
    q: "What does the 7-day Pro trial require?",
    a: "The 7-day Pro trial requires a card and auto-renews unless you cancel before it ends. Pro is $14.99/mo or $149.99/yr. On the yearly plan, $149.99/yr works out to $12.50 per month.",
    links: [{ to: "/faq/#faq-cancel", label: "How to cancel Pro" }],
  },
  {
    id: "cancel",
    q: "How do I cancel Pro?",
    a: "You can cancel Pro anytime in account settings. Cancellation is completed in the billing portal. Access continues through the end of the current billing period. Deleting your Everyday Performance account does not by itself cancel an App Store or web subscription.",
    links: [{ to: "/terms/", label: "Subscription terms" }],
  },
  {
    id: "app-store",
    q: "Is the website price the same as an iPhone subscription?",
    a: "No. On the website, Pro is $14.99 per month or $149.99 per year. The iPhone subscription price is the live price and currency shown in the app by the App Store. Website prices are not the App Store price.",
    links: [{ to: "/compare/", label: "What this site will not claim about price" }],
  },
  {
    id: "analytics",
    q: "What progress analytics do I get on Free and on Pro?",
    a: "The free plan includes streaks and this week's view, including the weekly recap. Pro adds longer-range progress: load volume, workout frequency, habit consistency, a show-up calendar, and personal records. Charts count the workouts, sets, and times you log. Sample numbers on this website are illustrations, not a published member result. Progress analytics are a training record, not a medical diagnosis.",
    links: [
      { to: "/features/#analytics", label: "Progress on the features page" },
      { to: "/#pricing", label: "Free and Pro pricing" },
      { to: "/how-it-works/", label: "How a day gets logged" },
    ],
  },
  {
    id: "coach",
    q: "Is a coach plan the same as Pro?",
    a: "No. Pro is the self-serve website plan at $14.99/mo or $149.99/yr. It does not assign you a human coach. Coach plans are a separate purchase. A coach applies, and that application is reviewed before coaching tools are turned on. Coaches and clients use the same app. A coach can assign day-by-day programs, message clients, run check-ins, and see client workouts, habits, and streaks.",
    links: [
      { to: "/features/#coaches", label: "What coaches can do" },
      { to: "/compare/#hiring-a-coach", label: "Pro versus hiring a coach" },
      { to: "/#pricing", label: "Free and Pro pricing" },
    ],
  },
  {
    id: "community",
    q: "What is the community seed floor?",
    a: "The community starts from a seed floor, not from a published member count. A new account gets a welcome, a friend request, and a place to reply. Coaches and guides on that floor are part of the product so the room is not empty. They are not customer reviews and not a user total. You can join the Morning Floor squad, invite a friend you know, and see a weekly league ranked by XP since Monday. Your workouts and streaks stay private unless you opt in to share them in Settings. Friend streaks and challenges open after you accept a friend.",
    links: [
      { to: "/features/#community", label: "Community on the features page" },
      { to: "/compare/#public-feed", label: "How this differs from a public feed" },
      { to: "/faq/#faq-coach", label: "How coaches differ from Pro" },
    ],
  },
  {
    id: "health",
    q: "Is this medical advice?",
    a: `${HEALTH_DISCLAIMER} Read the health section of the Terms of Use for the full wording.`,
    links: [{ to: "/terms/#health-disclaimer", label: "Health disclaimer in the Terms" }],
  },
  {
    id: "results",
    q: "Does Everyday Performance promise a specific fitness result?",
    a: "No. It is a system for short workouts, habits, streaks, and XP so you can practice consistency. It does not promise a specific body, medical, or performance outcome. The only member note on this site is from Jared C, labeled Member. There is no star rating and no user count.",
    links: [{ to: "/compare/", label: "What the compare page will not claim" }],
  },
  {
    id: "where",
    q: "Where do I create an account?",
    a: "Create an account in the Everyday Performance app. A free account does not require a card. Start Pro from the account only if you want the paid plan. Website Pro uses the prices on this site. An iPhone subscription, if you buy one, uses the App Store price shown in the app.",
    links: [
      { to: "/how-it-works/", label: "How signup and the daily plan work" },
      { to: "/#pricing", label: "Free and Pro pricing" },
    ],
  },
];

export function faqsById(ids: readonly string[]): FaqItem[] {
  return ids.map((id) => {
    const item = FAQ_ITEMS.find((entry) => entry.id === id);
    if (!item) throw new Error(`Missing FAQ ${id}`);
    return item;
  });
}

export function faqPageEntities(ids: readonly string[]) {
  return faqsById(ids).map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  }));
}
