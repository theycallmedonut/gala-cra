export const mustBeFilled = {
  text: 'Поле должно быть заполнено', // 'Text field must be filled',
  regexp: new RegExp('^.+$', 'gm'),
};

export const mustBeNumber = {
  text: 'Строка должна быть числом', // 'Must be number',
  regexp: new RegExp('^[0-9]+$', 'g'),
};

export const mustBeHexColor = {
  text: 'Строка должна быть в HEX цвете', // 'Field must be in HEX color',
  regexp: new RegExp('^#([a-fA-F0-9]{3}){1,2}$', 'g'),
};

export const lengthMustBeMoreAndLess = (from, to) => ({
  text: `Длина текста должна быть больше ${from} и меньше ${to}`,
  regexp: new RegExp(`^(.{${from || 0},${to || 0}})$`, 'gm'),
});

export const mustBeMore320AndLess1024 = {
  text: 'Число должно быть больше 319 и меньше 1025', // 'Field must be more or equal 320 and less or equal 1024',
  regexp: new RegExp('^(3[2-8][0-9]|39[0-9]|[4-9][0-9]{2}|10[01][0-9]|102[0-4])$', 'gm'),
  param: 'length',
};

export const mustBeMore0AndLess6 = {
  text: 'Число должно быть больше 0 и меньше 6', // 'Field must be more 0 and less or equal 8',
  regexp: new RegExp('^[1-6]{0,}$', 'gm'),
};
export const mustBeMore0AndLess1 = {
  text: 'Число должно быть больше 0 и меньше 1', // 'Field must be more 0 and less or equal 8',
  regexp: new RegExp('0(\\.\\d+)?|1\\.0', 'gm'),
};

export const mustBeMore0AndLess320 = {
  text: 'Число должно быть больше 0 и меньше 320', // 'Field must be more 0 and less or equal 8',
  // [1-9]\d{3,}|9[6-9]\d|9[5-9]{2}
  regexp: new RegExp('^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|31[0-9])$', 'gm'),
};

export const mustBeMore0 = {
  text: 'Число должно быть больше 0', // 'Field must be more 0',
  regexp: new RegExp('^[1-9][0-9]{0,}$', 'gm'),
};

export const mustBeMore10 = {
  text: 'Число должно быть больше 10', // 'Field must be more 10',
  regexp: new RegExp('^[1-9][0-9]{1,}$', 'gm'),
};

export const mustBeAllowedSymbols = {
  text: 'Должны использоваться резрешенные символы(цифры, латиница)', // 'allowed symbols',
  regexp: new RegExp('^[a-zA-Z0-9]+$', 'gm'),
};

export const mustBeUrl = {
  text: 'Строка должна быть ссылкой на сайт', // 'Field must be url',
  regexp: new RegExp(
    // prettier-ignore
    '(^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:\\/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$)',
    'gm',
  ),
};
export const mustBeEmail = {
  text: 'Строка должна быть валидным email', // 'Field must be url',
  regexp: new RegExp(
    // prettier-ignore
    // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'gm',
  ),
};
export const mustBeImgLink = {
  text: 'Строка должна быть ссылкой картинку', // 'Field must be url',
  regexp: new RegExp(
    // prettier-ignore
    '([a-z\\-_0-9\\/\\:\\.]*\\.(jpg|jpeg|png|gif))',
    'g',
  ),
};

export const mustBeTagName = {
  text: 'Введите имя тега (h2-6 / span / div)',
  regexp: new RegExp('^(h[2-6])$|^(span|div)$', 'gm'),
};

export const sameValueAsField = (field) => ({
  text: 'Значения полей не совпадают',
  regexp: new RegExp('', 'gm'),
  confirmField: field,
});

export const mustBeTrue = {
  text: 'Проверка не пройдена',
  regexp: new RegExp('^(true|1)$', 'gm'),
};
