export const hoursArray = Array(13)
  .fill(new Date(new Date("0")))
  .map((date, index) => new Date(new Date(date).setHours(8 + index)))
  .map((result) =>
    result.toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })
  );
