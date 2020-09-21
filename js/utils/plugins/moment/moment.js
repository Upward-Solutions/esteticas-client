const SHORT_DATE = (date) => {
  moment(date).isValid()
    ? (date = moment(date).format("MM/DD/YYYY"))
    : (date = "Invalid date");
  return date;
};

const SHORT_CURRENT_DATE = () => {
  return moment(new Date()).format("MM/DD/YYYY");
};

const FULL_DATE = (date) => {
  moment(date).isValid()
    ? (date = moment(date).format("MM/DD/YYYY LT"))
    : (date = "Invalid date");
  return date;
};

const FULL_CURRENT_DATE = () => {
  return moment(new Date()).format("MM/DD/YYYY LT");
};

export default {
  SHORT_DATE,
  SHORT_CURRENT_DATE,
  FULL_DATE,
  FULL_CURRENT_DATE,
};
