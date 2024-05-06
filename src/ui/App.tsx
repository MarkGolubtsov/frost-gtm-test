import {ThermistorChainService} from 'service/ThermistorChainService.ts';
import {useStore} from 'store/useStore.ts';


export function App() {
    const [data] = useStore(new ThermistorChainService());

    return (
       <div>
           {
               data.map(it => it.averageTemperature)
           }
       </div>
    )
}
