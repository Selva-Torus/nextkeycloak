"use client";
import useAuth from "@/utils/useAuth";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const handleSignout = () => {};
  const [keyCloak ,token] = useAuth();

  return (
    <div className="text-blue-700 font-bold">
      Welcome to Keycloak{" "}
      <div>
        {JSON.stringify(token)} <div onClick={handleSignout}>logout</div>
      </div>
    </div>
  );
}

export default App;
