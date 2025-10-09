import "./Login.css";
import { use, useEffect, useState } from "react";
import type { User } from "../Models/User";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../useAuth";

export const Route = createFileRoute("/Login")({
  component: Login,
});

function Login() {
  const [user, setUser] = useState<User | null>(null);
  const { login, user: authenticatedUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticatedUser) {
      navigate({ to: "/" });
    }
  }, [authenticatedUser]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      if (prevUser) {
        return {
          ...prevUser,
          [name]: value,
        };
      } else {
        const retVal = {} as User;
        return {
          ...retVal,
          [name]: value,
        };
      }
    });
  };

  const onBtnClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      login(user.username, user.password);
    }
  };

  return (
    <div className="loginContainer">
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={onInputChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onInputChange}
        />
      </div>
      <div>
        <button
          onClick={onBtnClick}
          disabled={!user?.username && !user?.password}
        >
          Login
        </button>
      </div>
    </div>
  );
}
