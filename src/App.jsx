import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Manoel Prado"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo pariatur repellat delectus quam tempora adipisci, expedita hic! Ex maiores beatae provident, eaque molestiae cumque nobis unde fuga aliquid tempore eos!"
          />
          <Post 
            author="Anna Paula"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo pariatur repellat delectus quam tempora adipisci, expedita hic! Ex maiores beatae provident, eaque molestiae cumque nobis unde fuga aliquid tempore eos!"
          />
        </main>
      </div>
    </div>
  )
}
