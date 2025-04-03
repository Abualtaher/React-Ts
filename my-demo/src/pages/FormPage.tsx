import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

function FormPage() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return;
  <>
    <h1>Formulär</h1>
    <form onSubmit={handleSubmit}>
      <TextField
        value={name}
        label="Your name here"
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained"></Button>
    </form>
    {submitted && <Typography variant="h6">Hej {name}!</Typography>}
  </>;
}

export default FormPage;
