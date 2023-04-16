import React, { useState } from "react";
import AddTask from "../components/addTask";
import ListTask from "../components/ListTask";

export default function Home() {
  return (
    <>
      <AddTask />
      <ListTask />
    </>
  );
}
