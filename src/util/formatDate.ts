const formatter = Intl.DateTimeFormat('ru-RU', {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
});

export function formatDate(date: Date) {
    return formatter.format(date);
}