import React from 'react';
import { Calendar, Badge } from 'antd';
import "../Style/Calendar.css";
import 'antd/dist/antd.css';
import { Empty } from 'antd-mobile'

function dateCellRender(value) {
  console.log(value);
  if (value.format('D') === '12') {
    console.log('day');
    return (
      <Badge status="warning" />
    )  
  } else {
    return (
      <>
      </>
    )
  }
}

function onSelected(data) {
  console.log(data);
}

const CalendarPage = () => {
  return (
    <>
      <Empty description='현재 준비 중입니다' />
      {/* <Calendar fullscreen={false} onSelect={onSelected} dateCellRender={dateCellRender} /> */}
    </>
  )
};

export default CalendarPage;
