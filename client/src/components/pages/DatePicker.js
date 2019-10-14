import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
const DateTime = () => {
  const [currentTime, setCurrentTime] = useState({
    date: 'test'
  });

  const { date } = setCurrentTime;

  const onChange = e => {
    setCurrentTime({ ...currentTime, date: date });
  };

  return (
    <>
      <DateTimePicker
        onChange={e => onChange(e)}
        value={date}
        className="dateSpacing"
      />
    </>
  );
};
export default DateTime;
