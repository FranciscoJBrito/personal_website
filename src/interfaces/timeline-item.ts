import { ReactNode } from "react";

export interface TimeLineItemI {
  title: string;
  location: string;
  company: string;
  date: string;
  description: ReactNode;
}
