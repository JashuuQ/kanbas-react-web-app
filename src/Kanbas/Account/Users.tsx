import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { User } from "../types";

// Fetches the users from the database
export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const { uid } = useParams();
  
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, [uid]);

  return (
    <div>
      <h3>Users</h3>
      <PeopleTable users={users} />
    </div>
  );
} 
