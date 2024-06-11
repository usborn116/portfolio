/* eslint-disable react/prop-types */
import { Skills } from "./Skills"

export const SkillsList = () => {

    return (
      <div id="skills" className="section">
        <h1 id='skills'>Skills + Knowledge</h1>
        <div className='list-grid'>
          <Skills type='Coding' names={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Django', 'Ruby', 'Ruby on Rails',
          'React', 'Vite', 'SQL', 'R', 'Command Line/Terminal', 'Git', 'Github', 'Browser DevTools', 'Visual Studio Code']}/>
          <Skills type='Software' names={['Windows', 'Mac', 'iOS', 'Tableau', 'Fly.io', 'Netlify', 'Zendesk',
           'Trello', 'Asana', 'Zapier', 'Google Suite', 'Microsoft Suite', 'Datadog']}/>
          <Skills type='Other' names={['Customer service', 'Confidentiality', 'Project Management',
          'Agile & Scrum']}/>
        </div>
      </div>
    )
}