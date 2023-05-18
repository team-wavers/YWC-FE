export interface IStore {
    _id: number;
    name: string;
    category: string | null;
    phone: string | null;
    address: string | null;
    latitude?: number;
    longitude?: number;
    deleted_at?: string | null;
    updated_at?: string | null;
    created_at?: string;
}

export type IStores = Array<IStore>;
