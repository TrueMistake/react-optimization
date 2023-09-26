import React from 'react';

const Select = ({sort, val}) => {
  const handlerChange = (event) => {
    sort(event)
  }

  return (
    <select onChange={e => handlerChange(e.target.value)} value={val}>
      <option value="asc">asc</option>
      <option value="desc">desc</option>
    </select>
  );
};

export default Select;