import { BsStarFill, BsStar } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import themes from "../themes";

export default function () {
  const location = useLocation();
const Star = location.pathname === "/favorites" ? BsStarFill : BsStar;

  return (
    <Link to="/favorites">
      <Star color={themes.colors.borders} size={20} />
    </Link>
  );
}
