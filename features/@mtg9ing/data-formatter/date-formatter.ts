function formatDate(date: string, format: string = "YYYY-MM-DD") {
  const dateObj: Date = new Date(date);

  // if (isNaN(dateObj)) {
  //   throw new Error("Invalid date");
  // }

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");

  switch (format) {
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    default:
      throw new Error("Unsupported format");
  }
}
