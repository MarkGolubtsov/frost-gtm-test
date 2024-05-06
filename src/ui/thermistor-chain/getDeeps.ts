export const getDeeps = (): number[] => {
    const result: number[] = [];

    let acc = 0;
    for (let i = 0; i < 60; i++) {
        result.push(acc);
        acc = acc + 0.5
    }

    return result;
}