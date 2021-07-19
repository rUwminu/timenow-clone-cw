import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './App.css'
import './styles.css'

import MainPage1 from './components/cw1/Pages/MainPage'
import MainPage2 from './components/cw2/Pages/MainPage'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <MainPage2 />
      </div>
    </DndProvider>
  )
}

export default App
