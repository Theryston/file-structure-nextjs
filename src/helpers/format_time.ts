/**
 * ham nay dung de format mili giay thanh dinh dang ngay thang
 * @param ms
 */
export function format_time(ms: number) {
  const date = new Date(ms);
  return (
    // date.getHours() +
    // ":" +
    // date.getMinutes() +
    // " " +
    // date.getDay() +
    // "/" +
    // date.getMonth()
    `${date.getHours()}:${date.getMinutes()} ${date.getDay()}/${date.getMonth()}`
  );
}
