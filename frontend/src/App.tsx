import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("backend unreachable"));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>AI Personal OS</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}

export default App;