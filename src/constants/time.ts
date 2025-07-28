import ms from "ms";

export const TIME = {
  HOUR: ms("1h"),
  DAY: ms("1d"),
  WEEK: ms("7 days"),
} as const;
