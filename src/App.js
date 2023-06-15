import React, {useState} from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home';
import { AirContext } from './context/AirContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';



library.add(fas, fab)

function App() {
  const [count, setCount] = useState(0)

  return (
    <AirContext.Provider value={{count, setCount}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </AirContext.Provider>
  );
}

export default App;
