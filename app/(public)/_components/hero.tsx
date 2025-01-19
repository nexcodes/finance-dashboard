"use client";

import { buttonVariants } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const user = useUser();

  return (
    <div className="relative overflow-hidden p-4">
      <div className="container relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full">
                <Star className="h-4 w-4 fill-current" />
                <span>Trusted by 10,000+ users</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-7xl text-center lg:text-left">
                Smart finance{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  management
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Take control of your finances with our powerful yet simple
                platform. Track expenses, manage accounts, and gain valuable
                insights all in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href={user.isSignedIn ? "/dashboard" : "/sign-in"}
                  className={buttonVariants({
                    className:
                      "!bg-blue-600 hover:!bg-blue-700 text-lg h-12 px-8 w-full sm:w-auto",
                    size: "lg",
                  })}
                >
                  {user.isSignedIn ? "Enter the site" : "Get Started Free"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-r from-blue-400 to-blue-600"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Join 10,000+</span> finance
                  enthusiasts
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl rounded-3xl transform rotate-3" />
              <Image
                src="/images/dashboard.png"
                alt="Finance dashboard showing income and expenses overview"
                width={800}
                height={450}
                className="relative rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
