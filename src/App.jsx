import { Route, Routes } from 'react-router-dom'
import './App.css'

const Home = () => {
  return (
    <div className="App">
      <h1>Welcome to Bazaar</h1>
    </div>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;