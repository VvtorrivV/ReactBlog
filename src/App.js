import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to Blog';
  const likes = 50;
  const person = {name: 'vimes', age: 30};
  const link='https://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/*Error - nie można przekazać całego obiektu
        <p>{person}</p>
        */}
        <p>{person.age}</p>
        <p>{'You can put any variable in brackets'}</p>
        <p>{[1,2,3,4,5]}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
