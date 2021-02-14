import {format} from 'date-fns';

export const formatValue = value => {
  if (value >= 1000) {
    return `${Math.round(value / 100) / 10}k`;
  }

  return value.toString();
};

export const toDate = value => {
  return format(new Date(value), 'dd.MM.yyyy');
};
