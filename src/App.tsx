import Cards from "./components/Cards/Cards"
import Hero from "./components/Hero/Hero"

function App() {

  return (
    <div className="main">
      <div className="container">
        <div className="main__wrapper">
         <Hero />
         <Cards />
        </div>
      </div>
    </div>
  )
}

export default App
