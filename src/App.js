import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Task from './Components/Task/Task';
import Footer from './Components/Footer/Footer';

function App() {

  const [state, changeState] = useState(JSON.parse(localStorage.getItem('toDo')) || []);
  const [tache, setTache] = useState();

  function deleteCard(index) {
    const deleted = [...state];

    let aller = deleted.filter(i => deleted.indexOf(i) !== deleted.indexOf(deleted[index]));
    changeState(aller);
    localStorage.setItem('toDo', JSON.stringify(aller));
  }

  function edit(index) {
    const edit = [...state]
    setTache(edit[index].tache)

    

    // let edited = edit.filter(i => edit[i])
  }

  return (
    <div>
      <Header />

      <div className='h-full overflow-y-auto'>
        {
          state.map((todo, index) => (
            <Task
              tache = {todo.tache}
              key = {index}
              index = {index}

              edit = {edit}
              deleteCard = {deleteCard}
            />
          ))
        }
      </div>

      <Footer
        tache = {tache}
        setTache = {setTache}

        state = {state}
        changeState = {changeState}
      />
    </div>
  );
}

export default App;