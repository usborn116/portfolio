import { Header } from './Header'
import './styles/App.css'
import './styles/Sections.css'
import { Navbar } from './Navbar'
import { Navmobile } from './Navmobile'
import { ProjectList } from './ProjectList'
import { SkillsList } from './SkillsList'
import { ExperienceList } from './ExperienceList'
import { EducationList } from './EducationList'

function App() {


  return (
    <div className='page' id='top'>
      <Navbar />
      <Navmobile />
      <Header />
      <ProjectList />
      <SkillsList />
      <ExperienceList />
      <EducationList />
    </div>
  )
}

export default App
