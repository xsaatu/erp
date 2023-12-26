import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDayOfMonth = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());

    const calendar = [];
    let dayCounter = 1;

    for (let row = 0; row < 31; row++) {
      const week = [];

      for (let col = 0; col < 7; col++) {
        if ((row === 0 && col < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push(null);
        } else {
          week.push(dayCounter++);
        }

      }
      // if((col < firstDayOfMonth)) {

      //   week.push(dayCounter++);
      // }

      calendar.push(week);
    }

    return (
      <div className="flex overflow-x-auto justify-center">
        <table className=''>
          <thead> 
            <tr>
              <th>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</th>
            </tr>
          </thead>
          <tbody className='flex flex-nowrap gap-x-5'>
              {calendar.map((data, i) => {
                console.log(data[0]);
                return <tr className=''>
                  <td key={i} className='flex'>{data[0]}</td>
                  <td>hallo</td>
                </tr>
              })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2" onClick={prevMonth}>
        Previous Month
      </button>
      <button className="bg-blue-500 text-white px-4 py-2" onClick={nextMonth}>
        Next Month
      </button>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
