import React, { useState, useEffect } from 'react';

const RadioComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Retrieve the state from localStorage when the component mounts
  useEffect(() => {
    const storedValue = localStorage.getItem('radioChecked');
    setIsChecked(storedValue === 'true');
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem('radioChecked');
    setIsChecked(storedValue === 'false');
  }, []);

  // Update the state and store it in localStorage when the radio button is clicked
  const handleRadioChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    localStorage.setItem('radioChecked', String(newValue));
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          checked={isChecked}
          onChange={handleRadioChange}
        />
        Radio Button
      </label>
    </div>
  );
};

export default RadioComponent;
