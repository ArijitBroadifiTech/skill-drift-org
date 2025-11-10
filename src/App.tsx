import './App.css'
import Odd from './modules/Odd'
import Test from './modules/Test'

function App() {
  return (
    <div className='w-full h-full min-h-screen bg-black'>
      <p className='text-red-300 bg-black'>Hi there</p>
      <Test />
      <Odd />
    </div>
  )
}

export default App
