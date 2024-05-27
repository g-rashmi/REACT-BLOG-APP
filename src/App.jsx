
import Login from './components/Login'
import Addblog from './components/Addblog' 
import Blogs from './components/Blogs' 
import Oneblog from './components/oneblog' 
import Navbar from './components/Navbar' 
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div> 
<Router> 
<Routes> 
<Route path="/" element={<Login/>} > 
</Route> 
<Route path="/blogs" element={<Blogs/>} > 
</Route>
<Route path="/addblogs" element={<Addblog/>} > 
</Route> 
<Route path="/oneblog" element={<Oneblog/>} > 
</Route>
</Routes></Router>
    </div>
  )
}

export default App
