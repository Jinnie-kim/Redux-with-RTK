import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import './style.css';

function App() {
    const handleReserClick = () => {
        //
    };

    return (
        <div>
            <button onClick={() => handleReserClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr />
            <MoviePlaylist />
            <hr />
            <SongPlaylist />
        </div>
    );
}

export default App;
