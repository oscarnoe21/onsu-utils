import { format } from "date-fns";

export class DateUtils {

    /**
     * Formatea un objeto Date según el formato proporcionado.
     * 
     * Directivas de formato:
     * - YYYY: Año completo
     * - MM: Mes (01-12)
     * - DD: Día del mes (01-31)
     * - HH: Horas (00-23)
     * - mm: Minutos (00-59)
     * - ss: Segundos (00-59)
     * 
     * @param date Objeto Date a formatear.
     * @param format Cadena de formato deseado.
     * @returns Fecha formateada como string según el formato.
     */
    static formatDate(date: Date, format: string): string {
        const replacements: { [key: string]: string } = {
            'YYYY': date.getFullYear().toString(),
            'MM': (date.getMonth() + 1).toString().padStart(2, '0'),
            'DD': date.getDate().toString().padStart(2, '0'),
            'HH': date.getHours().toString().padStart(2, '0'),
            'mm': date.getMinutes().toString().padStart(2, '0'),
            'ss': date.getSeconds().toString().padStart(2, '0'),
        };

        return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => replacements[match]);
    }

    /**
     * 
     * @param date  fecha a formatear
     * @param localeOptions  opciones de formateo
     * @returns  fecha formateada
     */
    static formatDateV2(date: Date, localeOptions: Intl.DateTimeFormatOptions): string {
        const formatter = new Intl.DateTimeFormat('en-US', localeOptions);
        return formatter.format(date);
    }

    /**
     * 
     * @param date fecha a formatear
     * @param formatString  formato de salida
     * @returns  fecha formateada
     */
    static formatDateV3(date: Date, formatString: string): string {
        return format(date, formatString);
    }

}
