import React from 'react';
import{BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Header from './header/Header';
import HomePage from './homepage/HomePage';


function App() {
  return (
   <Router>
     <Header />
     <Routes >
       <Route path='/' element={<HomePage />} />
     </Routes>
   </Router>
  );
}

export default App;
