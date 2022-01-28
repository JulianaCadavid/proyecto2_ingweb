import 'App.css';
import 'styles/styles.css';
import Navbar from 'components/Navbar';
import Right from 'components/Right';
import Left from 'components/Left';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Left />
      <Right />
    </div>
  );
}

export default App;
