export default function getFormattedDate(dateString) {
  return new Intl.DateTimeFormat("it-IT", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
