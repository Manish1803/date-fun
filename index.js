export default function getFormattedTimeStamp() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const current = new Date();
  const date = current.getDate();
  const month = months[current.getMonth()];
  const year = current.getFullYear();

  let hours = current.getHours();
  let minutes = current.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const datePart = `${date} ${month} ${year}`;
  const timePart = `${hours}:${minutes} ${ampm}`;

  return { datePart, timePart };
}
