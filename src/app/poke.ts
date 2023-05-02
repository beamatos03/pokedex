import { Types } from "./types";

export interface Poke
{
id: number;
 name :string;
 height : number;
 weight: number;
 types:{
  type: {
      name: string
  }
}[];

}
