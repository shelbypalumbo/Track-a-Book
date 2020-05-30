import React from "react";
import "./style.css";

//List component export
export const List = ({ children }) => (
  <ul className="list-group">{children}</ul>
);

//ListItem component export
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
