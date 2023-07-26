import styled from "styled-components";
import { BsStarFill, BsStar } from "react-icons/bs";
import themes from "../themes";
import { useLocation, useNavigate } from "react-router-dom";

const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function () {
  const location = useLocation();
  const navigate = useNavigate();
  const Star = location.pathname === "/favorites" ? BsStarFill : BsStar;

  return (
    <Button onClick={() => navigate("/favorites")}>
      <Star color={themes.colors.borders} size={20} />
    </Button>
  );
}
