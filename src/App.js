import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./router";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {router.map((route, _) => {
            const Component = route.component;
            const Layout = route.layout;
            return (
              <Route
                key={route.key}
                path={route.path}
                element={
                  Layout ? (
                    <Layout>
                      <Component />
                    </Layout>
                  ) : (
                    <Component />
                  )
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
