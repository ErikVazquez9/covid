import React from 'react';
import DayJS from 'react-dayjs';

export default function Pruebas() {
  const date = "2000-01-31";
  return (
    <>
       <DayJS format="MMMM D, YYYY">{date}</DayJS>
    </>
  );
}
