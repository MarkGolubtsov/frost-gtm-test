import {formatDate} from 'util/formatDate.ts';

interface ThermistorChainTimeViewProps {
    time: Date;
}

export const ThermistorChainTimeView = (props: ThermistorChainTimeViewProps) => {
    return (
        <span>
            {formatDate(props.time)}
        </span>
    )
}