import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout  from './Pages/Layout'
import Home from './Pages/Home'
import {ContextProvider} from './Context/Context'
import News from './Pages/News'
import Contact from './Pages/Contact'
import Ourteam from './Pages/Ourteam'
import About from './Pages/About'
import ProjectsPage from './Pages/ProjectsPage'
import Project from './Pages/Project'
import { BsArrowUpShort } from 'react-icons/bs'
import UnderConstruction from './Pages/UnderConstruction'
import CompletedProjects from './Pages/CompletedProjects'


function App() {

  return (
    <ContextProvider>
      <div className="App overflow-clip relative">
      
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/ourteam' element={<Ourteam/>}/>
                <Route path='/projectspage' element={<ProjectsPage/>}/>
                <Route path='/project/:name' element={<Project/>}/>
                <Route path='/underconstruction' element={<UnderConstruction/>}/>
                <Route path='/completedprojects' element={<CompletedProjects/>}/>

              </Route>
            </Routes>
        </BrowserRouter>
        <div className=" fixed w-fit right-2 bottom-0 ">
             <div className="relative">
                <div className=" sticky bottom-24 right-4 p-2 bg-amber-400   rounded-full flex items-center justify-center hover:bg-[#222121] transition-colors">
                  <BsArrowUpShort className='text-white text-5xl font-serif'/>
                </div>
             </div>
            </div>
      </div>
    </ContextProvider>
  )
}

export default App