import {useStore} from 'store/useStore.ts';
import {ThermistorChainService} from 'service/ThermistorChainService.ts';
import {Table} from 'antd';
import {ThermistorChain} from 'model/ThermistorChain.ts';
import {ThermistorChainTimeView} from 'ui/thermistor-chain/ThermistorChainTimeView.tsx';
import {getDeeps} from 'ui/thermistor-chain/getDeeps.ts';
import {ThermistorChainDataItemView} from 'ui/thermistor-chain/ThermistorChainDataItemView.tsx';

const {Column, ColumnGroup} = Table;

const deeps = getDeeps().map(String);

export function ThermistorChainWidget() {
    const [data, isLoaded] = useStore(new ThermistorChainService());

    if (!isLoaded) {
        return null;
    }

    return (
        <Table<ThermistorChain>
            title={() => 'Термокоса'}
            tableLayout='fixed'
            size='middle'
            sticky={{
                offsetHeader: 0,
            }}
            scroll={{
                x: 2000,
                y: 500,
            }}
            pagination={false}
            bordered
            dataSource={data}
            rowKey={(r) => r.time.toString()}>

            <Column
                width={175}
                fixed='left'
                key='Дата'
                title='Дата'
                render={(it: ThermistorChain) => <ThermistorChainTimeView time={it.time}/>}/>
            <Column
                width={80}
                fixed='left'
                key='Te'
                title='Te'
                render={(it: ThermistorChain) => it.criticalTemperature}/>

            <ColumnGroup title="Глубина, м">
                {
                    deeps.map(d => (
                        <Column width={80} key={d} title={d}
                                render={(it: ThermistorChain) =>
                                    <ThermistorChainDataItemView
                                        item={it.data.get(d)}/>}/>))
                }
            </ColumnGroup>
        </Table>
    )
}