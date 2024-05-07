import dayjs from 'dayjs';

export class ThermistorChainDataItem {
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
    time: dayjs.Dayjs;

    objectId: string;

    sensorType: string;

    status: string;

    criticalTemperature: string;

    averageTemperature : string;

    data: Map<string, ThermistorChainDataItem>;

    constructor(target: any) {
        this.time = dayjs(target.time);
        this.sensorType = target.sensorType;
        this.status = target.status;
        this.criticalTemperature = target.criticalTemperature;
        this.averageTemperature = target.averageTemperature;
        this.objectId = target.objectId;

        this.data = new Map(Object.keys(target.data).map(it => {
            return[it, new ThermistorChainDataItem(it, target.data[it].value, target.data[it].isValid)]
        }))
    }
}