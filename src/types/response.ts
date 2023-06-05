import { IStores } from "./store";

export type responseType = {
    code: number;
    message: string;
    result: { count: number; rows: IStores };
};
