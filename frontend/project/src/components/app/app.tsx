import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constant';
import Main from '../../pages/main/main';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<Main />}
        key={AppRoute.Main}
      />
    </Routes>
  );
}
export default App;
