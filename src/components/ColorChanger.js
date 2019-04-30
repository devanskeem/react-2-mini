import React from 'react';

const ColorChanger = (props) => (
  <select className="dropDownContainer" onChange={(e) => props.update(e.target.value)} disabled={props.allowEdit ===false}>
    <option value="black"> Black </option>
    <option value="blue"> Blue </option>
    <option value="green"> Green </option>
  </select>
)
export default ColorChanger