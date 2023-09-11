import {IUser} from "./user";
import {Session} from "./session";
import {StatusTransaction} from "./statusTransaction";
import {Seance} from "./seance";

export class Discipline{
    id?:	number
    idUser?:	number
    idSeance?:	number
    sanction?:	string
    typeDiscipline?: StatusTransaction
    user?:	IUser
    seance?:	Seance
    date?:	Date
    createdAt?:	string
    updatedAt?:	string
  }

