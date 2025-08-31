import React, { useState } from 'react';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
}

const EditText: React.FC<EditTextProps> = ({
  placeholder = 'Enter text',
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  name,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type={type}
      name={name}
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      className={`
        w-full px-[26px] py-[10px] 
        bg-secondary 
        border border-secondary 
        rounded-[22px] 
        text-input font-inter text-base font-normal leading-5 
        placeholder:text-input placeholder:opacity-70
        focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent
        hover:border-accent transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    />
  );
};

export default EditText;