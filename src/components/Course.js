/**
 * Компонент показывает курсы валют
 */
import React from 'react';

export default function Course() {
  return (
    <>
      <a href='#0'>USD</a>
      <span className='course-value'>75,05</span>
      <span className='course-change'>−0,20</span>
      <a href='#0'>EUR</a>
      <span className='course-value'>88,85</span>
      <span className='course-change'>−0,03</span>
      <a href='#0'>Нефть</a>
      <span className='course-value'>39,99</span>
      <span className='course-change'>+0,35%</span>
    </>
  );
}