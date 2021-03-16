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
                          <option key={option.district_id} value={option.district_id}>
                              {option.district_name}
                          </option>
                      ))
                    : null}
            </select>
        </div>
    );
};

export default Select;