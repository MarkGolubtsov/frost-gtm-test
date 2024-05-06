class ThermistorChainDataItem {
    key: string;
    value: number;
    isValid: boolean;

    constructor(key: string, value: number, isValid: boolean) {
        this.key = key;
        this.value = value;
        this.isValid = isValid;
    }
}

export class ThermistorChain {
    time: Date;

    sensorType: string;

    status: string;

    criticalTemperature: string;

    averageTemperature : string;

    data: ThermistorChainDataItem[];

    constructor(target: any) {
        this.time = new Date(target.time);
        this.sensorType = target.sensorType;
        this.status = target.status;
        this.criticalTemperature = target.criticalTemperature;
        this.averageTemperature = target.averageTemperature;

        this.data = Object.keys(target.data).map(it => {
            return new ThermistorChainDataItem(it, target.data[it].value, target.data[it].isValid)
        })
    }
}