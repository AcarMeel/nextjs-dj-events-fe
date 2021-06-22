import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect, useContext } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== passwordConfirm) {
          toast.error('Passwords don\'t match');
          return;
      }
  };
  return (
    <div>
      <Layout title="User Registration">
        <div className={styles.auth}>
          <h1>
            <FaUser /> Register
          </h1>
          <ToastContainer position="bottom"/>
          <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value)
                }}
              />
            </div>
            <input type="submit" value="Register" className="btn" />
          </form>
          <p>
              Have an account already? <Link href="/account/login">Login</Link>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default register;
