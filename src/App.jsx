import { Post } from './Post';
import { Header } from './components/Header';

import './global.css'

export function App() {

  return (
    <div>
      <Header/>
      <Post 
        author="Manoel Prado"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo pariatur repellat delectus quam tempora adipisci, expedita hic! Ex maiores beatae provident, eaque molestiae cumque nobis unde fuga aliquid tempore eos!"
      />
    </div>
  )
}
