const DEEPS_COUNT = 60;
const DELTA = 0.5;

/**
 * @description Генерация возможных глубин.
 */
export const getDeeps = (): number[] => {
    const result: number[] = [];

    let acc = 0;
    for (let i = 0; i < DEEPS_COUNT; i++) {
        result.push(acc);
        acc = acc + DELTA;
    }

    return result;
}