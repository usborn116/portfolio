/* eslint-disable react/prop-types */
import { Project } from './Projects'

export const ProjectList = () => {

    return (
      <div id='projects' className="section">
        <h1>Projects</h1>
        <div className='list-grid'>
          <Project name='PTO Calculator' link='https://github.com/usborn116/pto-calculator' lang={['TypeScript']}
          description='An app for my coworkers to see how possible vacation days impacts their vacation accrual!'/>
          <Project name='Tally' link='https://github.com/usborn116/tally' lang={['Ruby', 'Rails', 'React' ]}
          description='This app lets you record scores for board game sessions and view your history of sessions for each game'/>
          <Project name='Bread' link='https://github.com/usborn116/bread_app/tree/react-experiment' lang={['Ruby', 'Rails', 'React' ]} 
          description="A simple personal finance app to track your spending and balances, integrated with Plaid's API"/>
          <Project name='Ruby ESPN Fantasy Library' link='https://github.com/usborn116/ruby_espn_fantasy_library' lang={['Ruby']} 
          description="A ruby gem that lets you interface with ESPN's undocumented Fantasy Basketball API"/>
          <Project name='ESPN NBA Trade Helper' link='https://github.com/usborn116/espn-nba-trade-helper' lang={['Python' ]}
          description="A small Python app that lets you analyze a trade between two fantasy teams in order to make informed decisions."/>
          <Project name='Fantasy Trade Machine' link='https://github.com/usborn116/django_trade_app?tab=readme-ov-file' lang={['Python', 'Django' ]}
          description="The same type of app as above, but using the Django Framework!"/>
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
    )
}