import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './views/Home/Home.jsx'
import Login from './views/Login/Login'
import Register from './views/Register/Register'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import store from './store'

const persistor = persistStore(store);

const  App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<Register/>}/>  
      </Routes>
    </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;