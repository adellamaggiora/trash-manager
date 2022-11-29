export interface BusinessDay {
    times: {
        startTime: { hh: number; mm: number; };
        endTime: { hh: number; mm: number; };
    }[];
    isOpen: boolean;
    h24Open: boolean;
}