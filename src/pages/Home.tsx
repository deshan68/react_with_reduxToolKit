import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Home() {
  const username = useSelector((state: any) => state.user.value.username);
  return <div>Home {username}</div>;
}
