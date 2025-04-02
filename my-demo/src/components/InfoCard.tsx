import { Card, Typography, CardContent } from "@mui/material";
import styled from "styled-components";

interface InfoCardProps {
  title: string;
  content: string;
}
const StyledCard = styled(Card)`
  margin: 1rem 0;
  border: 1px solid black;
`;

const InfoCard = ({ title, content }: InfoCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default InfoCard;
