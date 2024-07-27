"use client";
import CoolBlob from "@/components/CoolBlob";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <CoolBlob credits={false} width={300} height={300} />
      <div className="w-[600px] h-[600px] absolute" />
    </div>
  );
}
