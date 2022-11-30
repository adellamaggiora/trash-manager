import express from "express";
import { Request, Response } from "express";
import responseFns from "../functions/response-fns";
import utilities from "../functions/utilities";
import { WasteInfo } from "../interfaces/waste-info";
import { pipe } from "rxjs";
import { BackendApi } from "../interfaces/signatures";

const getWastes = (req: Request, res: Response) => {
  const wasteController = pipe(
    getWastesQuery,
    execQuery,
    wasteInfoFactory
  );
  pipe(
    wasteController,
    responseFns.sendOkJson(res),
  )(req.query);
};

const wasteRouter = express.Router();

wasteRouter
  .get("/waste", getWastes);

export default wasteRouter;

const wasteInfoFactory = (
  { zipCode, date, wastes }: { zipCode: string; date: string; wastes: any[] },
): WasteInfo => ({
  date: date,
  zipCode: zipCode,
  wastes: wastes.map((_) => ({
    code: _.code,
    label: _.label,
  })),
});

//zipCode: string, startDate: Date, endDate: Date, zone?: string
const getWastesQuery = ({ zipCode, startDate, endDate, zone }) =>
  `SELECT * FROM WASTES WHERE zipCode=${zipCode} AND date >=${startDate} AND date <=${endDate} AND ZONE=${zone}`;

const execQuery = (query: string) => ({
  date: "2022-11-29T21:47:10.527Z",
  zipCode: "55016",
  wastes: [
    {
      code: 1,
      label: "Multimateriale",
    },
    {
      code: 2,
      label: "Carta",
    },
  ],
});
