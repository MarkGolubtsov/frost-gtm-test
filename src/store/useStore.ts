import {useEffect, useState} from 'react';

interface DataService<T> {
    getAll: () => Promise<T[]>;
}

export function useStore<T>(service: DataService<T>): [T[], boolean] {
    const [data, setData] = useState<T[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        service.getAll().then(setData).finally(() => setIsLoaded(true));
    }, []);

    return [data, isLoaded];
}