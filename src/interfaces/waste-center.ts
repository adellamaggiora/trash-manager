import { Address } from "./address";
import { BusinessOpening } from "./business-opening";
import { Contact } from "./contact";

export interface WasteCenter {
    name: string;
    address: Address;
    contacts: Contact;
    notes: string[];
    businessOpening: BusinessOpening;
}