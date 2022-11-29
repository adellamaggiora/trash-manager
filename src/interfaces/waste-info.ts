import { Waste } from "./waste";

export interface WasteInfo {
  zipCode: string;
  date: string;
  wastes: Waste[];
  zone?: string;
}
