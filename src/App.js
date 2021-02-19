import { BrowserRouter as Router } from "react-router-dom";

import { Navigation } from "./features/navigation";
import { EcommerceProvider } from "./contexts/ecommerce.provider";

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
