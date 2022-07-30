import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Blog from './routes/Blog'
import Contactus from './routes/Contactus'
import Foil from './routes/Foil'
import Layout from './routes/Layout'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Layout/>}>
  <Route index element={<Foil/>}/>
  <Route path='blog' element={<Blog/>}/>
  <Route path='contactus' element={<Contactus/>}/>

</Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App