import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export enum DateFormats {
  /// Example:
  ///
  /// 27/10/1984
  ddMMyyyy,

  /// Example:
  ///
  /// 27/10
  ddMM,

  /// Example:
  ///
  /// 27 Out 1984
  dd_MONTH_yyyy,

  /// Example:
  ///
  /// 27/10/1984 às 17:30
  ddMMyyyy_with_HHmm,

  /// Example:
  ///
  /// 17:30
  HHmm
}

export default class DatesFormatter {
  static format(date: Date, formatOption: DateFormats): string {
    const now = new Date();
    let formattedDate = '';
    switch (formatOption) {
      case DateFormats.HHmm:
        formattedDate = format(date, 'HH:mm', { locale: ptBR });
        break;
      case DateFormats.ddMM:
        formattedDate = format(date, 'dd/MM', { locale: ptBR });
        break;
      case DateFormats.ddMMyyyy:
        formattedDate = format(date, 'dd/MM/yyyy', { locale: ptBR });
        break;
      case DateFormats.dd_MONTH_yyyy:
        if (now.getMonth() == date.getMonth() && now.getFullYear() == date.getFullYear()) {
          if (now.getDay() == date.getDay()) return 'Hoje';
          if (now.getDay() == date.getDay() + 1) return 'Ontem';
        }
        formattedDate = format(date, 'd MMM yyyy', { locale: ptBR });
        break;
      case DateFormats.ddMMyyyy_with_HHmm:
        formattedDate = DatesFormatter.format(date, DateFormats.ddMMyyyy);
        formattedDate = formattedDate + ' às ' + DatesFormatter.format(date, DateFormats.HHmm);
        break;
      default:
        formattedDate = 'Formato de data inválido';
        break;
    }
    return formattedDate;
  }
}
