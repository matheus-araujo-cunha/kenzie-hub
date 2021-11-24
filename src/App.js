import GlobalStyle from "./styles/global";

import Routes from "./routes";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </div>
  );
}

export default App;
