"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
        <p>The One Stop AI Platform for</p>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 max-h-72">
          <TypewriterComponent
            options={{
              strings: [
                "Code Generation",
                "Video Generation",
                "Music Generation",
                "Photo Generation",
                "Blog / Article Writing",
                "Email Writing"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};