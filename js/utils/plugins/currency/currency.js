const USD = (value) =>
  currency(value, {
    symbol: "USD ",
    decimal: ",",
    separator: ".",
  }).format();

const ARS = (value) =>
  currency(value, {
    symbol: "ARS ",
    decimal: ",",
    separator: ".",
  }).format();

const IMPORT = (value) =>
  currency(value, {
    symbol: "",
    decimal: ",",
    separator: ".",
  }).format();

export default {
  USD,
  ARS,
  IMPORT,
};
