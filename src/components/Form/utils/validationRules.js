export const mustBeFilled = {
  text: 'Field must be filled', // 'Text field must be filled',
  regexp: new RegExp('^.+$', 'gm'),
};

export const mustBeNumber = {
  text: 'Must be number', // 'Must be number',
  regexp: new RegExp('^[0-9]+$', 'g'),
};

export const mustBeEmail = {
  text: 'Field must be url', // 'Field must be url',
  regexp: new RegExp(
    // prettier-ignore
    // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'gm',
  ),
};
