/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zX41EHGpfMu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { useState } from "react";
import { signIn, signUp } from "../services/firebaseAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Component() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [locality, setLocality] = useState();
  const [password, setPassword] = useState();
  const [avatar, setAvtar] = useState();

  function onRegisterHandler() {
    signUp(email, password).then((res) => {
      if (res) {
        axios
          .post("https://tree-plantation-delta.vercel.app/auth/register/user", {
            name,
            email,
            phone,
            locality,
            dob: "nan",
          })
          .then((res2) => {
            if (res2.status == 200) {
              alert("registration succesfull !");
              navigate("/");
            }
          });
      }
    });
  }
  return (
    <div className="flex flex-col min-h-screen pt-28">
      {" "}
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-md px-4 border p-5 rounded-md shadow-lg shadow-teal-50">
          <h1 className="text-3xl font-bold mb-8">Register</h1>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="avatar">Avatar</label>
                <input
                  onChange={(e) => {
                    setAvtar(e.target.value);
                  }}
                  id="avatar"
                  type="file"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Upload your avatar"
                />
              </div>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  type="email"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone">Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="phone"
                  type="tel"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  id="phone"
                  type="tel"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="locality">Locality</label>
                <input
                  onChange={(e) => {
                    setLocality(e.target.value);
                  }}
                  id="locality"
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Enter your locality"
                />
              </div>
            </div>
            <button
              onClick={onRegisterHandler}
              type="button"
              className="bg-teal-700 text-white hover:bg-teal-600 w-full p-2 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </main>
      <footer className="bg-teal-700 text-white py-6 mt-auto">
        <div className="container mx-auto text-center text-sm">
          &copy; 2024 Tree Planter. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
