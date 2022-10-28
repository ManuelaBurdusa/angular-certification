import { Sentiment } from "./Sentiment";

export interface SentimentTracking {
  company: string;
  symbol: string;
  sentimentHistory: Sentiment[];
}
