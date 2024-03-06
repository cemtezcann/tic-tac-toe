// App.jsx


import Game from './components/Game'; // Tic Tac Toe oyun bileşenini içe aktarın
import './style.css'; // Stil dosyasını içe aktarın
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap stil dosyasını içe aktarın

function App() {
    return (
        <div className="App">
            <h1>Tic Tac Toe</h1>
            <Game /> {/* Tic Tac Toe oyun bileşenini çağırın */}
        </div>
    );
}

export default App;
