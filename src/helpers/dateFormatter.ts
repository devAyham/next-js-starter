export const dateFormatter = (dateString: string, format?: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "short",
    timeStyle: "medium", // Include time component
  };
  return date.toLocaleString("en", options);
};
