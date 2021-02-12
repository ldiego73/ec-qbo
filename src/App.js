import { BrowserRouter as Router } from "react-router-dom";

import { Navigation } from "./features/navigation";

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
