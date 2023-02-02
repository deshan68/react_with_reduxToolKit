import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { login, logout } from "../store";

export default function Login() {
  const [newUserName, setNewUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  const password = useSelector((state: any) => state.user.value.password);

  return (
    <div>
      {username} <br />
      {password} <br />
      <input
        placeholder="Name"
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <input
        placeholder="Password"
        type={"password"}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(login({ username: newUserName, password: userPassword }))
        }
      >
        Submit
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
