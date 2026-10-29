// Knowledge base for the NNC help chatbot (the floating assistant widget).
// Generated from a grounded multi-agent pass over the site content. 118 entries.

export const GREETING =
  "Hi! I'm the NNC assistant. Ask me about pricing, features, the free trial, or anything else, or tap a question below."

export const CONTACT = {
  phone: '94227 99466',
  email: 'hello@nncdigital.co.in',
  hours: 'Mon to Sat, 10am to 7pm',
}

export const STARTERS = [
  "How much does NNC CRM cost?",
  "Is there a free trial?",
  "How do I book a demo?",
  "What does NNC CRM do?",
  "Which industries is NNC CRM built for?",
  "How do I contact NNC support?"
]

export const KB = [
  {
    "id": "how-much-does-nnc-crm-cost",
    "topic": "pricing",
    "intents": [
      "how much does it cost",
      "pricing",
      "price",
      "what does it cost",
      "cost of NNC CRM",
      "how much is the CRM",
      "plans and prices",
      "pricin",
      "what are the prices",
      "cost"
    ],
    "question": "How much does NNC CRM cost?",
    "answer": "Three plans: Starter Rs 14,999/year (1 user), Growth Rs 29,999/year (3 users, most popular), and Enterprise Rs 59,999/year (up to 10 users). All billed in INR, GST extra. Monthly options too.",
    "link": {
      "label": "See pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "what-plans-are-available",
    "topic": "pricing",
    "intents": [
      "what plans are there",
      "plan options",
      "which plans",
      "tiers",
      "what packages do you have",
      "starter growth enterprise",
      "types of plans",
      "plan tiers",
      "plans available"
    ],
    "question": "What plans are available?",
    "answer": "Three plans: Starter (1 user) for core CRM, enquiries, pipeline and invoicing; Growth (3 users, most popular) adds forecasting, WhatsApp and analytics; Enterprise (up to 10 users) adds API access, audit logs and a dedicated manager.",
    "link": {
      "label": "Compare plans",
      "href": "/pricing"
    }
  },
  {
    "id": "what-s-the-difference-between-monthly-and-annual",
    "topic": "pricing",
    "intents": [
      "monthly vs annual",
      "monthly pricing",
      "pay monthly or yearly",
      "is annual cheaper",
      "monthly cost",
      "yearly vs monthly",
      "do you bill monthly",
      "per month price",
      "anual billing"
    ],
    "question": "What's the difference between monthly and annual billing?",
    "answer": "You can pay yearly or monthly. Starter is Rs 14,999/year or Rs 1,499/month, Growth Rs 29,999/year or Rs 2,999/month, Enterprise Rs 59,999/year or Rs 5,999/month. Annual billing saves about 17%.",
    "link": {
      "label": "See pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "is-there-a-free-trial",
    "topic": "pricing",
    "intents": [
      "free trial",
      "is there a trial",
      "do you offer a trial",
      "trial period",
      "try before buy",
      "how long is the trial",
      "free trail",
      "can I test it for free",
      "trial without card"
    ],
    "question": "Is there a free trial?",
    "answer": "Yes! Every plan comes with a 30-day free trial, and no credit card is required to start. You can explore everything and cancel anytime before you're charged.",
    "link": {
      "label": "Start free trial",
      "href": "/pricing"
    }
  },
  {
    "id": "do-i-need-a-credit-card-to-start-the-trial",
    "topic": "pricing",
    "intents": [
      "credit card required",
      "do I need a card",
      "card needed for trial",
      "no credit card",
      "is a card required",
      "start without card",
      "trial payment details",
      "need debit card"
    ],
    "question": "Do I need a credit card to start the trial?",
    "answer": "No. You can start your 30-day free trial without any credit card. Setup typically takes about a day, and you only pay if you decide to continue.",
    "link": {
      "label": "Start free trial",
      "href": "/pricing"
    }
  },
  {
    "id": "is-gst-included-in-the-price",
    "topic": "pricing",
    "intents": [
      "is GST included",
      "GST extra",
      "does price include tax",
      "tax on pricing",
      "gst",
      "do you charge GST",
      "price with tax",
      "is tax included",
      "gst extra or included"
    ],
    "question": "Is GST included in the price?",
    "answer": "Prices are listed exclusive of GST, so GST is added on top of the plan price (for example Rs 14,999/year for Starter, plus GST). Invoices are GST-ready.",
    "link": {
      "label": "See pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "can-i-upgrade-or-downgrade-my-plan",
    "topic": "pricing",
    "intents": [
      "upgrade plan",
      "downgrade plan",
      "change plan",
      "switch plans",
      "move to a bigger plan",
      "can I change my plan later",
      "upgrade as I grow",
      "change tier",
      "upgrde"
    ],
    "question": "Can I upgrade or downgrade my plan?",
    "answer": "Yes. Start on any plan and upgrade as your team grows. Your data carries over instantly and you only pay the difference. Bigger plans add forecasting, WhatsApp, more users and advanced security.",
    "link": {
      "label": "See pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "how-many-users-does-each-plan-include",
    "topic": "pricing",
    "intents": [
      "how many users",
      "number of users",
      "user limit",
      "seats included",
      "how many seats",
      "users per plan",
      "team size",
      "per seat pricing",
      "how many people can use it"
    ],
    "question": "How many users does each plan include?",
    "answer": "Starter includes 1 user, Growth includes up to 3 users, and Enterprise includes up to 10 users. You pay one price per band, not per seat.",
    "link": {
      "label": "Compare plans",
      "href": "/pricing"
    }
  },
  {
    "id": "what-does-the-starter-plan-include",
    "topic": "pricing",
    "intents": [
      "what's in Starter",
      "starter plan features",
      "starter includes",
      "cheapest plan",
      "basic plan",
      "what do I get with starter",
      "starter plan details"
    ],
    "question": "What does the Starter plan include?",
    "answer": "Starter (Rs 14,999/year or Rs 1,499/month, 1 user) includes the core CRM: enquiry and lead management, sales pipeline, contacts, invoicing and payments, basic reports, and email support.",
    "link": {
      "label": "See Starter",
      "href": "/pricing"
    }
  },
  {
    "id": "what-does-the-growth-plan-include",
    "topic": "pricing",
    "intents": [
      "what's in Growth",
      "growth plan features",
      "growth includes",
      "most popular plan",
      "growth plan details",
      "what do I get with growth",
      "middle plan"
    ],
    "question": "What does the Growth plan include?",
    "answer": "Growth (Rs 29,999/year or Rs 2,999/month, 3 users) is our most popular plan. It adds forecasting, expenses and payroll, inventory, WhatsApp engagement, advanced analytics and priority support on top of Starter.",
    "link": {
      "label": "See Growth",
      "href": "/pricing"
    }
  },
  {
    "id": "what-does-the-enterprise-plan-include",
    "topic": "pricing",
    "intents": [
      "what's in Enterprise",
      "enterprise plan features",
      "enterprise includes",
      "top plan",
      "unlimited users plan",
      "enterprise details",
      "what do I get with enterprise"
    ],
    "question": "What does the Enterprise plan include?",
    "answer": "Enterprise (Rs 59,999/year or Rs 5,999/month, up to 10 users) adds everything in Growth plus multi center control, custom roles, data vault with hourly backups, audit logs, API access, single sign-on and a dedicated account manager.",
    "link": {
      "label": "See Enterprise",
      "href": "/pricing"
    }
  },
  {
    "id": "are-there-any-discounts",
    "topic": "pricing",
    "intents": [
      "discounts",
      "any discount",
      "is there an offer",
      "deal",
      "cheaper price",
      "save money",
      "annual discount",
      "do you give discounts",
      "discont"
    ],
    "question": "Are there any discounts?",
    "answer": "Choosing annual billing saves you about 17% compared with paying monthly. For larger teams or custom needs, reach out at 94227 99466 or hello@nncdigital.co.in to discuss options.",
    "link": {
      "label": "Contact us",
      "href": "/company/contact"
    }
  },
  {
    "id": "how-do-i-cancel-and-can-i-get-a-refund",
    "topic": "pricing",
    "intents": [
      "how to cancel",
      "cancel subscription",
      "can I cancel anytime",
      "refund policy",
      "do you give refunds",
      "money back",
      "cancel my plan",
      "stop subscription",
      "refunds"
    ],
    "question": "How do I cancel, and can I get a refund?",
    "answer": "You can cancel anytime, and the 30-day free trial means you can try NNC risk-free before paying. For cancellations, billing or refund questions, contact us at 94227 99466 or hello@nncdigital.co.in.",
    "link": {
      "label": "Contact us",
      "href": "/company/contact"
    }
  },
  {
    "id": "what-payment-methods-do-you-accept",
    "topic": "pricing",
    "intents": [
      "payment methods",
      "how do I pay",
      "ways to pay",
      "accepted payments",
      "can I pay by card",
      "payment options",
      "do you take UPI",
      "how to pay for plan"
    ],
    "question": "What payment methods do you accept?",
    "answer": "Plans are billed in INR with GST added. For details on payment options or to set up billing, contact our team at 94227 99466 or hello@nncdigital.co.in, Monday to Saturday, 10am to 7pm.",
    "link": {
      "label": "Contact us",
      "href": "/company/contact"
    }
  },
  {
    "id": "what-does-nnc-crm-do",
    "topic": "features",
    "intents": [
      "what does nnc crm do",
      "what is nnc crm",
      "what does this do",
      "tell me about nnc",
      "what features does nnc have",
      "what can the crm do",
      "overview of nnc crm",
      "what is nnc digital crm",
      "wat does nnc do",
      "nnc crm capabilities"
    ],
    "question": "What does NNC CRM do?",
    "answer": "NNC CRM is the decision making CRM for every industry, built for Indian businesses. It captures every enquiry, runs your sales pipeline, forecasts revenue, raises GST ready invoices, engages customers on WhatsApp and shows clear reports, all in one place.",
    "link": {
      "label": "Explore features",
      "href": "/features"
    }
  },
  {
    "id": "how-does-nnc-capture-enquiries-and-leads",
    "topic": "features",
    "intents": [
      "how does nnc capture leads",
      "enquiry management",
      "lead capture",
      "where do enquiries come from",
      "capture leads from whatsapp",
      "do you capture web form leads",
      "enquiries feature",
      "manage enquiries",
      "lead capture channels",
      "enquriy capture",
      "how are leads assigned"
    ],
    "question": "How does NNC capture enquiries and leads?",
    "answer": "NNC catches every enquiry from your website, WhatsApp, calls and walk ins into one inbox. Each is auto assigned to the right person, source tracked, and kept moving with reminders so nothing ever goes cold.",
    "link": {
      "label": "See enquiries",
      "href": "/features/enquiries"
    }
  },
  {
    "id": "what-is-the-sales-pipeline-feature",
    "topic": "features",
    "intents": [
      "sales pipeline",
      "what is the pipeline",
      "deal stages",
      "kanban pipeline",
      "visual pipeline feature",
      "track deals",
      "pipeline view",
      "how do deals move through stages",
      "deal tracking",
      "sales pipline",
      "manage deals"
    ],
    "question": "What is the sales pipeline feature?",
    "answer": "The visual pipeline shows every deal, its stage and its value at a glance. Drag and drop deals through stages, see weighted revenue by probability, and track performance across every rep and region.",
    "link": {
      "label": "See pipeline",
      "href": "/features/sales-pipeline"
    }
  },
  {
    "id": "can-nnc-forecast-revenue",
    "topic": "features",
    "intents": [
      "does nnc forecast",
      "revenue forecasting",
      "sales forecast",
      "how far ahead can it forecast",
      "3 6 12 month forecast",
      "predict revenue",
      "forecasting feature",
      "scenario planning",
      "cash forecast",
      "forcasting",
      "projections"
    ],
    "question": "Can NNC forecast revenue?",
    "answer": "Yes. NNC projects revenue, cash and growth for the next 3, 6 and 12 months using your own live data. Compare best and worst case scenarios, and forecasts update automatically as deals change.",
    "link": {
      "label": "See forecasting",
      "href": "/features/forecasting"
    }
  },
  {
    "id": "does-nnc-create-gst-invoices-and-track-payments",
    "topic": "features",
    "intents": [
      "gst invoices",
      "does it do invoicing",
      "billing",
      "create invoices",
      "track payments",
      "gst ready invoice",
      "invoicing feature",
      "payment tracking",
      "raise invoices",
      "gst billing",
      "invoce and payments"
    ],
    "question": "Does NNC create GST invoices and track payments?",
    "answer": "Yes. Raise GST ready invoices in seconds, share them on WhatsApp with gentle reminders, and track every payment so you always know what is paid, pending and overdue, all from the same CRM.",
    "link": {
      "label": "See invoicing",
      "href": "/features/invoicing"
    }
  },
  {
    "id": "how-does-whatsapp-engagement-work",
    "topic": "features",
    "intents": [
      "whatsapp feature",
      "does it work with whatsapp",
      "whatsapp engagement",
      "two way chat",
      "whatsapp campaigns",
      "send offers on whatsapp",
      "whatsapp marketing",
      "reply on whatsapp",
      "whatsapp broadcasts",
      "whatsap integration",
      "whatsapp chat from crm"
    ],
    "question": "How does WhatsApp engagement work?",
    "answer": "Send updates, offers and reminders on WhatsApp, and reply with two way chat right from the contact record. Turn every WhatsApp enquiry into a tracked lead, and broadcast campaigns to measure what works.",
    "link": {
      "label": "See WhatsApp",
      "href": "/features/whatsapp"
    }
  },
  {
    "id": "what-reports-and-analytics-does-nnc-provide",
    "topic": "features",
    "intents": [
      "reports",
      "analytics",
      "dashboards",
      "what reports do you have",
      "live dashboards",
      "sales reports",
      "reporting feature",
      "business analytics",
      "team performance reports",
      "reporting and dashboards",
      "anlytics"
    ],
    "question": "What reports and analytics does NNC provide?",
    "answer": "NNC gives you live dashboards for sales, collections and growth at a glance. Spot trends early, see what is rising or slowing, and use team scorecards to know who is performing and who needs help.",
    "link": {
      "label": "See reports",
      "href": "/features/reports"
    }
  },
  {
    "id": "what-does-nnc-integrate-with",
    "topic": "features",
    "intents": [
      "integrations",
      "what does it integrate with",
      "tally integration",
      "razorpay integration",
      "does it connect to gmail",
      "shopify integration",
      "third party tools",
      "connect my tools",
      "available integrations",
      "integration list",
      "integratons"
    ],
    "question": "What does NNC integrate with?",
    "answer": "NNC connects with WhatsApp, Gmail, Razorpay, Tally and Shopify, so your data flows without double entry. Sync invoices and payments with Tally and Razorpay, and turn on the tools you use in a few clicks.",
    "link": {
      "label": "See integrations",
      "href": "/features/integrations"
    }
  },
  {
    "id": "does-nnc-have-an-api-for-developers",
    "topic": "features",
    "intents": [
      "api",
      "rest api",
      "developer api",
      "does it have an api",
      "api access",
      "webhooks",
      "build integrations",
      "api documentation",
      "developer access",
      "open api",
      "ap i for developers"
    ],
    "question": "Does NNC have an API for developers?",
    "answer": "Yes. NNC offers a clean REST API served over HTTPS, plus webhooks. Read and write leads, deals, contacts and invoices, and use scoped Bearer token API keys you can rotate any time.",
    "link": {
      "label": "API docs",
      "href": "/support/api"
    }
  },
  {
    "id": "can-i-customise-nnc-for-my-industry",
    "topic": "features",
    "intents": [
      "can i customise it",
      "customization",
      "custom stages",
      "tailor to my business",
      "is it for my industry",
      "custom pipeline",
      "configure for my team",
      "custom roles",
      "industry specific",
      "customise pipeline stages",
      "customisaton"
    ],
    "question": "Can I customise NNC for my industry?",
    "answer": "Yes. Pipeline stages are tailored to how your business sells, and NNC adapts to sales teams, service, manufacturing, retail, healthcare, education and real estate. Enterprise adds custom roles for deeper control.",
    "link": {
      "label": "See industries",
      "href": "/industries"
    }
  },
  {
    "id": "which-integrations-help-with-accounting-and-paym",
    "topic": "features",
    "intents": [
      "tally sync",
      "accounting integration",
      "razorpay payments",
      "connect tally",
      "payment gateway",
      "sync invoices to tally",
      "accounting tools",
      "collect payments online",
      "does it work with razorpay",
      "tally and razorpay"
    ],
    "question": "Which integrations help with accounting and payments?",
    "answer": "For accounting and payments, NNC syncs invoices and payments with Tally and Razorpay, so your books stay current without double entry. You can also share invoices and collect on WhatsApp.",
    "link": {
      "label": "See integrations",
      "href": "/features/integrations"
    }
  },
  {
    "id": "can-i-see-questions-and-demos-by-talking-to-your",
    "topic": "features",
    "intents": [
      "talk to someone",
      "book a demo",
      "contact for features",
      "phone number",
      "how to reach you",
      "ask about a feature",
      "request demo",
      "support contact",
      "email address",
      "whatsapp number",
      "get in touch"
    ],
    "question": "Can I see questions and demos by talking to your team?",
    "answer": "Of course. Call 94227 99466 (Mon to Sat, 10am to 7pm), email hello@nncdigital.co.in, or message us on WhatsApp. Setup typically takes about a day, and there is a free 30 day trial with no credit card.",
    "link": {
      "label": "Talk to us",
      "href": "/company/contact"
    }
  },
  {
    "id": "which-industries-is-nnc-crm-built-for",
    "topic": "industries",
    "intents": [
      "which industries",
      "what industries do you support",
      "who is NNC CRM for",
      "industries you serve",
      "what sectors",
      "list of industries",
      "does it cover my industry",
      "supported industries",
      "what business types",
      "industris supported"
    ],
    "question": "Which industries is NNC CRM built for?",
    "answer": "NNC CRM works across industries: sales teams, service businesses, manufacturing, retail and distribution, healthcare and clinics, education, and real estate. It is the decision making CRM for every industry, adapted to how your team actually works.",
    "link": {
      "label": "Browse industries",
      "href": "/industries"
    }
  },
  {
    "id": "will-nnc-crm-work-for-my-business-or-sector",
    "topic": "industries",
    "intents": [
      "will it work for me",
      "does it fit my business",
      "is it right for my sector",
      "will it suit my company",
      "does it work for my industry",
      "is NNC for my business",
      "good fit for us",
      "can my business use it",
      "right for my company",
      "sutable for my business"
    ],
    "question": "Will NNC CRM work for my business or sector?",
    "answer": "Most likely yes. NNC CRM is built for Indian businesses of all kinds and adapts to your workflows. If you capture enquiries, run a sales pipeline, and invoice customers, it fits. Not sure? Call 94227 99466 or email hello@nncdigital.co.in.",
    "link": {
      "label": "See industries",
      "href": "/industries"
    }
  },
  {
    "id": "is-there-a-crm-for-sales-teams",
    "topic": "industries",
    "intents": [
      "CRM for sales teams",
      "sales team CRM",
      "does it help sales reps",
      "pipeline for sales",
      "sales use case",
      "CRM for closing deals",
      "sales force tool",
      "help my sales team",
      "sales pipeline crm",
      "sals team"
    ],
    "question": "Is there a CRM for sales teams?",
    "answer": "Yes. NNC helps sales teams capture every lead from web, WhatsApp, calls and walk ins, see the whole pipeline in one place, forecast revenue for 3, 6 and 12 months, and chase the deals most likely to close.",
    "link": {
      "label": "Sales teams",
      "href": "/industries/sales-teams"
    }
  },
  {
    "id": "does-nnc-crm-work-for-service-businesses",
    "topic": "industries",
    "intents": [
      "CRM for services",
      "service business CRM",
      "agency CRM",
      "consultancy crm",
      "client and project management",
      "does it suit service firms",
      "professional services",
      "freelancer crm",
      "servise business",
      "manage clients and projects"
    ],
    "question": "Does NNC CRM work for service businesses?",
    "answer": "Yes. Service businesses can track every client and project, turn approved work into GST ready invoices in a click, see what is owed and overdue, and know which clients and services actually make money, all in one place.",
    "link": {
      "label": "Service businesses",
      "href": "/industries/service-businesses"
    }
  },
  {
    "id": "can-nnc-crm-handle-manufacturing",
    "topic": "industries",
    "intents": [
      "CRM for manufacturing",
      "manufacturing CRM",
      "factory CRM",
      "order to cash",
      "does it work for a factory",
      "production crm",
      "manufacturer use case",
      "dispatch and orders",
      "manufactring",
      "industrial crm"
    ],
    "question": "Can NNC CRM handle manufacturing?",
    "answer": "Yes. Manufacturers manage the full order to cash cycle: quotations and orders linked to every buyer, dispatch and inventory in sync, GST and e way invoices, and collections tracked automatically, from enquiry to dispatch to payment.",
    "link": {
      "label": "Manufacturing",
      "href": "/industries/manufacturing"
    }
  },
  {
    "id": "is-there-a-crm-for-retail-and-distribution",
    "topic": "industries",
    "intents": [
      "CRM for retail",
      "retail CRM",
      "distribution CRM",
      "shop crm",
      "wholesale crm",
      "does it work for a store",
      "retailer use case",
      "repeat customers",
      "retial crm",
      "distributor software"
    ],
    "question": "Is there a CRM for retail and distribution?",
    "answer": "Yes. NNC keeps every customer and order in one profile whether they buy by walk in, phone, WhatsApp or online. Send WhatsApp offers and reorder reminders, connect stock to sales, and turn one time buyers into regulars.",
    "link": {
      "label": "Retail and distribution",
      "href": "/industries/retail"
    }
  },
  {
    "id": "does-nnc-crm-suit-clinics-and-healthcare",
    "topic": "industries",
    "intents": [
      "CRM for clinics",
      "healthcare CRM",
      "clinic CRM",
      "does it work for a hospital",
      "patient management",
      "doctor crm",
      "appointment reminders",
      "medical practice crm",
      "helthcare crm",
      "clinic software"
    ],
    "question": "Does NNC CRM suit clinics and healthcare?",
    "answer": "Yes. Clinics keep patient records and history in one place, send appointment and follow up reminders on WhatsApp, and track payments and packages per patient. Role based access keeps patient data private and protected.",
    "link": {
      "label": "Healthcare and clinics",
      "href": "/industries/healthcare"
    }
  },
  {
    "id": "can-schools-and-coaching-centres-use-nnc-crm",
    "topic": "industries",
    "intents": [
      "CRM for education",
      "coaching CRM",
      "school CRM",
      "institute crm",
      "admissions crm",
      "does it work for a coaching centre",
      "manage admissions and fees",
      "student enquiries",
      "educaton crm",
      "tuition crm"
    ],
    "question": "Can schools and coaching centres use NNC CRM?",
    "answer": "Yes. Education and coaching teams capture every admission enquiry, assign and follow up with parents, send updates on WhatsApp, and track fees and instalments per student, so more enquiries turn into enrolments.",
    "link": {
      "label": "Education",
      "href": "/industries/education"
    }
  },
  {
    "id": "is-nnc-crm-good-for-real-estate",
    "topic": "industries",
    "intents": [
      "CRM for real estate",
      "real estate CRM",
      "property CRM",
      "builder crm",
      "does it work for property sales",
      "site visits and bookings",
      "realtor crm",
      "broker crm",
      "reel estate crm",
      "property leads"
    ],
    "question": "Is NNC CRM good for real estate?",
    "answer": "Yes. NNC captures leads from portals, ads and referrals, schedules and reminds site visits, follows up instantly on WhatsApp while leads are hot, and tracks bookings and payment milestones with a booking forecast.",
    "link": {
      "label": "Real estate",
      "href": "/industries/real-estate"
    }
  },
  {
    "id": "can-nnc-crm-be-tailored-to-how-my-business-works",
    "topic": "industries",
    "intents": [
      "can it be customised",
      "tailor to my business",
      "custom workflows",
      "customisable crm",
      "can I change the stages",
      "adapt to my team",
      "configure pipeline",
      "make it fit us",
      "customizable",
      "custom roles"
    ],
    "question": "Can NNC CRM be tailored to how my business works?",
    "answer": "Yes. NNC adapts to your team with workflows and pipeline stages that match how you sell, so you go live sooner. You can also add custom roles and API access on the Enterprise plan for deeper customisation.",
    "link": {
      "label": "See industries",
      "href": "/industries"
    }
  },
  {
    "id": "my-industry-is-not-listed-can-i-still-use-nnc-cr",
    "topic": "industries",
    "intents": [
      "my industry isnt listed",
      "not in the list",
      "other industries",
      "what if my sector isnt shown",
      "does it work for niche businesses",
      "unlisted industry",
      "my type of business",
      "still use it",
      "my sector missing",
      "industry not there"
    ],
    "question": "My industry is not listed. Can I still use NNC CRM?",
    "answer": "Very likely yes. The seven industries shown are examples, NNC is the decision making CRM for every industry and adapts to most Indian businesses. Tell us about yours: call 94227 99466 or email hello@nncdigital.co.in.",
    "link": {
      "label": "Talk to our team",
      "href": "/company/contact"
    }
  },
  {
    "id": "how-is-nnc-crm-adapted-for-different-industries",
    "topic": "industries",
    "intents": [
      "how is it adapted per industry",
      "industry specific features",
      "what changes by industry",
      "one crm for all",
      "how does it fit each sector",
      "industry workflows",
      "tailored by sector",
      "does setup differ",
      "industry version",
      "per industry"
    ],
    "question": "How is NNC CRM adapted for different industries?",
    "answer": "One CRM, adapted to your team, so you go live sooner with workflows that fit your industry. Enquiries, pipeline, invoicing, WhatsApp and reports stay the same, but stages and follow ups match how your sector actually works.",
    "link": {
      "label": "Browse industries",
      "href": "/industries"
    }
  },
  {
    "id": "can-i-try-nnc-crm-for-my-industry-before-paying",
    "topic": "industries",
    "intents": [
      "free trial for my industry",
      "try before paying",
      "can I test it",
      "trial period",
      "how long is the trial",
      "do I need a card",
      "test for my business",
      "demo first",
      "try it out",
      "free trail"
    ],
    "question": "Can I try NNC CRM for my industry before paying?",
    "answer": "Yes. Every plan includes a 30 day free trial, no credit card required, cancel anytime. Setup typically takes about a day, so you can test it with your own workflows. Starter is Rs 14,999 per year for 1 user.",
    "link": {
      "label": "See pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "how-do-i-start-the-free-trial",
    "topic": "getting-started",
    "intents": [
      "start free trial",
      "how to start trial",
      "begin free trial",
      "free trial signup",
      "try it free",
      "start trail",
      "get started",
      "how do I sign up for trial"
    ],
    "question": "How do I start the free trial?",
    "answer": "Just sign up to start your 30 day free trial. No credit card needed, and you can cancel anytime. You'll get full access so you can capture enquiries and set up your pipeline right away.",
    "link": {
      "label": "Get started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "how-long-is-the-free-trial",
    "topic": "getting-started",
    "intents": [
      "trial length",
      "how long trial",
      "free trial days",
      "trial period",
      "how many days free",
      "30 day trial",
      "duration of trial",
      "free trail length"
    ],
    "question": "How long is the free trial?",
    "answer": "The free trial lasts 30 days with full access to NNC CRM. No credit card is required to start, and you can cancel anytime before it ends.",
    "link": {
      "label": "See pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "do-i-need-a-credit-card-to-sign-up",
    "topic": "getting-started",
    "intents": [
      "credit card needed",
      "need card to sign up",
      "is card required",
      "no credit card",
      "sign up without card",
      "do I need to pay upfront",
      "card to start trial"
    ],
    "question": "Do I need a credit card to sign up?",
    "answer": "No. You can start your 30 day free trial without a credit card. Just sign up and begin using NNC CRM right away, with no commitment.",
    "link": {
      "label": "Get started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "how-do-i-sign-up-for-nnc-crm",
    "topic": "getting-started",
    "intents": [
      "sign up",
      "create account",
      "how to register",
      "signup steps",
      "make an account",
      "get an account",
      "how do I join",
      "onboarding steps"
    ],
    "question": "How do I sign up for NNC CRM?",
    "answer": "Creating your account takes just seconds. Sign up, invite your team, set up your pipeline, and connect WhatsApp and web forms to capture enquiries, all on your first day.",
    "link": {
      "label": "Get started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "how-long-does-setup-take",
    "topic": "getting-started",
    "intents": [
      "setup time",
      "how long to set up",
      "installation time",
      "how quick to start",
      "time to configure",
      "setup duration",
      "how fast can I start"
    ],
    "question": "How long does setup take?",
    "answer": "Setup typically takes about a day. You'll create your account, invite your team, set up your pipeline, and connect WhatsApp and web forms to start capturing enquiries.",
    "link": {
      "label": "Get started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "how-long-until-we-go-live",
    "topic": "getting-started",
    "intents": [
      "go live time",
      "how long to go live",
      "when can we start using it",
      "time to launch",
      "get up and running",
      "how soon live",
      "ready to use"
    ],
    "question": "How long until we go live?",
    "answer": "Most businesses go live in about a day. After signing up, you invite your team, set your pipeline stages, and connect your enquiry sources, then you're ready to sell.",
    "link": {
      "label": "Get started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "can-i-import-my-existing-data",
    "topic": "getting-started",
    "intents": [
      "import data",
      "migrate data",
      "bring my contacts",
      "upload existing leads",
      "data migration",
      "import contacts",
      "move my data over",
      "transfer data"
    ],
    "question": "Can I import my existing data?",
    "answer": "Yes. You can bring in your existing leads, contacts and deals when you get started. If you'd like a hand migrating, our team is happy to help at hello@nncdigital.co.in.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "how-do-i-add-team-members",
    "topic": "getting-started",
    "intents": [
      "add team members",
      "invite users",
      "add users",
      "invite my team",
      "add people",
      "team setup",
      "invite colleagues",
      "add staff"
    ],
    "question": "How do I add team members?",
    "answer": "Invite your people from your account and set their roles in seconds. Your plan sets the limit: Starter 1 user, Growth up to 3 users, and Enterprise up to 10 users.",
    "link": {
      "label": "Get started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "how-many-users-can-i-add",
    "topic": "getting-started",
    "intents": [
      "how many users",
      "user limit",
      "number of seats",
      "max users",
      "team size",
      "how many people",
      "seats per plan",
      "user count"
    ],
    "question": "How many users can I add?",
    "answer": "It depends on your plan: Starter includes 1 user, Growth includes up to 3 users, and Enterprise includes up to 10 users. You can upgrade anytime as your team grows.",
    "link": {
      "label": "See plans",
      "href": "/pricing"
    }
  },
  {
    "id": "how-do-i-set-up-my-sales-pipeline",
    "topic": "getting-started",
    "intents": [
      "set up pipeline",
      "configure pipeline",
      "create sales pipeline",
      "pipeline stages",
      "build my pipeline",
      "customise pipeline",
      "setup sales stages"
    ],
    "question": "How do I set up my sales pipeline?",
    "answer": "During setup you choose pipeline stages that match how you sell. It only takes a few minutes, and you can adjust your stages anytime as your process evolves.",
    "link": {
      "label": "Sales pipeline",
      "href": "/features/sales-pipeline"
    }
  },
  {
    "id": "is-training-or-onboarding-help-available",
    "topic": "getting-started",
    "intents": [
      "training",
      "onboarding help",
      "do you offer training",
      "need help setting up",
      "onboarding support",
      "is there training",
      "help getting started",
      "tutorial"
    ],
    "question": "Is training or onboarding help available?",
    "answer": "Yes. Our four step guide gets you started fast, and our team is here to help. Call 94227 99466 (Mon to Sat, 10am to 7pm) or email hello@nncdigital.co.in.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "how-do-i-connect-whatsapp-and-web-forms",
    "topic": "getting-started",
    "intents": [
      "connect whatsapp",
      "link web forms",
      "capture enquiries",
      "connect website",
      "whatsapp setup",
      "integrate forms",
      "setup enquiry sources",
      "connect my channels"
    ],
    "question": "How do I connect WhatsApp and web forms?",
    "answer": "During onboarding you connect WhatsApp and your website forms so every enquiry flows straight into NNC CRM. It's part of the quick four step setup on day one.",
    "link": {
      "label": "Enquiries",
      "href": "/features/enquiries"
    }
  },
  {
    "id": "can-i-get-help-during-setup",
    "topic": "getting-started",
    "intents": [
      "setup help",
      "get help",
      "contact support",
      "need assistance",
      "talk to someone",
      "help with onboarding",
      "support contact",
      "who do I call"
    ],
    "question": "Can I get help during setup?",
    "answer": "Absolutely. Reach our team on 94227 99466 (Mon to Sat, 10am to 7pm), email hello@nncdigital.co.in, or message us on WhatsApp for a quick response during business hours.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "is-my-data-safe-with-nnc-crm",
    "topic": "security",
    "intents": [
      "is my data safe",
      "data safe",
      "is it secure",
      "how secure is nnc",
      "data security",
      "is my data protected",
      "are you secure",
      "data safety",
      "secure crm",
      "is nnc safe"
    ],
    "question": "Is my data safe with NNC CRM?",
    "answer": "Yes. Your data is encrypted in transit and at rest, protected by role based access, and kept private. It is never sold, and you can export or delete it anytime.",
    "link": {
      "label": "See security",
      "href": "/support/security"
    }
  },
  {
    "id": "is-my-data-encrypted",
    "topic": "security",
    "intents": [
      "is data encrypted",
      "encryption",
      "do you encrypt data",
      "encrypted at rest",
      "encryption in transit",
      "is it encrypted",
      "data encryption",
      "encrytion",
      "secure encryption",
      "ssl"
    ],
    "question": "Is my data encrypted?",
    "answer": "Yes. All your data is encrypted both in transit and at rest, so it stays protected whether it is moving between systems or stored on our servers.",
    "link": {
      "label": "See security",
      "href": "/support/security"
    }
  },
  {
    "id": "how-often-is-my-data-backed-up",
    "topic": "security",
    "intents": [
      "backups",
      "how often backup",
      "data backup",
      "is my data backed up",
      "hourly backups",
      "backup frequency",
      "do you back up data",
      "bakcup",
      "automatic backups",
      "backup policy"
    ],
    "question": "How often is my data backed up?",
    "answer": "On the Enterprise plan, NNC takes automatic hourly backups so your data stays safe. Enterprise also includes a secure data vault for added protection.",
    "link": {
      "label": "See security",
      "href": "/support/security"
    }
  },
  {
    "id": "who-can-see-my-data-inside-my-account",
    "topic": "security",
    "intents": [
      "access control",
      "who can see my data",
      "user permissions",
      "role based access",
      "control access",
      "data access",
      "restrict access",
      "user roles",
      "permissions",
      "limit access",
      "audit logs"
    ],
    "question": "Who can see my data inside my account?",
    "answer": "NNC uses role based access, so people see only what they are allowed to. Enterprise adds custom roles and audit logs so you control and track exactly who accesses what.",
    "link": {
      "label": "See security",
      "href": "/support/security"
    }
  },
  {
    "id": "do-i-own-my-data",
    "topic": "security",
    "intents": [
      "do i own my data",
      "data ownership",
      "who owns the data",
      "is my data mine",
      "ownership of data",
      "is the data ours",
      "own my data",
      "data belongs to",
      "my data rights",
      "who owns it"
    ],
    "question": "Do I own my data?",
    "answer": "Yes, you own your data completely. NNC only processes it to provide the CRM to you, and you can export or delete it at any time from your account settings.",
    "link": {
      "label": "Data privacy",
      "href": "/support/data-privacy"
    }
  },
  {
    "id": "can-i-export-my-data",
    "topic": "security",
    "intents": [
      "export data",
      "can i export",
      "download my data",
      "export my data",
      "get my data out",
      "data export",
      "take my data",
      "exprot data",
      "how to export",
      "data portability"
    ],
    "question": "Can I export my data?",
    "answer": "Yes. You can export your data anytime from your account settings, or by writing to hello@nncdigital.co.in. Your data is always yours to take with you.",
    "link": {
      "label": "Data privacy",
      "href": "/support/data-privacy"
    }
  },
  {
    "id": "can-i-delete-my-data",
    "topic": "security",
    "intents": [
      "delete data",
      "can i delete my data",
      "remove my data",
      "delete my account data",
      "erase data",
      "data deletion",
      "how to delete data",
      "wipe data",
      "delete account",
      "delte data"
    ],
    "question": "Can I delete my data?",
    "answer": "Yes. You can delete your data at any time from your account settings, or by emailing hello@nncdigital.co.in. We keep data only while your account is active.",
    "link": {
      "label": "Data privacy",
      "href": "/support/data-privacy"
    }
  },
  {
    "id": "do-you-sell-my-data",
    "topic": "security",
    "intents": [
      "do you sell data",
      "is my data sold",
      "sell my data",
      "data privacy",
      "do you share my data",
      "is data private",
      "privacy",
      "data sharing",
      "sell personal data",
      "is my info sold"
    ],
    "question": "Do you sell my data?",
    "answer": "No, never. NNC does not sell your personal data to anyone. We collect only what we need to run the service, and you stay in control of your information.",
    "link": {
      "label": "Data privacy",
      "href": "/support/data-privacy"
    }
  },
  {
    "id": "what-data-does-nnc-collect",
    "topic": "security",
    "intents": [
      "what data do you collect",
      "data collected",
      "what info do you collect",
      "what do you store",
      "information collected",
      "data collection",
      "what data is stored",
      "collect data",
      "what you collect",
      "privacy data"
    ],
    "question": "What data does NNC collect?",
    "answer": "NNC collects your account details, the business data you enter, and usage information that helps improve the product. We never sell your personal data.",
    "link": {
      "label": "Data privacy",
      "href": "/support/data-privacy"
    }
  },
  {
    "id": "is-nnc-crm-gst-and-compliance-ready",
    "topic": "security",
    "intents": [
      "compliance",
      "is it gst compliant",
      "gst ready",
      "compliant crm",
      "legal compliance",
      "data compliance",
      "regulatory compliance",
      "complient",
      "does it follow law",
      "compliance ready"
    ],
    "question": "Is NNC CRM GST and compliance ready?",
    "answer": "Yes. NNC is built to help Indian businesses meet record keeping and GST obligations, with GST ready invoices. We continually review our practices to stay compliant with applicable law.",
    "link": {
      "label": "Compliance",
      "href": "/legal/compliance"
    }
  },
  {
    "id": "are-there-audit-logs-to-track-activity",
    "topic": "security",
    "intents": [
      "audit logs",
      "activity tracking",
      "track changes",
      "who changed what",
      "audit trail",
      "logs",
      "activity logs",
      "track user activity",
      "audit log",
      "change history"
    ],
    "question": "Are there audit logs to track activity?",
    "answer": "Yes, on the Enterprise plan. Enterprise (Rs 59,999 / year) adds audit logs, custom roles, a secure data vault and single sign on for the strongest control and traceability.",
    "link": {
      "label": "See pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "where-is-my-privacy-policy-and-what-rights-do-i-",
    "topic": "security",
    "intents": [
      "privacy policy",
      "data rights",
      "my privacy rights",
      "where is privacy policy",
      "how is data handled",
      "privacy terms",
      "data protection policy",
      "privact policy",
      "your privacy",
      "gdpr"
    ],
    "question": "Where is my privacy policy and what rights do I have?",
    "answer": "You can access, export and delete your data anytime from settings. We never sell personal data. Read the full details in our privacy policy or email hello@nncdigital.co.in.",
    "link": {
      "label": "Privacy policy",
      "href": "/legal/privacy"
    }
  },
  {
    "id": "how-do-i-contact-nnc-support",
    "topic": "support",
    "intents": [
      "how do I contact NNC",
      "contact support",
      "how to reach you",
      "get in touch",
      "support contact",
      "how do I get help",
      "reach NNC",
      "contact details",
      "how to contact NNC CRM",
      "contact info",
      "talk to support"
    ],
    "question": "How do I contact NNC support?",
    "answer": "You can reach us three ways: call 94227 99466 (Mon to Sat, 10am to 7pm), email hello@nncdigital.co.in, or message us on WhatsApp for a quick reply during business hours.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "what-is-your-phone-number",
    "topic": "support",
    "intents": [
      "phone number",
      "what's your number",
      "call you",
      "helpline",
      "phone",
      "contact number",
      "telephone",
      "how do I call NNC",
      "phone no",
      "customer care number",
      "call support"
    ],
    "question": "What is your phone number?",
    "answer": "Call us at 94227 99466, Monday to Saturday, 10am to 7pm. Our team is happy to help with plans, setup or any questions about NNC CRM.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "what-is-your-email-address",
    "topic": "support",
    "intents": [
      "email address",
      "what's your email",
      "email you",
      "email",
      "contact email",
      "support email",
      "mail id",
      "emial address",
      "how do I email NNC",
      "write to you"
    ],
    "question": "What is your email address?",
    "answer": "Email us at hello@nncdigital.co.in and we typically reply within one business day. Great for detailed questions, account help or anything you'd like in writing.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "can-i-contact-you-on-whatsapp",
    "topic": "support",
    "intents": [
      "WhatsApp support",
      "contact on WhatsApp",
      "WhatsApp number",
      "message you on WhatsApp",
      "whatsapp",
      "do you have WhatsApp",
      "chat on WhatsApp",
      "whatapp support",
      "reach you on WhatsApp",
      "support via WhatsApp"
    ],
    "question": "Can I contact you on WhatsApp?",
    "answer": "Yes. Message us on WhatsApp for a quick response during business hours. It's the fastest way to get a fast answer to a short question.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "what-are-your-support-hours",
    "topic": "support",
    "intents": [
      "support hours",
      "what time are you open",
      "business hours",
      "when are you available",
      "working hours",
      "office hours",
      "opening hours",
      "are you open now",
      "timings",
      "hours of operation"
    ],
    "question": "What are your support hours?",
    "answer": "Our team is available Monday to Saturday, 10am to 7pm. You can call or WhatsApp during these hours, and email anytime for a reply within one business day.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "how-fast-will-i-get-a-reply",
    "topic": "support",
    "intents": [
      "response time",
      "how fast do you reply",
      "how long for a reply",
      "when will you respond",
      "reply time",
      "turnaround time",
      "how quick is support",
      "responce time",
      "do you reply fast",
      "support response"
    ],
    "question": "How fast will I get a reply?",
    "answer": "Email replies usually come within one business day. For a quicker response, call 94227 99466 or message us on WhatsApp during business hours, Monday to Saturday.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "can-i-talk-to-a-real-person",
    "topic": "support",
    "intents": [
      "talk to a human",
      "speak to a person",
      "talk to someone",
      "real person",
      "speak to an agent",
      "talk to a human not a bot",
      "live person",
      "talk to support team",
      "reach a human",
      "speak to support"
    ],
    "question": "Can I talk to a real person?",
    "answer": "Absolutely. Call 94227 99466 (Mon to Sat, 10am to 7pm) or message us on WhatsApp to speak with our team directly. No bots between you and real help.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "do-you-have-a-help-center",
    "topic": "support",
    "intents": [
      "help center",
      "knowledge base",
      "help articles",
      "documentation",
      "do you have guides",
      "support docs",
      "self help",
      "help centre",
      "where are the guides",
      "FAQ help",
      "helpcenter"
    ],
    "question": "Do you have a help center?",
    "answer": "Yes. Our help center has guides and answers covering getting started, enquiries, billing, WhatsApp, security and more, so you can find solutions yourself anytime.",
    "link": {
      "label": "Visit help center",
      "href": "/support/help-center"
    }
  },
  {
    "id": "how-do-i-get-help-setting-up-nnc",
    "topic": "support",
    "intents": [
      "help with setup",
      "setup support",
      "onboarding help",
      "how to get started",
      "help setting up",
      "getting started",
      "set up my account",
      "setup assistance",
      "how do I begin",
      "onboarding"
    ],
    "question": "How do I get help setting up NNC?",
    "answer": "Check our getting started guide for four quick setup steps, or reach our team by phone, email or WhatsApp. Setup typically takes about a day.",
    "link": {
      "label": "Getting started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "is-there-developer-or-api-support",
    "topic": "support",
    "intents": [
      "API support",
      "developer support",
      "technical support API",
      "help with API",
      "developer help",
      "api documentation help",
      "integration support",
      "dev support",
      "api docs",
      "help for developers"
    ],
    "question": "Is there developer or API support?",
    "answer": "Yes. Our developer team supports the NNC REST API and webhooks. See the API docs, then contact developer support by email or phone if you need a hand.",
    "link": {
      "label": "API documentation",
      "href": "/support/api"
    }
  },
  {
    "id": "how-do-i-check-if-nnc-is-down",
    "topic": "support",
    "intents": [
      "is NNC down",
      "system status",
      "service status",
      "is the service working",
      "uptime",
      "outage",
      "is it down",
      "report an issue",
      "downtime",
      "status page",
      "service down"
    ],
    "question": "How do I check if NNC is down?",
    "answer": "Visit our system status page for live uptime on the web app, API and WhatsApp delivery. If you're stuck, contact support by phone, email or WhatsApp.",
    "link": {
      "label": "System status",
      "href": "/support/status"
    }
  },
  {
    "id": "how-do-i-contact-your-sales-team",
    "topic": "support",
    "intents": [
      "contact sales",
      "talk to sales",
      "sales team",
      "speak to sales",
      "pricing questions",
      "demo request",
      "contact your team",
      "sales contact",
      "talk about plans",
      "reach sales"
    ],
    "question": "How do I contact your sales team?",
    "answer": "To talk plans, pricing or whether NNC fits your business, reach our sales team by phone at 94227 99466, email hello@nncdigital.co.in, or WhatsApp.",
    "link": {
      "label": "Contact sales",
      "href": "/company/contact"
    }
  },
  {
    "id": "which-languages-does-support-cover",
    "topic": "support",
    "intents": [
      "what languages",
      "support languages",
      "do you speak Hindi",
      "language support",
      "regional language help",
      "languages supported",
      "can you help in Hindi",
      "language",
      "do you support local languages",
      "which languages do you support"
    ],
    "question": "Which languages does support cover?",
    "answer": "NNC is built for Indian businesses, so reach out by phone, WhatsApp or email and our team will be glad to help. For specific language needs, just ask when you contact us.",
    "link": {
      "label": "Contact support",
      "href": "/support/contact"
    }
  },
  {
    "id": "how-do-i-export-or-delete-my-data",
    "topic": "support",
    "intents": [
      "export my data",
      "delete my data",
      "data privacy contact",
      "remove my data",
      "download my data",
      "data deletion",
      "how to delete data",
      "data export",
      "privacy request",
      "delete account data"
    ],
    "question": "How do I export or delete my data?",
    "answer": "You can export or delete your data anytime from your account settings, or by writing to hello@nncdigital.co.in. Your data is private, yours, and never sold.",
    "link": {
      "label": "Data privacy",
      "href": "/support/data-privacy"
    }
  },
  {
    "id": "what-is-nnc-digital",
    "topic": "company",
    "intents": [
      "what is nnc digital",
      "who is nnc",
      "about nnc digital",
      "what does nnc do",
      "tell me about the company",
      "who makes nnc crm",
      "about the company",
      "what is nnc",
      "company info",
      "who are nnc digital"
    ],
    "question": "What is NNC Digital?",
    "answer": "NNC Digital is the company behind NNC CRM, the decision making CRM built for Indian businesses. We help teams capture every enquiry, run a sales pipeline, forecast, invoice, engage on WhatsApp and see clear reports.",
    "link": {
      "label": "About us",
      "href": "/company/about"
    }
  },
  {
    "id": "who-are-you",
    "topic": "company",
    "intents": [
      "who are you",
      "who am i talking to",
      "what company is this",
      "who runs this",
      "who built this crm",
      "introduce yourself",
      "who r you",
      "whats this company",
      "about you"
    ],
    "question": "Who are you?",
    "answer": "We are NNC Digital, makers of NNC CRM, the decision making CRM for every industry. We started with a simple belief: every business deserves a clear view of what is next, not just what already happened.",
    "link": {
      "label": "About us",
      "href": "/company/about"
    }
  },
  {
    "id": "who-is-nnc-crm-built-for",
    "topic": "company",
    "intents": [
      "who is it for",
      "who uses nnc",
      "is it for my business",
      "who is nnc crm for",
      "what businesses use it",
      "is this for small business",
      "target customers",
      "who can use this",
      "built for whom"
    ],
    "question": "Who is NNC CRM built for?",
    "answer": "NNC CRM is built for Indian businesses of every size, from the corner shop to the factory floor. We serve sales teams, service businesses, manufacturing, retail, healthcare, education and real estate.",
    "link": {
      "label": "See industries",
      "href": "/industries"
    }
  },
  {
    "id": "why-should-i-choose-nnc-crm",
    "topic": "company",
    "intents": [
      "why choose nnc",
      "why nnc crm",
      "why use nnc",
      "what makes nnc different",
      "why pick this crm",
      "benefits of nnc",
      "why nnc over others",
      "what's special about nnc",
      "reasons to choose nnc"
    ],
    "question": "Why should I choose NNC CRM?",
    "answer": "NNC is built for Indian businesses with GST ready invoicing, WhatsApp engagement and forecasting in one place. We stand for clarity, serving every business, and trust. Over 2,000 businesses use NNC with a 4.8/5 average rating.",
    "link": {
      "label": "About us",
      "href": "/company/about"
    }
  },
  {
    "id": "how-many-businesses-use-nnc-crm",
    "topic": "company",
    "intents": [
      "how many customers",
      "how many businesses use it",
      "how popular is nnc",
      "number of users",
      "how many clients",
      "customer base",
      "how many companies use nnc",
      "is nnc widely used",
      "user count"
    ],
    "question": "How many businesses use NNC CRM?",
    "answer": "Over 2,000 businesses across India trust NNC CRM, spanning 15 industries, with an average customer rating of 4.8 out of 5. From factories to clinics, teams use NNC to capture more and close faster.",
    "link": {
      "label": "Customer stories",
      "href": "/company/customers"
    }
  },
  {
    "id": "do-you-have-customer-stories-or-case-studies",
    "topic": "company",
    "intents": [
      "customer stories",
      "case studies",
      "success stories",
      "testimonials",
      "customer results",
      "who uses nnc crm",
      "show me examples",
      "real customers",
      "customer reviews",
      "case study"
    ],
    "question": "Do you have customer stories or case studies?",
    "answer": "Yes. Customers see 32% more enquiries converted on average, save 5 hours per rep each week and follow up 2x faster. Read stories from manufacturers, retailers and builders growing with NNC.",
    "link": {
      "label": "Customer stories",
      "href": "/company/customers"
    }
  },
  {
    "id": "are-you-hiring-how-do-i-apply",
    "topic": "company",
    "intents": [
      "careers",
      "are you hiring",
      "jobs",
      "open roles",
      "work at nnc",
      "how to apply",
      "join the team",
      "vacancies",
      "careers at nnc",
      "job openings",
      "hiring"
    ],
    "question": "Are you hiring? How do I apply?",
    "answer": "Yes, we are growing. We hire Product Engineers, Customer Success and Growth Marketers, all remote across India with a results first culture. Send your resume and a note to careers@nncdigital.co.in.",
    "link": {
      "label": "See careers",
      "href": "/company/careers"
    }
  },
  {
    "id": "what-is-it-like-to-work-at-nnc",
    "topic": "company",
    "intents": [
      "working at nnc",
      "company culture",
      "what's it like to work there",
      "team culture",
      "is it remote",
      "work environment",
      "life at nnc",
      "why work here",
      "work culture"
    ],
    "question": "What is it like to work at NNC?",
    "answer": "We are a small, focused team that ships fast and cares deeply about customers. You get real impact reaching thousands of businesses, ownership from day one with no red tape, and flexible remote work anywhere in India.",
    "link": {
      "label": "See careers",
      "href": "/company/careers"
    }
  },
  {
    "id": "can-i-become-a-partner",
    "topic": "company",
    "intents": [
      "partner program",
      "become a partner",
      "partnership",
      "reseller",
      "referral partner",
      "how to partner",
      "partner with nnc",
      "affiliate",
      "implementation partner",
      "partener",
      "earn commission"
    ],
    "question": "Can I become a partner?",
    "answer": "Yes. You can join as a referral partner and earn recurring commission, as an implementation partner setting up NNC for businesses, or as a technology partner building on our open API. Email partners@nncdigital.co.in.",
    "link": {
      "label": "Become a partner",
      "href": "/company/partners"
    }
  },
  {
    "id": "what-does-nnc-stand-for-as-a-company",
    "topic": "company",
    "intents": [
      "company values",
      "what do you stand for",
      "mission",
      "what nnc believes",
      "company principles",
      "what matters to nnc",
      "your values",
      "company mission",
      "what you care about"
    ],
    "question": "What does NNC stand for as a company?",
    "answer": "We stand for clarity (plain numbers, no jargon), every business (built for the corner shop and the factory floor alike), and trust (your data is private, secure and always yours). It is the decision making CRM for every industry.",
    "link": {
      "label": "About us",
      "href": "/company/about"
    }
  },
  {
    "id": "how-do-i-contact-nnc-digital",
    "topic": "company",
    "intents": [
      "contact nnc",
      "how to reach you",
      "phone number",
      "email address",
      "talk to sales",
      "contact details",
      "get in touch",
      "support number",
      "how do i contact you",
      "reach out",
      "contct"
    ],
    "question": "How do I contact NNC Digital?",
    "answer": "Call 94227 99466 (Mon to Sat, 10am to 7pm), email hello@nncdigital.co.in, or message us on WhatsApp. We reply within one business day. Setup typically takes about a day.",
    "link": {
      "label": "Contact us",
      "href": "/company/contact"
    }
  },
  {
    "id": "where-is-nnc-based",
    "topic": "company",
    "intents": [
      "where are you based",
      "where is nnc located",
      "location",
      "where is the office",
      "which country",
      "are you in india",
      "headquarters",
      "where is nnc digital",
      "based where",
      "office location"
    ],
    "question": "Where is NNC based?",
    "answer": "NNC Digital is built for and based in India, serving over 2,000 businesses across the country. Our team works remotely across India. Reach us at 94227 99466 or hello@nncdigital.co.in.",
    "link": {
      "label": "About us",
      "href": "/company/about"
    }
  },
  {
    "id": "is-my-data-safe-with-nnc",
    "topic": "company",
    "intents": [
      "is my data safe",
      "data security",
      "is nnc secure",
      "do you sell my data",
      "privacy",
      "how secure is it",
      "data protection",
      "is it trustworthy",
      "security",
      "data privacy"
    ],
    "question": "Is my data safe with NNC?",
    "answer": "Yes. Your data is encrypted in transit and at rest with role based access. It is private and never sold, and you can export or delete it anytime. Enterprise adds hourly backups and audit logs.",
    "link": {
      "label": "Security",
      "href": "/support/security"
    }
  },
  {
    "id": "what-is-nnc-crm",
    "topic": "general",
    "intents": [
      "what is NNC CRM",
      "what is nnc",
      "tell me about NNC",
      "what does NNC do",
      "explain NNC CRM",
      "about the product",
      "what is this",
      "nnc crm overview",
      "what is nnc crm exactly",
      "whats nnc"
    ],
    "question": "What is NNC CRM?",
    "answer": "NNC CRM by NNC Digital is the decision-making CRM for every industry, built for Indian businesses. It captures every enquiry, runs your sales pipeline, forecasts revenue, invoices customers, engages on WhatsApp, and gives clear reports.",
    "link": {
      "label": "Explore features",
      "href": "/features"
    }
  },
  {
    "id": "how-is-nnc-crm-different-from-other-crms",
    "topic": "general",
    "intents": [
      "how is NNC different",
      "why choose NNC",
      "what makes NNC unique",
      "NNC vs other CRMs",
      "why NNC over competitors",
      "what is special about NNC",
      "how is it different",
      "diffrence from other crms",
      "why use NNC",
      "NNC advantages"
    ],
    "question": "How is NNC CRM different from other CRMs?",
    "answer": "Two ways. You pick one simple yearly plan by team size (1, 3 or 10 users) instead of paying per seat. And NNC doesn't just store the past, it forecasts where your business is heading over the next 3, 6 and 12 months.",
    "link": {
      "label": "See forecasting",
      "href": "/features/forecasting"
    }
  },
  {
    "id": "is-nnc-crm-good-for-small-businesses",
    "topic": "general",
    "intents": [
      "is NNC for small business",
      "good for small business",
      "works for startups",
      "suitable for small teams",
      "is it for SMEs",
      "small business CRM",
      "is it for small companies",
      "smb friendly",
      "for a small team",
      "is nnc for startups"
    ],
    "question": "Is NNC CRM good for small businesses?",
    "answer": "Yes. NNC is built for Indian businesses of every size. The Starter plan covers 1 user at Rs 14,999/year, and you can upgrade as you grow. Setup typically takes about a day.",
    "link": {
      "label": "See pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "is-nnc-crm-cloud-based",
    "topic": "general",
    "intents": [
      "is NNC cloud based",
      "is it cloud",
      "on the cloud",
      "cloud or on premise",
      "do I install software",
      "is it web based",
      "saas or installed",
      "is it online software",
      "cloud hosted",
      "is nnc on cloud"
    ],
    "question": "Is NNC CRM cloud based?",
    "answer": "Yes, NNC CRM is cloud based, so you can access it from anywhere with no software to install. Your data is encrypted in transit and at rest, with role based access keeping it private.",
    "link": {
      "label": "View security",
      "href": "/support/security"
    }
  },
  {
    "id": "does-nnc-crm-need-an-internet-connection",
    "topic": "general",
    "intents": [
      "does it need internet",
      "works offline",
      "internet required",
      "can I use it offline",
      "do I need wifi",
      "offline access",
      "does nnc need net",
      "internet conection needed",
      "is internet required",
      "use without internet"
    ],
    "question": "Does NNC CRM need an internet connection?",
    "answer": "Yes. NNC is a cloud based CRM, so you need an internet connection to access it from your browser or device. There's nothing to install, and you can log in from anywhere."
  },
  {
    "id": "is-there-a-demo-of-nnc-crm",
    "topic": "general",
    "intents": [
      "is there a demo",
      "can I see a demo",
      "try before buy",
      "free demo",
      "product demo",
      "show me a demo",
      "test the CRM",
      "is there a free trial",
      "demo available",
      "can i try it",
      "see it in action"
    ],
    "question": "Is there a demo of NNC CRM?",
    "answer": "Yes. You can start a 30 day free trial with no credit card, or try the WhatsApp demo on the site. For a guided walkthrough, call 94227 99466 (Mon-Sat, 10am-7pm) or email hello@nncdigital.co.in.",
    "link": {
      "label": "Request a demo",
      "href": "/company/contact"
    }
  },
  {
    "id": "how-do-i-get-a-demo-or-talk-to-the-team",
    "topic": "general",
    "intents": [
      "how to get a demo",
      "book a demo",
      "schedule a demo",
      "talk to sales",
      "contact the team",
      "get a walkthrough",
      "request demo",
      "set up a demo",
      "how do i book a demo",
      "speak to someone"
    ],
    "question": "How do I get a demo or talk to the team?",
    "answer": "Call 94227 99466 (Mon to Sat, 10am to 7pm), email hello@nncdigital.co.in, or reach us on WhatsApp. You can also start the free 30 day trial right away, no card needed.",
    "link": {
      "label": "Contact us",
      "href": "/company/contact"
    }
  },
  {
    "id": "can-i-try-nnc-crm-for-free",
    "topic": "general",
    "intents": [
      "free trial",
      "is it free to try",
      "try for free",
      "free trial length",
      "how long is the trial",
      "do I need a card",
      "trial period",
      "start free trial",
      "is there a free version",
      "free trail"
    ],
    "question": "Can I try NNC CRM for free?",
    "answer": "Yes. Every plan comes with a 30 day free trial, no credit card required, and you can cancel anytime. Setup typically takes about a day, so you can be live fast.",
    "link": {
      "label": "Start free trial",
      "href": "/pricing"
    }
  },
  {
    "id": "what-languages-does-nnc-crm-support",
    "topic": "general",
    "intents": [
      "what languages",
      "language support",
      "does it support Hindi",
      "multilingual",
      "is it in English",
      "regional languages",
      "supported languages",
      "language options",
      "languges supported",
      "does nnc support hindi"
    ],
    "question": "What languages does NNC CRM support?",
    "answer": "NNC is built for Indian businesses and the platform is in English. For specific language needs, please reach our team at hello@nncdigital.co.in or call 94227 99466 to discuss your requirements.",
    "link": {
      "label": "Ask our team",
      "href": "/support/contact"
    }
  },
  {
    "id": "who-makes-nnc-crm",
    "topic": "general",
    "intents": [
      "who makes NNC",
      "who built NNC",
      "company behind NNC",
      "who owns NNC CRM",
      "about NNC Digital",
      "who develops it",
      "the company",
      "who is nnc digital",
      "maker of nnc",
      "who created NNC"
    ],
    "question": "Who makes NNC CRM?",
    "answer": "NNC CRM is made by NNC Digital, built for Indian businesses. The tagline says it best: the decision making CRM for every industry. Reach us at hello@nncdigital.co.in or 94227 99466.",
    "link": {
      "label": "About NNC Digital",
      "href": "/company/about"
    }
  },
  {
    "id": "what-can-i-do-with-nnc-crm",
    "topic": "general",
    "intents": [
      "what can NNC do",
      "features list",
      "what does it include",
      "key features",
      "what can I do with it",
      "main features",
      "capabilities",
      "what's included",
      "feature overview",
      "what functions does it have"
    ],
    "question": "What can I do with NNC CRM?",
    "answer": "Capture every enquiry from web, WhatsApp, calls and walk-ins, run a visual sales pipeline, forecast 3/6/12 months ahead, send GST-ready invoices, engage customers on WhatsApp, and see live reports and dashboards.",
    "link": {
      "label": "See all features",
      "href": "/features"
    }
  },
  {
    "id": "which-industries-is-nnc-crm-for",
    "topic": "general",
    "intents": [
      "which industries",
      "what industries",
      "is it for my industry",
      "industries supported",
      "who is it for",
      "does it work for retail",
      "is it for healthcare",
      "sectors served",
      "industry fit",
      "what businesses use it"
    ],
    "question": "Which industries is NNC CRM for?",
    "answer": "NNC works for every industry: sales teams, service businesses, manufacturing, retail and distribution, healthcare and clinics, education, and real estate. The CRM adapts to how your business works.",
    "link": {
      "label": "Browse industries",
      "href": "/industries"
    }
  },
  {
    "id": "how-quickly-can-i-get-started-with-nnc-crm",
    "topic": "general",
    "intents": [
      "how to get started",
      "how long to set up",
      "setup time",
      "getting started",
      "how fast to go live",
      "onboarding time",
      "how quickly can I start",
      "is setup hard",
      "how do i begin",
      "start using NNC"
    ],
    "question": "How quickly can I get started with NNC CRM?",
    "answer": "Fast. Create your account in seconds (no card), pick a plan by team size, import your contacts and pipelines in a click, and go live the same day. Setup typically takes about a day.",
    "link": {
      "label": "Getting started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "how-does-nnc-crm-compare-to-zoho-salesforce-or-h",
    "topic": "general",
    "intents": [
      "nnc vs zoho",
      "compare to salesforce",
      "hubspot alternative",
      "how is it different from other crms",
      "nnc vs competitors",
      "why not zoho crm",
      "comparison with other crm",
      "better than salesforce",
      "nnc crm comparison"
    ],
    "question": "How does NNC CRM compare to Zoho, Salesforce, or HubSpot?",
    "answer": "NNC CRM is built specifically for Indian businesses, with GST invoicing, WhatsApp engagement, and Razorpay and Tally integrations built in. It is simpler and faster to set up than global tools like Zoho, Salesforce, or HubSpot, with pricing in INR.",
    "link": {
      "label": "See features",
      "href": "/features"
    }
  },
  {
    "id": "is-there-a-free-version-of-nnc-crm",
    "topic": "pricing",
    "intents": [
      "free version",
      "is it free",
      "free forever plan",
      "no cost plan",
      "free tier",
      "does nnc have a free plan",
      "use nnc for free",
      "free crm",
      "permanently free"
    ],
    "question": "Is there a free version of NNC CRM?",
    "answer": "There is no permanently free plan, but you get a full 30 day free trial with no credit card needed. After that, paid plans start at Rs 14,999 per year (Rs 1,499 per month) for the Starter plan.",
    "link": {
      "label": "View pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "do-i-need-technical-skills-to-use-nnc-crm",
    "topic": "getting-started",
    "intents": [
      "need technical skills",
      "is it hard to use",
      "do i need a developer",
      "non technical",
      "easy to use",
      "is nnc beginner friendly",
      "no coding needed",
      "do i need IT team",
      "how easy is it"
    ],
    "question": "Do I need technical skills to use NNC CRM?",
    "answer": "No technical skills are needed. NNC CRM is designed to be easy to use, setup typically takes about a day, and our team helps with onboarding and training so anyone on your team can get started.",
    "link": {
      "label": "Getting started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "is-there-a-mobile-app-for-nnc-crm",
    "topic": "features",
    "intents": [
      "mobile app",
      "android app",
      "ios app",
      "use on phone",
      "is there an app",
      "nnc app",
      "access from mobile",
      "smartphone app",
      "use nnc on the go",
      "tablet app"
    ],
    "question": "Is there a mobile app for NNC CRM?",
    "answer": "NNC CRM is cloud based and works in any web browser on your phone, tablet, or computer, so you can manage your business from anywhere. Contact our team at hello@nncdigital.co.in for the latest on dedicated mobile apps.",
    "link": {
      "label": "Contact us",
      "href": "/support/contact"
    }
  },
  {
    "id": "can-nnc-crm-handle-multiple-branches-or-location",
    "topic": "features",
    "intents": [
      "multiple branches",
      "multi location",
      "many outlets",
      "branch management",
      "multiple stores",
      "multi branch crm",
      "handle several locations",
      "different offices",
      "franchise locations"
    ],
    "question": "Can NNC CRM handle multiple branches or locations?",
    "answer": "Yes. NNC CRM works for multi branch and multi location businesses, with role based access so each branch sees the right data. The Enterprise plan adds multi center control, custom roles and up to 10 users, ideal for larger operations.",
    "link": {
      "label": "View plans",
      "href": "/pricing"
    }
  },
  {
    "id": "is-there-a-contract-or-lock-in-period",
    "topic": "pricing",
    "intents": [
      "contract",
      "lock in",
      "long term commitment",
      "minimum term",
      "tied into a contract",
      "lock in period",
      "can i cancel anytime",
      "no contract",
      "commitment period",
      "is there a binding contract"
    ],
    "question": "Is there a contract or lock-in period?",
    "answer": "No long term lock in. You can cancel anytime, and you can pay monthly or annually. Annual billing saves about 17% compared with paying month to month, but the choice is yours.",
    "link": {
      "label": "View pricing",
      "href": "/pricing"
    }
  },
  {
    "id": "how-does-gst-invoicing-work-in-nnc-crm",
    "topic": "features",
    "intents": [
      "gst invoicing",
      "create gst invoice",
      "gst ready invoices",
      "tax invoice",
      "gst billing",
      "how do invoices work",
      "generate gst bill",
      "is it gst compliant",
      "gst invoice feature"
    ],
    "question": "How does GST invoicing work in NNC CRM?",
    "answer": "NNC CRM creates GST ready invoices and tracks payments for you. Invoicing is built in across all plans, and integrations with Razorpay and Tally help you handle payments and accounting smoothly.",
    "link": {
      "label": "Invoicing",
      "href": "/features/invoicing"
    }
  },
  {
    "id": "does-whatsapp-engagement-use-the-whatsapp-busine",
    "topic": "features",
    "intents": [
      "whatsapp business api",
      "official whatsapp",
      "whatsapp api",
      "two way whatsapp",
      "whatsapp campaigns",
      "how does whatsapp work",
      "connect whatsapp business",
      "whatsapp messaging feature",
      "whatsapp integration"
    ],
    "question": "Does WhatsApp engagement use the WhatsApp Business API?",
    "answer": "NNC CRM includes two way WhatsApp chat and campaigns as part of the Growth and Enterprise plans, integrated with WhatsApp. Contact our team to connect your WhatsApp Business number and set up engagement during onboarding.",
    "link": {
      "label": "WhatsApp engagement",
      "href": "/features/whatsapp"
    }
  },
  {
    "id": "how-do-i-move-my-data-from-my-old-crm-or-spreads",
    "topic": "getting-started",
    "intents": [
      "data migration",
      "import from old crm",
      "switch from another crm",
      "move my data over",
      "migrate from excel",
      "import spreadsheets",
      "transfer existing data",
      "move from zoho",
      "bring my data in"
    ],
    "question": "How do I move my data from my old CRM or spreadsheets?",
    "answer": "Yes, you can import your existing data from spreadsheets or another CRM. Our team helps with data migration during setup, which typically takes about a day, so you go live quickly without losing any information.",
    "link": {
      "label": "Getting started",
      "href": "/support/getting-started"
    }
  },
  {
    "id": "is-there-a-money-back-guarantee",
    "topic": "pricing",
    "intents": [
      "money back guarantee",
      "refund if not satisfied",
      "can i get my money back",
      "satisfaction guarantee",
      "refund policy",
      "get a refund",
      "is my payment refundable",
      "money back",
      "guarantee"
    ],
    "question": "Is there a money-back guarantee?",
    "answer": "You get a full 30 day free trial with no credit card, so you can test everything risk free before paying. You can cancel anytime. For refund questions, contact hello@nncdigital.co.in or call 94227 99466.",
    "link": {
      "label": "Contact us",
      "href": "/support/contact"
    }
  },
  {
    "id": "how-do-i-book-a-demo-of-nnc-crm",
    "topic": "support",
    "intents": [
      "book a demo",
      "schedule a demo",
      "request a demo",
      "see a demo",
      "arrange a walkthrough",
      "talk to sales for demo",
      "set up a demo call",
      "demo booking",
      "get a product demo"
    ],
    "question": "How do I book a demo of NNC CRM?",
    "answer": "To book a demo, contact our team on WhatsApp, call 94227 99466 (Mon to Sat, 10am to 7pm), or email hello@nncdigital.co.in. We will walk you through NNC CRM for your business.",
    "link": {
      "label": "Contact us",
      "href": "/support/contact"
    }
  },
  {
    "id": "what-happens-to-my-data-if-i-cancel",
    "topic": "security",
    "intents": [
      "data after cancel",
      "cancel and keep data",
      "export before cancelling",
      "what happens to my data",
      "lose data if i cancel",
      "data after cancellation",
      "download my data",
      "keep my records",
      "data when i leave"
    ],
    "question": "What happens to my data if I cancel?",
    "answer": "You own your data and can export it anytime, including before you cancel. You can also delete it whenever you want. Your data is private and never sold. Contact support if you need help exporting.",
    "link": {
      "label": "Data and privacy",
      "href": "/support/data-privacy"
    }
  },
  {
    "id": "what-integrations-does-nnc-crm-support",
    "topic": "features",
    "intents": [
      "what does it integrate with",
      "razorpay integration",
      "tally integration",
      "shopify integration",
      "gmail integration",
      "available integrations",
      "connect tools",
      "third party integrations",
      "does it work with tally"
    ],
    "question": "What integrations does NNC CRM support?",
    "answer": "NNC CRM integrates with WhatsApp, Gmail, Razorpay, Tally, and Shopify, and offers an open REST API so developers can connect it to your other tools and workflows.",
    "link": {
      "label": "Integrations",
      "href": "/features/integrations"
    }
  },
  {
    "id": "can-multiple-team-members-use-nnc-crm-at-the-sam",
    "topic": "pricing",
    "intents": [
      "multiple users at once",
      "team access",
      "many users simultaneously",
      "concurrent users",
      "whole team use it",
      "share with my team",
      "users working together",
      "multi user access",
      "everyone access at once"
    ],
    "question": "Can multiple team members use NNC CRM at the same time?",
    "answer": "Yes. Plans include 1 user (Starter), up to 3 users (Growth), or up to 10 users (Enterprise), all working at the same time with role based access so everyone sees the right data.",
    "link": {
      "label": "View plans",
      "href": "/pricing"
    }
  }
]
