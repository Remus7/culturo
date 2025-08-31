import React, { useState } from 'react';

interface DropdownProps {
  placeholder?: string;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder = 'Select option',
  options = ['Option 1', 'Option 2', 'Option 3'],
  value,
  onChange,
  leftIcon,
  rightIcon = '/images/img_arrowdown.svg',
  disabled = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || placeholder);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full flex items-center justify-between gap-[6px] px-[30px] py-[10px] pl-[36px] bg-secondary border border-secondary rounded-[4px] text-light font-inter text-sm font-normal leading-[17px] text-left hover:bg-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div className="flex items-center gap-[6px]">
          {leftIcon && (
            <img 
              src={leftIcon} 
              alt="Left icon" 
              className="w-5 h-5 flex-shrink-0"
            />
          )}
          <span className="truncate">{selectedValue}</span>
        </div>
        {rightIcon && (
          <img 
            src={rightIcon} 
            alt="Dropdown arrow" 
            className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-secondary border border-secondary rounded-[4px] shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-[36px] py-[10px] text-left text-light font-inter text-sm font-normal leading-[17px] hover:bg-accent transition-colors duration-200 first:rounded-t-[4px] last:rounded-b-[4px]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;