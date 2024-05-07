import {ThermistorChainDataItem} from 'model/ThermistorChain.ts';
import {Typography} from 'antd';

interface ThermistorChainDataItemViewProps {
    /**
     * @description Значение по глубине.
     */
    item?: ThermistorChainDataItem;
}

/**
 * @description Отображения значений по глубине для термокосы.
 */
export const ThermistorChainDataItemView = (props: ThermistorChainDataItemViewProps) => {
    const {item} = props;

    if (!item) {
        return null;
    }

    const value = item.value.toFixed(3);
    const type = item.isValid  ? undefined : 'danger';

    return (
        <Typography.Text type={type}>
            {value}
        </Typography.Text>
    )
}