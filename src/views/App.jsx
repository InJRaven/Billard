import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { AppRoutesConfig } from "../routes/AppRoutes";

function App() {
  const routes = useRoutes([...AppRoutesConfig])


  return (
    <Suspense fallback= {<div>Loading...</div>}>
      {routes}
    </Suspense>
  );
}

export default App;
