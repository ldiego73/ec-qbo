import { BrowserRouter as Router } from "react-router-dom";

import { EcommerceProvider } from "./contexts";
import { Navigation } from "./features/navigation";

function App() {
  return (
    <EcommerceProvider>
      <Router>
        <Navigation />
      </Router>
    </EcommerceProvider>
  );
}

export default App;
