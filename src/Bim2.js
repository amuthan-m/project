// BMICalculator.js

import React, { useState } from 'react';
import './Bim1.css'; // Import your stylesheet
import { useNavigate } from 'react-router-dom';
const BMICalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(''); // 'm' for male, 'f' for female
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const nav = useNavigate();
  const home = () => {
    nav('/');
  }

  const validateForm = () => {
    // Your form validation logic here
    // Example: Ensure all fields are filled before submission
    if (age && gender && height && weight) {
      // Perform further actions or calculations here
      const heightInMeters = height / 100; // Convert height to meters
      const bmi = weight / (heightInMeters * heightInMeters);
  
      // Display BMI
      let  result= '';
      if(bmi<18.5){
        result = 'Underweight';
         }else if(18.5<=bmi&&bmi<=24.9){
        result = 'Healthy';
         }else if(25<=bmi&&bmi<=29.9){
        result = 'Overweight';
         }else if(30<=bmi&&bmi<=34.9){
        result = 'Obese';
         }else if(35<=bmi){
        result = 'Extremely 2`obese';
         }
      
    
      alert(`You are :  ${result}`);
    } else {
      alert('Please fill in all fields!');
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.id);
  };

  return (
    <div>
      <h3 className='st'>
        <b className='bold'>B</b>ody <b className='bold'>M</b>ass <b className='bold'>I</b>ndex Calculator
      </h3>
      <form className="form" id="form" onSubmit={validateForm}>
        <div className="row-one">
          <input
            type="text"
            className="text-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            autoComplete="off"
            required
          />
          <p className="text">Age</p>
          <label className="container">
            <input
              type="radio"
              name="radio"
              id="f"
              checked={gender === 'f'}
              onChange={handleGenderChange}
            />
            <p className="text">Female</p>
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <input
              type="radio"
              name="radio"
              id="m"
              checked={gender === 'm'}
              onChange={handleGenderChange}
            />
            <p className="text">Male</p>
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="row-two">
          <input
            type="text"
            className="text-input"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            autoComplete="off"
            required
          />
          <p className="text">Height (cm)</p>
          <input
            type="text"
            className="text-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            autoComplete="off"
            required
          />
          <p className="text">Weight (kg)</p>
        </div>
        <button type="submit" id="submit">Submit</button>
        <a className='left' onClick={home}>Go to home</a>
      </form>
    </div>
  );
};

export default BMICalculator;
