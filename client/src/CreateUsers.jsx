import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("https://users-crud-server.vercel.app/createUser", { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="p-5 w-full text-[#212121] flex flex-col items-center justify-center">
        <h1>Add Details</h1>
        <form action="" onSubmit={Submit} className="mt-3  w-[20vw]">
          <div className="w-full flex justify-between mb-3">
            <label htmlFor="">Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              className="focus:outline-none border border-[#212121] rounded-md px-2"
            />
          </div>
          <div className="w-full flex justify-between mb-3">
            <label htmlFor="">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              className="focus:outline-none border border-[#212121] rounded-md px-2"
            />
          </div>
          <div className="w-full flex justify-between mb-3">
            <label htmlFor="">Age:</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              type="text"
              placeholder="Enter Age"
              className="focus:outline-none border border-[#212121] rounded-md px-2"
            />
          </div>
          <button className="bg-sky-500 p-1 rounded-md text-[#f6f6f6]">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUsers;
