import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const signin = async () => {
    try {
      const credentials = { username: username, password: password };
      const user = await client.signin(credentials);
      navigate("/project/account");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>Signin</h1>
      {error && <div className="alert alert-danger">{error.message}</div>}
      <input
        type="text"
        placeholder="username"
        className="form-control w-50 mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="form-control w-50 mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary" onClick={signin}>
        Signin
      </button>
    </div>
  );
}
export default Signin;
