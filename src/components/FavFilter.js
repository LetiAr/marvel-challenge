import { BsStarFill, BsStar } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import themes from "../themes";
import { routes } from "../constants";

export default function FavFilter() {
  const location = useLocation();
const Star = location.pathname === routes.FAVORITES ? BsStarFill : BsStar;

  return (
    <Link to={routes.FAVORITES}>
      <Star color={themes.colors.borders} size={20} />
    </Link>
  );
}
