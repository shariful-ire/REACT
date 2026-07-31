import NavBar from "./Component/NavBar";
import Header from './Component/Header';
import Footer from "./Component/Footer";
function App() {

 

  return (
    <div>


          <NavBar></NavBar>
          <h1 className="bg-amber-400 text-center text-5xl p-2 rounded-full">This is Header...</h1>
          <Header></Header>
          <Footer></Footer>
    </div>
  )
}

export default App