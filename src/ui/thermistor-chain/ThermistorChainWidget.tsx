import {useStore} from 'store/useStore.ts';
import {ThermistorChainService} from 'service/ThermistorChainService.ts';
import {DatePicker, Table} from 'antd';
import {ThermistorChain} from 'model/ThermistorChain.ts';
import {ThermistorChainTimeView} from 'ui/thermistor-chain/ThermistorChainTimeView.tsx';
import {getDeeps} from 'ui/thermistor-chain/getDeeps.ts';
import {ThermistorChainDataItemView} from 'ui/thermistor-chain/ThermistorChainDataItemView.tsx';
import dayjs from 'dayjs';
import {useMemo, useState} from 'react';

const {Column, ColumnGroup} = Table;

const {RangePicker} = DatePicker;

type RangeValue = [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;

/**
 * @description Возможные глубины. Нужны константы, т к у некоторых термокос содержится информация по разным глубинам.
 */
const deeps = getDeeps().map(String);

/**
 * Отображение данных "Термокос".
 */
export function ThermistorChainWidget() {
    const [data, isLoaded] = useStore(new ThermistorChainService());

    const [range, setRange] = useState<RangeValue>(null);

    const filteredData = useMemo(() => {
        if (!range) {
            return data;
        }

        const [start, end] = range;

        return data.filter(it => it.time.isAfter(start) && it.time.isBefore(end))
    }, [range, data]);

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
            dataSource={filteredData}
            rowKey={(r) => r.time.toString()}>
            <Column<ThermistorChain>
                width={175}
                fixed='left'
                key='Дата'
                title='Дата'
                sorter={(a, b) => a.time.toDate().getTime() - b.time.toDate().getTime()}
                filterDropdown={() => <RangePicker value={range} onChange={setRange}  showTime/>}
                render={(it: ThermistorChain) => <ThermistorChainTimeView time={it.time}/>}/>

            <Column
                width={80}
                fixed='left'
                key='Te'
                title='Te'
                render={(it: ThermistorChain) => Number(it.averageTemperature).toFixed(3)}/>

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