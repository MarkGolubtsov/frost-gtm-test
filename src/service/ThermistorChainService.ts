import {ThermistorChain} from 'model/ThermistorChain.ts';

const data = import('./data/termo_response.json');

/**
 * @description Сервис для взаимодействия с данными термокос.
 */
export class ThermistorChainService {

    /**
     * @description Получить все термокосы.
     */
    getAll = async (): Promise<ThermistorChain[]> => {
        return data.then(response => response.data.map(item => new ThermistorChain(item)));
    }
}