import { Header } from './Header'
import './styles/App.css'
import { Education } from './Education'
import './styles/Sections.css'
import { Experience } from './Experience'
import { Skills } from './Skills'
import { Project } from './Projects'
import { Navbar } from './Navbar'
import { Navmobile } from './Navmobile'

function App() {

  return (
    <div className='page' id='top'>
      <Navbar />
      <Navmobile />
      <Header />
      <div className="section">
        <h1 id='projects'>Projects</h1>
        <div className='list-grid'>
          <Project name='Tally' link='https://github.com/usborn116/tally' lang={['Ruby', 'Rails', 'React' ]}
          description='This app lets you record scores for board game sessions and view your history of sessions for each game'/>
          <Project name='Bread' link='https://github.com/usborn116/bread_app/tree/react-experiment' lang={['Ruby', 'Rails', 'React' ]} 
          description="A simple personal finance app to track your spending and balances, integrated with Plaid's API"/>
          <Project name='Ruby ESPN Fantasy Library' link='https://github.com/usborn116/ruby_espn_fantasy_library' lang={['Ruby']} 
          description="A ruby gem that lets you interface with ESPN's undocumented Fantasy Basketball API"/>
          <Project name='ESPN NBA Trade Helper' link='https://github.com/usborn116/espn-nba-trade-helper' lang={['Python' ]}
          description="A small Python app that lets you analyze a trade between two fantasy teams in order to make informed decisions."/>
          <Project name='Portfolio' link='https://github.com/usborn116/portfolio' lang={['Javascript', 'React' ]}
          description="The repository for the portfolio site you're viewing!"/>
          <Project name='Workout Generator' link='https://github.com/usborn116/workout' lang={['Javascript', 'React' ]}
          description="A simple workout generator"/>
          <Project name='Funds' link='https://github.com/usborn116/funds' lang={['Ruby', 'Rails', 'React' ]} 
          description="An app to keep track of your savings goals"/>
          <Project name='Warranty' link='https://github.com/usborn116/warranty' lang={['Ruby', 'Rails']} 
          description="This application allows you to organize and track your warranties."/>
          <Project name='JS-Calculator' link='https://github.com/usborn116/JS-calculator' lang={['Javascript']} 
          description="A simple Javascript Calculator"/>
          <Project name='JS-etchASketch' link='https://github.com/usborn116/JS-etchASketch' lang={['Javascript']} 
          description="A simple program where you can draw on a grid of squares"/>
          <Project name='Cyclistic: A Data Analysis Case Study' link='https://github.com/usborn116/cyclistic_data_analysis' lang={['R']} 
          description="A case study analysis of bike ride data using R"/>
        </div>
      </div>
      <div className="section">
        <h1 id='skills'>Skills + Knowledge</h1>
        <div className='list-grid'>
          <Skills type='Coding' names={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Ruby', 'Ruby on Rails',
          'React', 'Vite', 'SQL', 'R', 'Command Line/Terminal', 'Git', 'Github', 'Browser DevTools', 'Visual Studio Code']}/>
          <Skills type='Software' names={['Windows', 'Mac', 'iOS', 'Tableau', 'Fly.io', 'Netlify', 'Zendesk',
           'Trello', 'Asana', 'Zapier', 'Google Suite', 'Microsoft Suite', 'Datadog']}/>
           <Skills type='Other' names={['Customer service', 'Confidentiality', 'Project Management',
          'Agile & Scrum']}/>
        </div>
      </div>
      <div className='section'>
        <h1 id='experience'>Experience</h1>
        <h2>Planning Center</h2>
          <Experience position='Product Specialist' time='Aug 2023 - Present' location='Carlsbad, CA (Remote)'
          description={['Used technical knowledge of products to troubleshoot bugs, train other agents on new product features, process feature requests, and optimize product use for specific customer situations', 
          'Coordinated tasks involving developers, documentarians, and product managers and cultivated harmony across multiple teams throughout project progress']}
          />
          <Experience position='Product Documentarian' time='Dec 2021 - Aug 2023' location='Carlsbad, CA (Remote)'
          description={['Created and managed documentation for our products to educate customers']}/>
          <Experience position='Technical Customer Experience Agent' time='Jan 2020 - Present' location='Carlsbad, CA (Remote)'
          description={['Provided technical support and relayed complex information to more than 50-80 customers daily',
          'Collaborated with Training, Product, and Leadership teams to solve software issues, advocate for users, create customer content, and advocate for departmental improvement',
          'Utilized developer knowledge to help clients troubleshoot issues when using our product API']}/>
        <h2>Center for Dermatology and Laser Surgery</h2>
          <Experience position='Medical Assistant, Photodynamic Therapy Technician' time='Aug 2019 - Dec 2019' location='Portland, OR'
          description={['Communicated confidential/complex medical data  with patients, pharmacies, and medical offices',
          'Collaborated with physicians to perform patient procedures and document patient visits']}/>
        <h2>Gospel Community Church</h2>
          <Experience position='Operations Director' time='Feb 2019 - Aug 2019' location='Eugene, OR'
          description={['Restructured the volunteer management process by implementing a new system',
          'Managed volunteer team leaders and provided requested resources for equipping and preparing']}/>
        <h2>University of Oregon</h2>
          <Experience position='Clerical Assistant' time='Jan 2018 - Aug 2019' location='Eugene, OR'
          description={['Managed confidential document tracking and administrative projects for university executives',
          'Assisted on a search committee reviewing 50+ applications and hiring 3 executive assistants']}/>
      </div>
      <div className='section'>
        <h1 id="education">Education</h1>
        <Education school='Learnquest' years='May 2023' degree='Scrum Master Certification'/>
        <Education school='Coursera' years='December 2022' degree='Google Data Analytics Certificate'/>
        <Education school='The Odin Project' years='November 2022' degree='HTML, CSS, Javascript, Ruby, Ruby On Rails Tracks'/>
        <Education school='Coursera' years='October 2021' degree='Google Project Management Certificate'/>
        <Education school='Coursera' years='July 2021' degree='Data Science Math Skills'/>
        <Education school='University of Oregon' years='2015-2019' 
          degree='Human Physiology, Applied Economics, Business, and Society' />
      </div>
    </div>
  )
}

export default App
