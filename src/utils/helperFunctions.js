const formatValue = value => {
  if (value >= 1000) {
    return `${Math.round(value / 100) / 10} k`;
  }

  return value.toString();
};

export default formatValue;
