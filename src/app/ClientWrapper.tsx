"use client";

import React from "react";
type Props = {
  children: React.ReactNode;
};

function ClientWrapper({ children }: Props) {
  return <>{children}</>;
}

export default ClientWrapper;
