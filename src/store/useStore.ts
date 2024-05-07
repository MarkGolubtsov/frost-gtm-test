import {useEffect, useState} from 'react';

interface DataService<T> {
    /**
     * @description Получить все данные.
     */
    getAll: () => Promise<T[]>;
}

/**
 * @description Хук для получения и хранения данных. Инкапсулирована индикация загрузки.
 * @param {DataService} service - Сервис получения данных.
 * @returns [data: T, isLoaded: boolean] - data - данные, isLoaded - загружены ли данные.
 */
export function useStore<T>(service: DataService<T>): [T[], boolean] {
    const [data, setData] = useState<T[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        service.getAll().then(setData).finally(() => setIsLoaded(true));
    }, []);

    return [data, isLoaded];
}