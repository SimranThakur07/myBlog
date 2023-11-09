import Banner from '../components/Card/Banner'
import Navbar from '../components/Header/Navbar'
import '../styles/Home.css'
import Maincontext from '../components/Maincontext'

const Home = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Banner/>
      <section>
       <Maincontext/>
      </section>
    </main>
    </>
  )
}

export default Home