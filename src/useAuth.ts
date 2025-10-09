//import { useState, useEffect } from "react";
import { type User } from "./Models/User";
import { postAsync } from "./services/ApiService";
import useUserStore from "./Stores/UserStore";
const useAuth = () => {
  const user = useUserStore((s: any) => s.user);
  const setUser = useUserStore((s: any) => s.setUser);
  const isAuthenticated = user !== null;

  const login = (username: string, password: string) => {
    if (!user && !isAuthenticated) {
      postAsync<User>("http://localhost:3008/api/login", { username, password })
        .then((res) => {
          setUser(res);
        })
        .catch((err) => {
          console.error("Login failed:", err);
          setUser(null);
        });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = (registerUser: User) => {
    postAsync<User>("http://localhost:3008/api/register", registerUser)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.error("Registration failed:", err);
        setUser(null);
      });
  };

  return { user, isAuthenticated, login, logout, register };
};

export { useAuth };
