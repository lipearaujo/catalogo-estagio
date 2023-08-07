"use client"
import React, {useState} from 'react'
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

type Props = {}

const AddNewCard = (props: Props) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  if (status === "loading") {
    return <p className="text-white">Loading....</p>;
  }
  
  return (
    <h1 className='text-white'>Private Page</h1>
  )
}

export default AddNewCard