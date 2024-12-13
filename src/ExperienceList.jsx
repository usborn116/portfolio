/* eslint-disable react/prop-types */
import { Experience } from "./Experience"

export const ExperienceList = () => {

    return (
      <div className='section'>
        <h1 id='experience'>Experience</h1>
        <h2>Planning Center</h2>
          <Experience position='Full Stack Developer' time='Oct 2024 - Present' location='Carlsbad, CA (Remote)'
          description={['Write and maintain code in a codebase using a Ruby on Rails backend and a (mostly) React.js frontend',
          'Collaborate with other developers, product managers, and designers to create new features and improve existing ones',]}
          />
          <Experience position='Product Specialist' time='Aug 2023 - Oct 2024' location='Carlsbad, CA (Remote)'
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
    )
}