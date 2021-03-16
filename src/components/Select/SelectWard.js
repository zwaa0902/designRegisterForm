import React from "react";

const Select = ({ label, name, defaultValue, options, onChange }) => {
const data1 = name + "_id";
const name1 = name + "_name";
console.log(data1);
console.log(name1);
    return (
        <div>
            <label>{label}</label>
            <select name={name} defaultValue={defaultValue} onChange={onChange}>
                {options
                    ? options.map((option) => (
                          <option key={option.ward_id} value={option.ward_id}>
                              {option.ward_name}
                          </option>
                      ))
                    : null}
            </select>
        </div>
    );
};

export default Select;