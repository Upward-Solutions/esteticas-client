/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

const SHORT_DATE = (date) => {
  let newDate;
  moment(date).isValid()
    ? (newDate = moment(date).format('MM/DD/YYYY'))
    : (newDate = 'Invalid date');
  return newDate;
};

const SHORT_CURRENT_DATE = () => moment(new Date()).format('MM/DD/YYYY');

const FULL_DATE = (date) => {
  let newDate;
  moment(date).isValid()
    ? (newDate = moment(date).format('MM/DD/YYYY LT'))
    : (newDate = 'Invalid date');
  return newDate;
};

const FULL_CURRENT_DATE = () => moment(new Date()).format('MM/DD/YYYY LT');

export default {
  SHORT_DATE,
  SHORT_CURRENT_DATE,
  FULL_DATE,
  FULL_CURRENT_DATE,
};
