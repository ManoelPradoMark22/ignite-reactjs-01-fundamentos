export function Post() {
  return <p>Post</p>
}

//Default Expots vs Named Exports

/*Default Exports
Pode mudar o nome para o componente na IMPORTAÇÃO!

function Post() {
  return <p>Post</p>
}

export default Post

// no arquivo , onde vai importar:
import Post from './Post';
*/

/*Default Exports
NÃO pode mudar o nome para o componente na IMPORTAÇÃO!

export function Post() {
  return <p>Post</p>
}

// no arquivo , onde vai importar:
import { Post } from './Post';
*/