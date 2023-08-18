"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("29dde511-f744-4625-af39-a28065349905");
  }, []);

  return null;
};