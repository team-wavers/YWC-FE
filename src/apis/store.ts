import { instance } from "./base";

const getStoreList = async (q: string | null, page: string | null) => {
    return await instance()
        .get(`v1/stores?q=${q}&page=${page}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
};

export { getStoreList };
