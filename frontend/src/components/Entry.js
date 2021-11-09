import React from "react";
import { Media } from "reactstrap";

export default function Entry({ name, description, created_date }) {
  return (
    <Media>
      <Media bdoy>
        <Media heading>{name}</Media>
        <p>{description}</p>
        <p>{created_date}</p>
      </Media>
    </Media>
  );
}
