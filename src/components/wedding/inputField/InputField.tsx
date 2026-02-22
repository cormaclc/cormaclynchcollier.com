import React from 'react';
import type { FormId } from '../../../types/wedding';
import { ID_TO_DATA, RSVP_OPTIONS } from '../../../content/wedding/rsvp';

// styles
import './InputField.scss';
import '../../../styles/wedding/base.scss';

interface InputFieldProps {
  loading: boolean;
  id: FormId;
  inputType?: 'input' | 'textarea' | 'radio';
}

export const InputField = ({ loading, id , inputType = 'input'}: InputFieldProps) => {
  const { label, name } = ID_TO_DATA[id];

  const [selectedOption, setSelectedOption] = React.useState('');

  let inputComponent = <input 
    type="text" 
    id={id}
    name={name}
    required 
    disabled={loading}
  />;
  if (inputType === 'textarea') {
    inputComponent = <textarea
      id={id}
      name={name}
      required
      disabled={loading}
    />;
  } else if (inputType === 'radio') {
    inputComponent = <>
      {RSVP_OPTIONS.map((option, index) => (
        <div key={`${id}-${index}`} className='radio-option'>
          <input
            type="radio"
            name={name}
            value={option}
            required
            disabled={loading}
            id={`${id}-${index}`}
            checked={selectedOption === option}
            onChange={() => setSelectedOption(option)}
          />
          {option}
        </div>
      ))}
    </>;
  }

  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      { inputComponent }
    </div>
  );
};