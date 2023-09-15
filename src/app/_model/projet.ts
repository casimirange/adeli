import {IUser} from "./user";
import {Status} from "./status";
import {StatusTransaction} from "./statusTransaction";

export class Projet{
  id?: number;
  montant: number;
  date: Date;
  // idSeance: number;
  motif: string;
  typeTransaction?: StatusTransaction;
  transaction?: string;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}

