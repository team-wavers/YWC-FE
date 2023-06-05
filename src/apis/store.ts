import { instance } from "./base";

const getStoreList = async (
    q: string | null,
    page: string | null,
    size: number | null,
) => {
    const { data } = await instance().get(
        `v1/stores?q=${q}&page=${page}&size=${String(size)}`,
    );
    return data;
};

const getStoreListByCoords = async (
    latitude: number | null,
    longitude: number | null,
    distance: number | null,
) => {
    return await instance()
        .get(
            `v1/stores/nearby?latitude=${latitude}&longitude=${longitude}&distance=${distance}`,
        )
        .then((res) => res.data)
        .catch((e) => console.log(e));
};

export { getStoreList, getStoreListByCoords };
