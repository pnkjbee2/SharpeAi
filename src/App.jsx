import DataPage from "./components/DataPage"
import HomePage from "./components/Home"
import OnTransactionPage from "./components/OnTransactionPage"
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
 

  return (
   <>
   <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data_page" element={<DataPage />} />
        <Route path="/on_transaction" element={<OnTransactionPage />} />
      </Routes>
   </Router>
     
   </>
  )
}

export default App
