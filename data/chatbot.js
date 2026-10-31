// WhatsApp assistant — the 5+ question qualification flow (data-driven).
export const chatbot = {
  greeting: "Hi 👋 Welcome to NNC! Let's set you up in under a minute.",
  questions: [
    { id: 'name', q: "What's the name of your business?", type: 'text' },
    {
      id: 'industry',
      q: 'Which industry are you in?',
      type: 'choice',
      options: ['Retail', 'Services', 'Manufacturing', 'Other'],
    },
    { id: 'team', q: 'How many people are on your team?', type: 'number' },
    {
      id: 'priority',
      q: 'What do you most want to improve?',
      type: 'multi',
      options: ['Enquiries', 'Sales', 'Expenses', 'Forecasting'],
    },
    {
      id: 'sales',
      q: 'Roughly what are your monthly sales right now?',
      type: 'choice',
      options: ['Under ₹2L', '₹2–5L', '₹5–10L', '₹10L+'],
    },
    {
      id: 'contact',
      q: "Great — what's the best number or email to send your custom plan?",
      type: 'text',
    },
  ],
  // After answers: map priority+team+sales → recommended MODULES + computePlan() → show yearly price.
  outcome:
    "Perfect 🎯 I've built a recommended plan for you — {modules} for {team} users at {price}/year. Want the breakdown?",
}

// Pre-scripted sample exchange shown in the phone mock (illustrative only —
// generic placeholders so it never ends up in a Google snippet looking like
// a real customer).
export const sampleChat = [
  { from: 'bot', text: "Hi 👋 Welcome to NNC! Let's set you up in under a minute." },
  { from: 'bot', text: "What's the name of your business?" },
  { from: 'user', text: '[Your business name]' },
  { from: 'bot', text: 'Which industry are you in?' },
  { from: 'user', text: '[Your industry]' },
  { from: 'bot', text: 'What do you most want to improve?' },
  { from: 'user', text: '[Enquiries, Sales, Forecasting…]' },
  { from: 'bot', text: "Perfect 🎯 I've built a plan tailored to your business. Want the breakdown?" },
]

// Maps a priority answer to a module id (used by recommendation logic).
export const PRIORITY_TO_MODULE = {
  Enquiries: 'enq',
  Sales: 'sales',
  Expenses: 'exp',
  Forecasting: 'fc',
}
