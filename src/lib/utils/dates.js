import { DateFormatter, getLocalTimeZone } from '@internationalized/date';

const df = new DateFormatter('es-ES', {
	dateStyle: 'medium'
});

/**
 * @param {import('bits-ui').DateRange | undefined} value
 * @param {import('@internationalized/date').DateValue | undefined} startValue
 * @return {string}
 * */
export function dateRangeValue(value, startValue) {
	if (value && value.start) {
		if (value.end) {
			return `${df.format(value.start.toDate(getLocalTimeZone()))} - ${df.format(value.end.toDate(getLocalTimeZone()))}`;
		} else {
			return df.format(value.start.toDate(getLocalTimeZone()));
		}
	} else if (startValue) {
		return df.format(startValue.toDate(getLocalTimeZone()));
	} else {
		return 'Selecciona una fecha';
	}
}

/**
 * @param {import('bits-ui').DateRange | undefined} dates
 * @return {string}
 * */
export function dateRangeToPrompt(dates) {
	if (dates && dates.start && dates.end) {
		const time_difference = Math.abs(
			dates.start.toDate(getLocalTimeZone()).getTime() -
				dates.end.toDate(getLocalTimeZone()).getTime()
		);
		const days_difference = Math.ceil(time_difference / (1000 * 3600 * 24));
		return `del ${df.format(dates.start.toDate(getLocalTimeZone()))} al ${df.format(dates.end.toDate(getLocalTimeZone()))} (${days_difference} días)`;
	}
	return '';
}
