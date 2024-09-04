import React from 'react';
import cl from "./select.module.css"

const Select = ({ value, onChange, options, defaultValue }) => {
    return (
        <select
            className={cl.main}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="">{defaultValue}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;