import {ThermistorChainWidget} from 'ui/thermistor-chain/ThermistorChainWidget.tsx';
import { ConfigProvider } from 'antd';
import ru from 'antd/locale/ru_RU';

export function App() {
    return (
        <ConfigProvider locale={ru}>
            <div>
                <ThermistorChainWidget/>
            </div>
        </ConfigProvider>
    )
}
