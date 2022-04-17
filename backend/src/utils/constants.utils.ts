export const PORT = process.env.PORT || 8080;
export const ALLOWED_BOOK_SELL_COUNT = 10;
export const JWT_SECRET = process.env.JWT_SECRET! || "secretString";
export const DATABASE_URL = process.env.DATABASE_URL ||
  "postgresql://{user}:@localhost:5432/{db}";
