import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Task from './Components/Task/Task';
import Footer from './Components/Footer/Footer';

function App() {

  const [state, setState] = useState(JSON.parse(localStorage.getItem('toDo')) || [])

  return (
    <div>
      <Header />

      <div className='h-full overflow-y-auto'>
        <Task
          value='Hello'
        />
      </div>

      <Footer
        state={state}
        setState={setState}
      />
    </div>
  );
}

export default App;