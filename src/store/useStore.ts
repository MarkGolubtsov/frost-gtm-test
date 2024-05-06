import {useEffect, useState} from 'react';

interface DataService<T> {
    getAll: () => Promise<T[]>;
}

export function useStore<T>(service: DataService<T>): [T[], boolean] {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        service.getAll().then(setData).finally(() => setLoading(false));
    }, []);

    return [data, loading];
}