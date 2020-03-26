const formatTime = totalSeconds => {
  const totalSecondsInt = parseInt(totalSeconds, 10);
  const minutes = Math.floor(totalSecondsInt / 60);
  const seconds = totalSecondsInt - minutes * 60;
  let minutesStr = `0${minutes}`;
  let secondsStr = `0${seconds}`;
  minutesStr = minutesStr.substr(-2);
  secondsStr = secondsStr.substr(-2);
  return `${minutesStr}:${secondsStr}`;
};

export { formatTime };
