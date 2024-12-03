import React from "react";

import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 py-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Join Us Today!</h1>
          <p className="text-base text-[#7E8CA0]">
            Create account to continue!
          </p>
        </div>
        <div className="flex items-center justify-center my-4">
          <ClerkLoaded>
            <SignUp path="/sign-up" fallbackRedirectUrl="/dashboard"/>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 size="24" className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
