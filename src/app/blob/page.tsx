"use client";
import CoolBlob from "../components/CoolBlob";

export default function BlobPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <CoolBlob credits={false} width={500} height={500} />
      <div className="w-[600px] h-[600px] absolute" />
    </div>
  );
}
