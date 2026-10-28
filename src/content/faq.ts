import { FREE_FAQ_ANSWER, HEALTH_DISCLAIMER } from "@/content/marketing";

export type FaqItem = {
  id: string;
  q: string;
  a: string;
};

/** Questions shown on the homepage and repeated, expanded, on /faq. */
export const HOME_FAQ_IDS = ["time", "equipment", "personalized", "miss", "level", "free"] as const;

/** Objection handling next to the pricing cards. Also on /faq. */
export const PRICING_FAQ_IDS = ["card", "trial", "cancel", "app-store", "coach", "health"] as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "time",
    q: "How much time do I need each day?",
    a: "You can start with 5 minutes. Everyday Performance is built around small daily wins, short workouts, and habits that scale up when you have more time.",
  },
  {
    id: "equipment",
    q: "Do I need any special equipment?",
    a: "No. You can start with bodyweight workouts, mobility, walking, hydration, and simple habits. If you have equipment, your plan can use it — but it is not required.",
  },
  {
    id: "personalized",
    q: "Is this personalized or a generic template?",
    a: "Everyday Performance is built around your goals, schedule, fitness level, habits, and available time. The system should help you build a plan that fits your actual life, not someone else's perfect routine.",
  },
  {
    id: "miss",
    q: "What happens if I miss a day?",
    a: "Missing a day does not mean you failed. Everyday Performance is designed for comeback behavior with streaks, resets, flexible plans, and small wins that help you restart quickly.",
  },
  {
    id: "level",
    q: "Is this only for advanced fitness people?",
    a: "No. It is built for busy people at different levels, including beginners, parents, professionals, and anyone trying to become consistent again.",
  },
  {
    id: "free",
    q: "What do I get for free?",
    a: FREE_FAQ_ANSWER,
  },
  {
    id: "card",
    q: "Does a free account require a card?",
    a: "No. A free account does not require a card. The 7-day Pro trial is a separate choice: it requires a card and auto-renews unless you cancel.",
  },
  {
    id: "trial",
    q: "What does the 7-day Pro trial require?",
    a: "The 7-day Pro trial requires a card and auto-renews unless you cancel before it ends. Pro is $14.99/mo or $149.99/yr. On the yearly plan, $149.99/yr works out to $12.50 per month.",
  },
  {
    id: "cancel",
    q: "How do I cancel Pro?",
    a: "You can cancel Pro anytime in account settings. Cancellation is completed in the billing portal. Access continues through the end of the current billing period. Deleting your Everyday Performance account does not by itself cancel an App Store or web subscription.",
  },
  {
    id: "app-store",
    q: "Is the website price the same as an iPhone subscription?",
    a: "No. On the website, Pro is $14.99 per month or $149.99 per year. The iPhone subscription price is the live price and currency shown in the app by the App Store. Website prices are not the App Store price.",
  },
  {
    id: "coach",
    q: "Is a coach plan the same as Pro?",
    a: "No. Coach plans are a separate purchase and are not consumer Pro.",
  },
  {
    id: "health",
    q: "Is this medical advice?",
    a: `${HEALTH_DISCLAIMER} Read the health section of the Terms of Use for the full wording.`,
  },
  {
    id: "results",
    q: "Does Everyday Performance promise a specific fitness result?",
    a: "No. It is a system for short workouts, habits, streaks, and XP so you can practice consistency. It does not promise a specific body, medical, or performance outcome.",
  },
  {
    id: "where",
    q: "Where do I create an account?",
    a: "Create an account in the Everyday Performance app. A free account does not require a card. Start Pro from the account only if you want the paid plan. Website Pro uses the prices on this site. An iPhone subscription, if you buy one, uses the App Store price shown in the app.",
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
