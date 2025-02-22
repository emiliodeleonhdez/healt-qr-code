"use client";
import { useParams, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  console.log("printing id", id);
  return <p>Doc:</p>;
}
