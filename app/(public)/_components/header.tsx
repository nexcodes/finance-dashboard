"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { Infinity, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const user = useUser();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 px-6",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Infinity className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Finance
          </span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          {user.isSignedIn && (
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#screenshots"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Screenshots
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </Link>

          {user.isSignedIn ? (
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/sign-in"
                className={buttonVariants({
                  variant: "ghost",
                  className: "hover:text-blue-600",
                })}
              >
                Log in
              </Link>
              <Link
                href="/sign-in"
                className={buttonVariants({
                  className: "!bg-blue-600 hover:!bg-blue-700",
                })}
              >
                Sign up free
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b p-4 md:hidden space-y-4">
            <Link
              href="#features"
              className="block text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              href="#screenshots"
              className="block text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Screenshots
            </Link>
            <Link
              href="#testimonials"
              className="block text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </Link>
            {!user.isSignedIn && (
              <div className="flex items-center gap-4">
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "hover:text-blue-600",
                  })}
                >
                  Log in
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    className: "!bg-blue-600 hover:!bg-blue-700",
                  })}
                >
                  Sign up free
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
