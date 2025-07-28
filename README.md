# 📊 AdMyDash – AI Dashboard

**AdMyDash** is a modern, responsive AI-powered dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and powerful charting components. It offers real-time data visualization through reusable components like line, bar, and pie charts with a sleek developer-friendly structure.

---

## 🚀 Features

- ⚡ Fast and responsive UI
- 📈 Prebuilt charts: Line, Bar, Pie
- 🧩 Modular component structure
- 🎨 Light/Dark theme with smooth transitions
- 🗓️ Date range filtering
- 📊 Dynamic mock data integration
- 🧠 Built with `Suspense` and context-based `DataProvider`

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State/Context**: React Context API
- **Charting**: Recharts
- **UI Components**: Skeleton loaders, date pickers, data tables
- **Environment**: ESLint, PostCSS, TSConfig, Modular File Structure

---

## 📁 Folder Structure (based on screenshot)

├── app/ # App router-based pages
│ └── dashboard/ # Dashboard page logic
├── components/ # UI and dashboard components
│ └── ui/ # Shared UI elements like Skeleton
│ └── dashboard/ # Chart components (line, pie, bar)
├── lib/ # Data context and mock data utils
├── public/ # Static files
├── src/
├── types/ # TypeScript types
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── next-env.d.ts

---

## 📦 Getting Started

### 1. Clone the repo

bash
git clone hhttps://github.com/hdev916/AI-Analytics-Dashboard.git
cd admydash

Install dependencies ------>
npm install

Run the development server ------>
npm run dev

###Open http://localhost:3000 to view the dashboard.

🧪 Mock Data is currently generated via:

import { generateDashboardData } from '@/lib/mock-data';
You can plug in a real API later by replacing the mock data utility with your backend integration.


🤝 Contribution
Pull requests and contributions are welcome!

Fork the repo

Create a new branch

Commit your changes

Open a PR


Built with ❤️ by Harsh Dev