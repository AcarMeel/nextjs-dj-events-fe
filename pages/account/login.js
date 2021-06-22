import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect, useContext } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
  };
  return (
    <div>
      <Layout title="User Login">
        <div className={styles.auth}>
          <h1>
            <FaUser /> Login
          </h1>
          <ToastContainer />
          <form onSubmit={handleSubmit}>
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
            <input type="submit" value="Login" className="btn" />
          </form>
          <p>
              Don't have an account? <Link href="/account/register">Register</Link>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default login;
