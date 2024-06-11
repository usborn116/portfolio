/* eslint-disable react/prop-types */
import { Education } from "./Education"

export const EducationList = () => {

    return (
      <div className='section'>
        <h1 id="education">Education</h1>
        <Education school='Codecademy' years='June 2024' degree='Javascript Technical Interview Skill Path' />
        <Education school='Codecademy' years='May 2024' degree='Full-Stack Engineer Career Path' />
        <Education school='Codecademy' years='May 2024' degree='Analyze Data with SQL Skill Path' />
        <Education school='Codecademy' years='May 2024' degree='Authentication on Ruby on Rails Course' />
        <Education school='Codecademy' years='May 2024' degree='Learn Ruby on Rails Course' />
        <Education school='Learnquest' years='May 2023' degree='Scrum Master Certification'/>
        <Education school='Coursera' years='December 2022' degree='Google Data Analytics Certificate'/>
        <Education school='The Odin Project' years='November 2022' degree='HTML, CSS, Javascript, Ruby, Ruby On Rails Tracks'/>
        <Education school='Coursera' years='October 2021' degree='Google Project Management Certificate'/>
        <Education school='Coursera' years='July 2021' degree='Data Science Math Skills'/>
        <Education school='University of Oregon' years='2015-2019' 
          degree='Human Physiology, Applied Economics, Business, and Society' />
      </div>
    )
}