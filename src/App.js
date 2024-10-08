import { useDispatch } from 'react-redux';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import { reset } from './store';
import './style.css';

function App() {
    const dispatch = useDispatch();
    const handleResetClick = () => {
        //
        dispatch(reset());
    };

    return (
        <div>
            <button onClick={() => handleResetClick()} className="button is-danger">
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
