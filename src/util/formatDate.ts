import {Dayjs} from 'dayjs';

/**
 * @description Конвертация даты в строку формата 'YYYY-MM-DD HH:mm:ss'.
 */
export function formatDate(date: Dayjs) {
    return date.format('YYYY-MM-DD HH:mm:ss');
}