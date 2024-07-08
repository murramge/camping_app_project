export const datefilter = day => {
  const itemday = new Date(day);
  const daysoption = {year: 'numeric', month: 'long', day: 'numeric'};
  const timeoption = {hour: 'numeric', minute: 'numeric'};
  const filterday = itemday.toLocaleDateString('ko-KR', daysoption);
  const filtertime = itemday.toLocaleTimeString('en-US', timeoption);
  const setday = `${filterday} ${filtertime}`;
  return setday;
};
