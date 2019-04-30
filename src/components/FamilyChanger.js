import React from 'react';

const FamilyChanger = (props) => (
  <select className="dropDownContainer" onChange={(e) => props.update(e.target.value)} disabled={props.allowEdit ===false}>
    <option value="monospace"> Monospace </option>
    <option value="arial"> Arial </option>
    <option value="courier"> Courier </option>
  </select>
)
export default FamilyChanger  

