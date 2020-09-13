/**
 * Компонент формирует блоки (присваивает classname) в которые можно добавить содержимое
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function Block(props) {
  const { className } = props;

  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
