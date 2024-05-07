import {formatDate} from 'util/formatDate.ts';
import {Dayjs} from 'dayjs';

interface ThermistorChainTimeViewProps {
    /**
     * Дата и время.
     */
    time: Dayjs;
}

/**
 * @description Отображение времени термокосы.
 */
export const ThermistorChainTimeView = (props: ThermistorChainTimeViewProps) => {
    return (
        <span>
            {formatDate(props.time)}
        </span>
    )
}