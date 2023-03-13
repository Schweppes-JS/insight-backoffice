import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return isAppReady ? <main></main> : <CircularProgress />;
}

export default App;
