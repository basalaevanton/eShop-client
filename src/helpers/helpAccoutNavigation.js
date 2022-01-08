import React from "react";
import { ReactComponent as User } from "../images/AccImg/User.svg";
import { ReactComponent as Adress } from "../images/AccImg/Adress.svg";
import { ReactComponent as Favorite } from "../images/AccImg/Favorite.svg";
import { ReactComponent as Order } from "../images/AccImg/User.svg";
import { ReactComponent as Admin } from "../images/AccImg/Admin.svg";

export const accRouting = [
  { id: 0, path: "/account/info", name: "Account Information", icon: <User /> },
  { id: 1, path: "/account/adress", name: "Address Book", icon: <Adress /> },
  { id: 2, path: "/account/orders", name: "My Orders", icon: <Order /> },
  {
    id: 3,
    path: "/account/favorites",
    name: "My Favorites",
    icon: <Favorite />,
  },
  {
    id: 4,
    path: "/account/admin",
    name: "New product (only admin)",
    icon: <Admin />,
  },
];
