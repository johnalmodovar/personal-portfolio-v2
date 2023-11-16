import Navbar from '../navbar/Navbar'
import Main from '../main/Main'
import About from '../about/About'
import SkillsList from '../skills/SkillsList'
import ProjectsList from '../projects/ProjectsList'
import ExperienceList from '../experience/ExperienceList'

function App() {

  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <SkillsList />
      <ProjectsList />
      <ExperienceList />
    </div>
  )
}

export default App
