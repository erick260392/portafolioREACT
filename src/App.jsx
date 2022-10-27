import './App.css'
import NavBar from './componets/NavBar'
import Content from './componets/Content'
import About from './componets/About'
import Services from './componets/Services'
import Contact from './componets/Contact'
import Footer from './componets/Footer'
import Skills from './componets/Skills'
import Projects from './componets/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {


  return (
    <div className="App">

     <NavBar></NavBar>
     <Content></Content>
     <About/>
     <Services/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
     
    </div>
  )
}

export default App
