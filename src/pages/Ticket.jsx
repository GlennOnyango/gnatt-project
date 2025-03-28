import React from "react";
import { useParams } from "react-router";

export default function Ticket() {
  // get transaction id from the url params
  const params = useParams();
  const { id } = params;
  return <div>Ticket {id}</div>;
}
