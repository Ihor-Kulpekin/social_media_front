import {BrowserRouter as Router} from 'react-router-dom';

import AppRouter from "./router/AppRouter";
import {GlobalStyle} from "./utils/globalStyles";

function App() {
    return (
        <Router>
            <GlobalStyle/>
            <AppRouter/>
        </Router>
    );
}

export default App;
