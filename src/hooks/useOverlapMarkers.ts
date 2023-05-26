import { useEffect, useState } from "react";
import { IStores } from "../types/store";

const useOverlapMarkers = (markers: IStores) => {
    const [ovMarkers, setOvMarkers] = useState<Array<IStores>>([]);
    useEffect(() => {
        const findDuplicateLatLng = (rows: IStores) => {
            const map = new Map();
            const duplicateLatLngMap = new Map();

            rows.forEach((item) => {
                const key = `${item.latitude}:${item.longitude}`;
                if (map.has(key)) {
                    const existingDuplicates = duplicateLatLngMap.get(key); // 중복된 값 배열을 key로 가져옴
                    if (existingDuplicates) {
                        existingDuplicates.push(item); // 중복된 값 배열에 추가
                    } else {
                        duplicateLatLngMap.set(key, [map.get(key), item]); // 중복된 값 배열 생성 및 추가
                    }
                } else {
                    map.set(key, item);
                }
            });

            const duplicateLatLng = Array.from(duplicateLatLngMap.values());

            return duplicateLatLng;
        };
        setOvMarkers(findDuplicateLatLng(markers));
    }, [markers]);
    return ovMarkers;
};

export default useOverlapMarkers;
