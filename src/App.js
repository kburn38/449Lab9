import logo from './logo.svg';
import maxwell from './Maxwell.png';
import './App.css';

const books = [
    { id: 1, title: 'The Wings', published: 1936, isAvailable: false},
    { id: 2, title: 'Don Quixote', published: 1605, isAvailable: true},
    { id: 3, title: 'The Stranger', published: 1942, isAvailable: true},
    { id: 4, title: 'Hell Screen', published: 1918, isAvailable: true},
    { id: 5, title: 'Faust', published: 1790, isAvailable: true},
    { id: 6, title: 'Wuthering Heights', published: 1847, isAvailable: false},
    { id: 7, title: 'Moby Dick', published: 1851, isAvailable: false},
    { id: 8, title: 'Crime and Punishment', published: 1866, isAvailable: true},
    { id: 9, title: 'The Odyssey', published: 701, isAvailable: true},
    { id: 10, title: 'The Golden Bough', published: 1890, isAvailable: true},
    { id: 11, title: 'Dream of the Red Chamber', published: 1791, isAvailable: true},
    { id: 12, title: 'Demian', published: 1998, isAvailable: false}
];

function Bookshelf() {
    const bookList = books.map(book =>
        <li
            key={book.id}
            style={{
                color: book.isAvailable ? 'green' : 'red'
            }}
        >
            {book.title} - {book.published}
        </li>
    );
    return (
        <ul>{bookList}</ul>
    );
}

function RandomImage() {
    return (
        <>
            <h2>Say Hi to Maxwell</h2>
            <img alt="Maxwell" src={maxwell} />
        </>
    );
}

function MagicButton() {
    return (
        <>
            <h2>This is a magic button</h2>
            <button>Magic</button>
        </>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React learned
        </a>
        <Bookshelf />
        <MagicButton />
        <RandomImage />
      </header>
    </div>
  );
}

export default App;
