import InfoCard from "../components/InfoCard";
import { Container, Typography } from "@mui/material";
function Home() {
  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Välkommen ttill StartSidan
        </Typography>

        <InfoCard title="Wisam" content="Blaaaalallsdffaslks " />
        <InfoCard
          title="Ozzy Osbourne"
          content="lurem ipsum is on of the greatest things i stumbeld into in my life."
        />
      </Container>
    </>
  );
}

export default Home;
