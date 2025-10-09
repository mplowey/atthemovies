import "./Register.css";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { type User } from "../Models/User";
import { useEffect, useState } from "react";
import { useAuth } from "../useAuth";

export const Route = createFileRoute("/Register")({
  component: Register,
});

function Register() {
  const [user, setUser] = useState<User | null>(null);
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // const addPostMutation = useMutation({
  //   mutationFn: async (userData: any) => {
  //     const response = await fetch('http://localhost:3008/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(userData)
  //     });
  //     return response.json();
  //   }
  // });

  // function invokeMutation() {
  //   addPostMutation.mutate(user);
  // }
  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/" });
    }
  }, [isAuthenticated]);

  const registerClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      register(user);
    }
  };

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    const { name, value } = event.target;
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
  }

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          className="registerInput"
          type="text"
          placeholder="Username"
          name="username"
          onChange={onInputChange}
        />
        <input
          className="registerInput"
          type="password"
          placeholder="Password"
          name="password"
          onChange={onInputChange}
        />
        <input
          className="registerInput"
          type="password"
          placeholder="Password (confirm)"
          onChange={onInputChange}
        />
        <input
          className="registerInput"
          type="email"
          placeholder="Email"
          name="email"
          onChange={onInputChange}
        />
        <input
          className="registerInput"
          type="text"
          placeholder="First Name"
          name="first"
          onChange={onInputChange}
        />
        <input
          className="registerInput"
          type="text"
          placeholder="Last Name"
          name="last"
          onChange={onInputChange}
        />
        <input
          className="registerInput"
          type="tel"
          placeholder="Phone"
          name="phone"
          onChange={onInputChange}
        />
        <input
          className="registerInput"
          type="text"
          placeholder="Credit Card Number"
          onChange={onInputChange}
        />
        <input
          className="registerInput"
          type="number"
          placeholder="Expiry Month"
          min="1"
          max="12"
          onChange={onInputChange}
        />
        <input
          className="registerInput"
          type="number"
          placeholder="Expiry Year"
          min="2024"
          onChange={onInputChange}
        />
      </form>
      <button onClick={registerClick}>Register</button>
    </div>
  );
}
