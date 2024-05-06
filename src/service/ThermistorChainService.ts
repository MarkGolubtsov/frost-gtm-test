import {ThermistorChain} from 'model/ThermistorChain.ts';

const data = import('./data/termo_response.json');

export class ThermistorChainService {
    getAll = async (): Promise<ThermistorChain[]> => {
        return data.then(response => response.data.map(item => new ThermistorChain(item)));
    }
}