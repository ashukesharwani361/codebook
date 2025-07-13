import AllRoutes from './routes/AllRoutes';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './App.css'


function App() {

  return (
    <div className='dark:bg-dark'>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
