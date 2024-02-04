import logo from './logo.svg';
import './App.css';

function App() {
  document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.card').style.display = 'none';
  });

  return (
    <body>
      <div className="App">
        <div className="card">
          <span className="card__close-btn">&times;</span>
          <h2 className="card__title">Organizer Card</h2>
          <p className="card__content">
            This is a demo organizer card. You can use it to organize your tasks
            and notes.
          </p>
          <div className="card__footer">
            <a href="#" className="card__button">
              Edit
            </a>
            <a href="#" className="card__button">
              Delete
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
