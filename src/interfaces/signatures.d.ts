import { Waste } from "./waste";

interface BackendApi {

    getWaste: (zipCode: string, date: Date, zone?: string) => Waste;

    getWastes: (zipCode: string, startDate: Date, endDate: Date, zone?: string) => {
        zipCode: string;
        date: Date;
        wastes: {
            code: string;
            label: string;
            details: string[];
        }[];
        zone?: string;
    }[];

    getWasteCenters: (zipCode: string) => {
        name: string;
        address: Address;
        contacts: Contact;
        notes: string[];
        businessOpening: BusinessOpening;
    }[];

}

interface Address {
    zipCode: string;
    address: string;
    city: string;
    province: string;
    region: string;
    country: string;
}

interface Contact {
    phone: string;
    email: string;
    fax: string;
}

interface BusinessOpening {
    0: BusinessDay;
    1: BusinessDay;
    2: BusinessDay;
    3: BusinessDay;
    4: BusinessDay;
    5: BusinessDay;
    6: BusinessDay;
}

interface BusinessDay {
    times: {
        startTime: { hh: number; mm: number; };
        endTime: { hh: number; mm: number; };
    }[];
    isOpen: boolean;
    h24Open: boolean;
}
