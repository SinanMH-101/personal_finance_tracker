# Personal Finance Tracker

A simple and personal finance tracker built with modern web technologies. It allows users to add income and expense transactions, calculates the total balance automatically, and persists data using local storage. Made as a practice project to practice using React, Typescript and MobX.

## Features

- Add income and expense transactions
- Color-coded transaction list
- Live balance calculation
- Delete transactions with a click
- Persistent storage using `localStorage`
- Responsive and modern UI design

## Tech Stack

- **React** – UI components
- **TypeScript** – Type safety across the app
- **MobX** – Application state management
- **Vite** – Development and build tool
- **CSS** – Custom styles and layout
- **LocalStorage** – Data persistence across refreshes

## Project Structure

```
personal-finance-tracker/
├── public/
│   └── index.html
├── src/
│   ├── index.tsx
│   ├── App.tsx
│   ├── styles.css
│   ├── components/
│   │   ├── AddTransaction.tsx
│   │   └── TransactionList.tsx
│   └── store/
│       └── TransactionStore.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/personal-finance-tracker.git
cd personal-finance-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:5173
```

## To-Do (Future Plans)

- Add category tags to transactions
- Visual analytics using charts (e.g., pie or bar charts)
- Monthly/Yearly views
- Dark mode toggle


## Author

Developed by Sinan as a learning project using React, MobX, and TypeScript.
