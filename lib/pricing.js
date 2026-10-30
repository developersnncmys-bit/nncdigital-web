// Pricing is by team-size band, not per user. Three billing terms, GST extra.
// [ Replace the quarterly / half-yearly numbers with your real rates before launch. ]

export const GST_NOTE = 'plus 18% GST'

export const BILLING_TERMS = [
  { key: 'quarterly', label: 'Quarterly', per: '/ quarter', sub: 'billed quarterly' },
  { key: 'halfyearly', label: 'Half yearly', per: '/ 6 months', sub: 'billed half yearly' },
  { key: 'yearly', label: 'Yearly', per: '/ year', sub: 'billed yearly', best: true },
]

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    category: 'For Solo Founders and Freelancers',
    users: '1 User',
    seats: '1 User',
    prices: { quarterly: 4499, halfyearly: 8499, yearly: 14999 },
    tagline: 'Core CRM to stop losing leads.',
    popular: false,
    highlight: false,
    featuresHeader: "What's Included",
    groups: [
      {
        icon: 'sales',
        title: 'Sales and Enquiries',
        items: [
          'Enquiry and Lead Management',
          'Sales Pipeline with Stages',
          'Contacts and Companies',
          'Tasks and Reminders',
        ],
      },
      {
        icon: 'billing',
        title: 'Billing',
        items: ['Invoicing and Payments', '**GST-Ready** Documents'],
      },
      {
        icon: 'insights',
        title: 'Insights',
        items: ['Reports and Dashboards'],
      },
      {
        icon: 'support',
        title: 'Support',
        items: ['Email Support'],
      },
    ],
    features: [
      'Enquiry & lead management',
      'Sales pipeline',
      'Invoicing & payments',
      'Basic reports',
      'Email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    category: 'For Growing Teams',
    users: 'Up to 3 Users',
    seats: 'Up to 3 Users',
    prices: { quarterly: 8999, halfyearly: 16999, yearly: 29999 },
    tagline: 'The plan most businesses choose.',
    popular: true,
    highlight: false,
    featuresHeader: 'Everything in Starter, plus',
    groups: [
      {
        icon: 'forecast',
        title: 'Decisions',
        items: [
          'Forecasting and Projections',
          'Goal and Target Tracking',
          '**Advanced** Analytics',
        ],
      },
      {
        icon: 'money',
        title: 'Operations',
        items: ['Expenses and Payroll', 'Inventory and Catalog'],
      },
      {
        icon: 'engagement',
        title: 'Engagement',
        items: ['**WhatsApp** Engagement', 'Marketing Campaigns'],
      },
      {
        icon: 'support',
        title: 'Support',
        items: ['**Priority** Support'],
      },
    ],
    features: [
      'Everything in Starter',
      'Forecasting & projections',
      'Expenses & payroll',
      'WhatsApp engagement',
      'Advanced analytics',
      'Priority support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    category: 'For Larger Teams and Multiple Centres',
    users: 'Up to 10 Users',
    seats: 'Up to 10 Users',
    prices: { quarterly: 17999, halfyearly: 33999, yearly: 59999 },
    tagline: 'For multi-centre and multi-branch businesses.',
    popular: false,
    highlight: true,
    featuresHeader: 'Everything in Growth, plus',
    groups: [
      {
        icon: 'scale',
        title: 'Scale',
        items: ['**Multi-Centre** Control', 'Custom Roles and Permissions'],
      },
      {
        icon: 'security',
        title: 'Security',
        items: ['Data Vault and **Hourly Backups**', 'Audit Logs'],
      },
      {
        icon: 'platform',
        title: 'Platform',
        items: ['**API Access** and Integrations', 'Single Sign-On'],
      },
      {
        icon: 'support',
        title: 'Support',
        items: ['**Dedicated** Account Manager'],
      },
    ],
    features: [
      'Everything in Growth',
      'Up to 10 users',
      'Data vault & hourly backups',
      'Audit logs & API access',
      'Dedicated account manager',
    ],
  },
]

// Feature comparison matrix. values map to [Starter, Growth, Enterprise].
// true → included, false → not included, string → specific value.
export const COMPARISON = [
  {
    group: 'Plan',
    rows: [
      { label: 'Users included', values: ['1 user', 'Up to 3', 'Up to 10'] },
      { label: 'Yearly price (plus GST)', values: ['₹14,999', '₹29,999', '₹59,999'] },
      { label: 'Quarterly and half yearly billing', values: [true, true, true] },
      { label: 'Free 30-day trial', values: [true, true, true] },
    ],
  },
  {
    group: 'Core CRM',
    rows: [
      { label: 'Enquiry & lead management', values: [true, true, true] },
      { label: 'Sales pipeline', values: [true, true, true] },
      { label: 'Contacts & companies', values: [true, true, true] },
      { label: 'Tasks & reminders', values: [true, true, true] },
      { label: 'Invoicing & payments', values: [true, true, true] },
    ],
  },
  {
    group: 'Decisions',
    rows: [
      { label: 'Reports & analytics', values: ['Basic', 'Advanced', 'Advanced'] },
      { label: 'Forecasting (3 / 6 / 12 mo)', values: [false, true, true] },
      { label: 'Expenses & payroll', values: [false, true, true] },
      { label: 'Inventory & catalog', values: [false, true, true] },
    ],
  },
  {
    group: 'Engagement',
    rows: [
      { label: 'WhatsApp engagement', values: [false, true, true] },
      { label: 'Marketing campaigns', values: [false, true, true] },
    ],
  },
  {
    group: 'Security & scale',
    rows: [
      { label: 'Role based access', values: [true, true, true] },
      { label: 'Multi center control', values: [false, false, true] },
      { label: 'Audit logs', values: [false, true, true] },
      { label: 'API & integrations', values: [false, true, true] },
      { label: 'Data vault & hourly backups', values: [false, false, true] },
    ],
  },
  {
    group: 'Support',
    rows: [
      {
        label: 'Support',
        values: ['Email', 'Priority', 'Dedicated manager'],
      },
    ],
  },
]
