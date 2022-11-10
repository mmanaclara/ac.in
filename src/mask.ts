export default class Mask {
    static custom = (text: string, mask: (string | RegExp)[]) => {
      const maskedText = [];
      let lastText = 0;
      let lastMask = 0;
  
      if (text) {
        while (
          lastText < text.length ||
          (text.length > mask.length && lastMask < mask.length)
        ) {
          const currentMask = mask[lastMask];
          if (typeof currentMask === 'string') {
            maskedText.push(currentMask);
  
            lastMask += 1;
          } else if (
            typeof text[lastText] === 'string' &&
            currentMask instanceof RegExp &&
            currentMask.test(text[lastText])
          ) {
            maskedText.push(text[lastText]);
  
            lastText += 1;
            lastMask += 1;
          } else {
            lastText += 1;
            lastMask += 1;
          }
        }
      }
  
      return maskedText.join('');
    };
  
    static numbers(text?: string) {
      return (text ? text.toString() : '').replace(/[^0-9]/g, '');
    }
  
    static thousandthNumber(number?: number) {
      return number ? number.toLocaleString('pt-BR') : 0;
    }
  
    static cpf(text?: string) {
      const cpfMask = [
        /[0-9]/g,
        /[0-9]/g,
        /[0-9]/g,
        '.',
        /[0-9]/g,
        /[0-9]/g,
        /[0-9]/g,
        '.',
        /[0-9]/g,
        /[0-9]/g,
        /[0-9]/g,
        '-',
        /[0-9]/g,
        /[0-9]/g,
      ];
  
      return Mask.custom(Mask.numbers(text?.substring(0, 14)), cpfMask);
    }
  
    static cep(text?: string) {
      const mask = [
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        '-',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
      ];
  
      return Mask.custom(Mask.numbers(text?.substring(0, 9)), mask);
    }
  
    static phone(text: string) {
      const isCellphone = text.length >= 15;
  
      let mask = [
        '(',
        /[0-9]/,
        /[0-9]/,
        ')',
        ' ',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        '-',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
      ];
  
      if (!isCellphone) {
        mask = [
          '(',
          /[0-9]/,
          /[0-9]/,
          ')',
          ' ',
          /[0-9]/,
          /[0-9]/,
          /[0-9]/,
          /[0-9]/,
          '-',
          /[0-9]/,
          /[0-9]/,
          /[0-9]/,
          /[0-9]/,
        ];
  
        return Mask.custom(Mask.numbers(text.substring(0, 14)), mask);
      } else {
        return Mask.custom(Mask.numbers(text.substring(0, 15)), mask);
      }
    }
  
    static cnpj(text: string) {
      const mask = [
        /[0-9]/,
        /[0-9]/,
        '.',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        '.',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        '/',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        '-',
        /[0-9]/,
        /[0-9]/,
      ];
  
      return Mask.custom(Mask.numbers(text), mask).substring(0, 18);
    }
  
    static date(date: string, showHour?: boolean) {
      const formatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
  
        ...(showHour && {
          hour: '2-digit',
          minute: '2-digit',
        }),
      }).format(new Date(date));
      return formatted;
    }
  
    static currency(value: number) {
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      }).format(value);
  
      return formatted;
    }
  }
  
  