import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";

const Users = () => {
  const [users, setUsers] = useState([]);

  // get data from server
  // http://localhost:3001
  useEffect(() => {
    axios
      .get("https://users-crud-server.vercel.app")
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error));
  });

  const handleDelete = (id) => {
    axios
      .delete("https://users-crud-server.vercel.app/deleteUser/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="w-full min-h-[100vh] p-12">
        <button className="mb-4 px-2 py-1 bg-sky-500 rounded-md text-2xl text-[#f6f6f6]">
          <Link to={"/create"}>
            <HiUserAdd />
          </Link>
        </button>
        <div className="flex gap-1 flex-wrap w-full">
          {users.map((user) => (
            <div className="p-5 bg-slate-300 w-[23vw] rounded-lg text-[#212121]">
              <h1>Name: {user.name}</h1>
              <h1>Email: {user.email}</h1>
              <h1>Age: {user.age}</h1>
              <div className=" flex gap-2 text-[#f6f6f6] mt-3">
                <Link
                  to={`/update/${user._id}`}
                  className=" p-1 bg-yellow-500 rounded-md"
                >
                  <MdEditSquare />
                </Link>
                <button
                  onClick={(e) => handleDelete(user._id)}
                  className=" p-1 bg-red-500 rounded-md"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
