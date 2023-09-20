import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Task from './Components/Task/Task';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div>
      <Header />

      <div className='h-full overflow-y-auto'>
        <Task />
      </div>

      <Footer/>
    </div>
  );
}

export default App;