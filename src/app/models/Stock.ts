import { Quote } from "./Quote";

export interface Stock {
  id: string,
  name: string,
  symbol: string,
  quote: Quote | null
}
