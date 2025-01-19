import { config } from "dotenv";
import { subDays } from "date-fns";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { categories, accounts, transactions } from "@/db/schema";

import { eachDayOfInterval, format } from "date-fns";
import { convertAmountToMiliunits } from "@/lib/utils";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const SEED_USER_ID = "user_2pVukHtS3vqJwxqqEGbMmCXKkoi";

const SEED_CATEGORIES = [
  { id: "category_1", name: "Food", userId: SEED_USER_ID, plaidId: null },
  { id: "category_2", name: "Rent", userId: SEED_USER_ID, plaidId: null },
  { id: "category_3", name: "Utilities", userId: SEED_USER_ID, plaidId: null },
  {
    id: "category_4",
    name: "Entertainment",
    userId: SEED_USER_ID,
    plaidId: null,
  },
  { id: "category_5", name: "Travel", userId: SEED_USER_ID, plaidId: null },
  { id: "category_6", name: "Health", userId: SEED_USER_ID, plaidId: null },
];

const SEED_ACCOUNTS = [
  { id: "account_1", name: "Checking", userId: SEED_USER_ID, plaidId: null },
  { id: "account_2", name: "Savings", userId: SEED_USER_ID, plaidId: null },
  { id: "account_3", name: "Credit Card", userId: SEED_USER_ID, plaidId: null },
  { id: "account_4", name: "Investment", userId: SEED_USER_ID, plaidId: null },
  { id: "account_5", name: "Cash", userId: SEED_USER_ID, plaidId: null },
];

const defaultTo = new Date();
const defaultFrom = subDays(defaultTo, 30);

const SEED_TRANSACTIONS: (typeof transactions.$inferSelect)[] = [];

const generateRandomAmount = (category: typeof categories.$inferInsert) => {
  switch (category.name) {
    case "Rent":
      return Math.random() * 30000 + 15000;
    case "Utilities":
      return Math.random() * 5000 + 2000;
    case "Food":
      return Math.random() * 10000 + 5000;
    default:
      return Math.random() * 2000 + 500;
  }
};
const generateTransactionsForDay = (day: Date) => {
  const numTransactions = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < numTransactions; i++) {
    const category =
      SEED_CATEGORIES[Math.floor(Math.random() * SEED_CATEGORIES.length)];
    const account =
      SEED_ACCOUNTS[Math.floor(Math.random() * SEED_ACCOUNTS.length)];

    const isExpense = Math.random() > 0.6;

    const amount = generateRandomAmount(category);

    const formattedAmount = convertAmountToMiliunits(
      isExpense ? -amount : amount
    );

    SEED_TRANSACTIONS.push({
      id: `transaction_${format(day, "yyyy-MM-dd")}_${i}`,
      accountId: account.id,
      categoryId: category.id,
      date: day,
      amount: formattedAmount,
      payee: "Merchant",
      notes: "Transaction added using seed script",
    });
  }
};

const generateTransactions = () => {
  const days = eachDayOfInterval({ start: defaultFrom, end: defaultTo });
  days.forEach((day) => generateTransactionsForDay(day));
};

generateTransactions();

(async () => {
  try {
    // reset database
    await db.delete(transactions).execute();
    await db.delete(accounts).execute();
    await db.delete(categories).execute();

    // seed categories
    await db.insert(categories).values(SEED_CATEGORIES).execute();

    // seed accounts
    await db.insert(accounts).values(SEED_ACCOUNTS).execute();
    // seed transactions

    await db.insert(transactions).values(SEED_TRANSACTIONS).execute();
  } catch (error) {
    console.error("Error seeding database", error);
    process.exit(1);
  }
})();
