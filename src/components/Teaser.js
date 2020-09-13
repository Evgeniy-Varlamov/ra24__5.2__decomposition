/**
 * Компонент формирует рекламный блок
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function Teaser(props) {
  const {
    href,
    title,
    text,
  } = props;

  return (
    <>
      <a href={href}>
        <h2>{title}</h2>
      </a>
      <span>{text}</span>
    </>
  );
}

Teaser.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
