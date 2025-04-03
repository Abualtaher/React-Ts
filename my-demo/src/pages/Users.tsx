import { useState, useEffect } from "react";
import axios from "axios";
import { List, ListItem, ListItemText } from "@mui/material";

interface User {
  id: number;
  name: string;
}
function Users() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <h1>Users</h1>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Users;
