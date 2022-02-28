import Home from './Home';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
      <Router>
        <div>
          <>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} status={404}/>
            </Routes>
          </>
        </div>
      </Router>
    )
    
  }
  
  export default App;