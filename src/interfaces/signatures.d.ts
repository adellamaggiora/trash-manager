import { WasteInfo } from "./waste-info";
import { WasteCenter } from "./waste-center";

interface BackendApi {

    getWastes: (zipCode: string, startDate: Date, endDate: Date, zone?: string) => WasteInfo[];

    getWasteCenters: (zipCode: string) => WasteCenter[];

}
