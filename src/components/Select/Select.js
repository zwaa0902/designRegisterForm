import React from "react";

const Select = ({ label, name, defaultValue, options, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <select name={name} defaultValue={defaultValue} onChange={onChange}>
                {options
                    ? options.map((option) => (
                          <option key={option.province_id} value={option.province_id}>
                              {option.province_name}
                          </option>
                      ))
                    : null}
                    
            </select>
        </div>
    );
};
 
export default Select;