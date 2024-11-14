import './styles/App.scss'
import { auth } from '../firebase-config';

function App() {
  console.log(auth.config);
  return (
    <>
      <div>
        hello
      </div>
    </>
  )
}

export default App
