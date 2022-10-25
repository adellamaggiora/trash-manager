export interface Waste {
  zipCode: string;
  date: Date;
  wastes: {
    code: string;
    label: string;
    details: string[];
  }[];
  zone?: string;
}
