import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
export default function App() {
const nav = useNavigate();

const loginPage = () => {
    nav('/login')
}
const BmI = () => {
    nav('/Bim2')
}
const time = () => {
    nav('/st')
}
  return (
    <div>
    <header>
    <nav>
    <ul className="menu">
    <li><a href="#">HOME</a></li>
    <li><a onClick={BmI}>BMI</a></li>
    <li><a onClick={time}>WORKOUTS</a></li>
    <li><button className="login-btn" onClick={loginPage}>Login</button></li>
    </ul>
            </nav>
        </header>
    
        <main>
            <section className="hero">
                <h1> BURNFIT </h1>
                <p>PUSH YOUR LIMITS</p>
            </section>
    
            <section className="content">
                <h2>INTRODUCTION</h2>
                <p>FITNESS IS A CRUCIAL ASPECT OF A HEALTHY LIFESTYLE. IT INVOLVES PHYSICAL ACTIVITIES, PROPER NUTRITION, AND ADEQUATE REST TO MAINTAIN OVERALL WELL-BEING

                </p>
    
                <h2>DOING THE EXCERCISE</h2>
                <p>CONSISTENCY AND PROPER FORM ARE KEY TO EFFECTIVE WORKOUTS. ENSURE YOU PERFORM EXERCISES CORRECTLY AND REGULARLY TO SEE PROGRESS AND AVOID INJURIES

                </p>
    
                <h2>SQUATS</h2>
                <p>SQUATS ARE A COMPOUND EXERCISE THAT TARGETS MULTIPLE MUSCLE GROUPS, INCLUDING THE QUADRICEPS, HAMSTRINGS, AND GLUTES. THEY HELP BUILD LOWER BODY STRENGTH AND IMPROVE FLEXIBILITY.
                </p>
                <p>UNDERWEIGHT : 100</p>
                <p>OVERWEIGHT  : 50</p>
                <p>HEALTHY     : 100</p>
                
                <h2>LUNGES</h2>
                <p>LUNGES ARE EFFECTIVE FOR DEVELOPING LEG STRENGTH AND STABILITY. THEY WORK VARIOUS MUSCLES IN THE LEGS AND CAN BE DONE IN DIFFERENT VARIATIONS TO CHALLENGE DIFFERENT MUSCLE GROUPS.
                
                </p>
                <p>UNDERWEIGHT : 50</p>
                <p>OVERWEIGHT  : 25</p>
                <p>HEALTHY     : 50</p>
                
                <h2>RUNNING</h2>
                <p>RUNNING IS A POPULAR CARDIOVASCULAR EXERCISE THAT IMPROVES ENDURANCE, BURNS CALORIES, AND BOOSTS OVERALL FITNESS. IT CAN BE DONE OUTDOORS OR ON A TREADMILL
                
                </p>
                <p>UNDERWEIGHT : 30min</p>
                <p>OVERWEIGHT  : 30min</p>
                <p>HEALTHY     : 30min</p>
                
                <h2>PLANKS</h2>
                <p>PLANKS ARE A GREAT CORE-STRENGTHENING EXERCISE. THEY ENGAGE THE ENTIRE CORE AND HELP IMPROVE POSTURE AND STABILITY
                
                </p>
                <p>UNDERWEIGHT : 3set-30sec</p>
                <p>OVERWEIGHT  : 4set-1min</p>
                <p>HEALTHY     : 4set-1min</p>
            </section>
        </main>
    
        <footer>
            <p> 2023 Fitness Web App</p>
        </footer>    
    </div>
  )
}
