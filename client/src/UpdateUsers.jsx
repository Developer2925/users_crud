import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUsers = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result.data);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((error) => console.log(error));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="p-5 w-full text-[#212121] flex flex-col items-center justify-center">
        <h1>Update User Details</h1>
        <form action="" onSubmit={Update} className="mt-3  w-[20vw]">
          <div className="w-full flex justify-between mb-3">
            <label htmlFor="">Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              className="focus:outline-none border border-[#212121] rounded-md px-2"
            />
          </div>
          <div className="w-full flex justify-between mb-3">
            <label htmlFor="">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              className="focus:outline-none border border-[#212121] rounded-md px-2"
            />
          </div>
          <div className="w-full flex justify-between mb-3">
            <label htmlFor="">Age:</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="text"
              placeholder="Enter Age"
              className="focus:outline-none border border-[#212121] rounded-md px-2"
            />
          </div>
          <button className="bg-sky-500 p-1 rounded-md text-[#f6f6f6]">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateUsers;
