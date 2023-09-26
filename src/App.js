import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import AuthProvider from "./context/AuthProvider";
import PrivateRouter from "./components/PrivateRoute/PrivateRouter";
import {lazy} from "react";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import('./pages/Home'));
const Characters = lazy(() => import('./pages/Characters'));
const CharactersDetail = lazy(() => import('./pages/CharactersDetail'));
const Episode = lazy(() => import('./pages/Episode'));
const EpisodeDetail = lazy(() => import('./pages/EpisodeDetail'));
const Location = lazy(() => import('./pages/Location'));
const LocationDetail = lazy(() => import('./pages/LocationDetail'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div className="App">
      <div className="container">
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/characters">
                <Route index element={<PrivateRouter><ErrorBoundary><Characters /></ErrorBoundary></PrivateRouter>} />
                <Route path=":id" element={<PrivateRouter><ErrorBoundary><CharactersDetail /></ErrorBoundary></PrivateRouter>} />
              </Route>
              <Route path="/episode">
                <Route index element={<PrivateRouter><ErrorBoundary><Episode /></ErrorBoundary></PrivateRouter>} />
                <Route path=":id" element={<PrivateRouter><ErrorBoundary><EpisodeDetail /></ErrorBoundary></PrivateRouter>} />
              </Route>
              <Route path="/location">
                <Route index element={<PrivateRouter><ErrorBoundary><Location /></ErrorBoundary></PrivateRouter>} />
                <Route path=":id" element={<PrivateRouter><ErrorBoundary><LocationDetail /></ErrorBoundary></PrivateRouter>} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
