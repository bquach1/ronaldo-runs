"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NavMenu from "./components/NavMenu";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const carouselPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="flex min-h-screen font-sans bg-black">
      <main className="flex min-h-screen w-full flex-col bg-black">
        <NavMenu />
        <Carousel
          onMouseEnter={carouselPlugin.current.stop}
          onMouseLeave={carouselPlugin.current.reset}
          className="w-full h-[calc(100vh-64px)] max-w-6xl mx-auto"
          plugins={[carouselPlugin.current]}
        >
          <CarouselContent>
            <CarouselItem>
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col items-center h-screen justify-center text-white">
                  <div className="relative w-[150px] h-[150px]">
                    <Image
                      src="/ronaldo_runs_mascot.png"
                      alt="Ronaldo Running"
                      fill
                      className="object-contain pointer-events-none"
                      priority
                    />
                  </div>
                  <h1 className="text-6xl font-bold mt-6">
                    Welcome to Ronaldo Runs
                  </h1>
                  <p className="mt-4 text-xl text-center max-w-xl">
                    A beginner-friendly app to track your athletic performance,
                    set goals, and join a fitness community of runners and
                    gym-goers.
                  </p>
                  <Button
                    onClick={() => router.push("/goals")}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white cursor-pointer"
                  >
                    Get Started
                  </Button>
                  <div className="mt-4 text-sm text-center">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      Log in
                    </a>
                  </div>
                  <div className="mt-2 text-sm text-center">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      Sign up
                    </a>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col items-center justify-center h-screen text-white">
                  <div className="relative w-[150px] h-[150px]">
                    <Image
                      src="/ronaldo_bench_presses.png"
                      alt="Ronaldo Bench Presses"
                      height={150}
                      width={150}
                      className="object-contain pointer-events-none"
                      priority
                    />
                  </div>
                  <h1 className="text-6xl font-bold mt-6">
                    Track Your Workouts
                  </h1>
                  <p className="mt-4 text-xl text-center max-w-xl">
                    Log your daily workouts by body group and monitor progress
                    towards your fitness goals with our intuitive tracking
                    system.
                  </p>
                  <Button
                    onClick={() => router.push("/tracker")}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white cursor-pointer"
                  >
                    Start Tracking
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col items-center justify-center h-screen text-white">
                  <div className="relative w-[150px] h-[150px]">
                    <Image
                      src="/ronaldo_chilling.png"
                      alt="Ronaldo Chilling"
                      height={150}
                      width={150}
                      className="object-contain pointer-events-none"
                      priority
                    />
                  </div>
                  <h1 className="text-6xl font-bold mt-6">
                    Join the Community
                  </h1>
                  <p className="mt-4 text-xl text-center max-w-xl">
                    Connect with fellow fitness enthusiasts, share your
                    achievements, and earn rewards for reaching your workout
                    milestones.
                  </p>
                  <Button
                    onClick={() => router.push("/store")}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white cursor-pointer"
                  >
                    Get Connected
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute cursor-pointer top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10" />
          <CarouselNext className="absolute cursor-pointer top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10" />
        </Carousel>
      </main>
    </div>
  );
}
