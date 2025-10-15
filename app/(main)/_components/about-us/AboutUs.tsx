"use client";

import { Button } from "@/components/ui/button";
import {
  BookKey,
  CheckCircleIcon,
  SearchIcon,
  StarIcon,
  Users,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="container py-10 lg:py-24">
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="w-full text-start">
              <h1 className="mb-6 text-2xl leading-tight font-bold text-gray-900 md:text-3xl lg:text-5xl">
                Master Your Equipment. <br />
                One Setup at a Time.
              </h1>

              <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                A searchable video library made by real users — to help you get
                the most out of your Bulletproof gear.
              </p>

              {/* Quick Overview Bullet Points */}
              <div className="mb-8 space-y-2">
                <div className="flex items-start gap-3">
                  <VideoIcon />
                  <span className="text-sm sm:text-base">
                    Step-by-step setup videos by real customers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <SearchIcon className="size-5" />
                  <span className="text-sm sm:text-base">
                    Search by rack, height, movement, body part, or user
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <StarIcon />
                  <span className="text-sm sm:text-base">
                    Top-rated and founder-approved content
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <BookKey className="size-5" />
                  <span className="text-sm sm:text-base">
                    Created to help you unlock the full potential of your
                    equipment
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="size-5" />
                  <span className="text-sm sm:text-base">
                    Built by the community. Powered by your experience.
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/">
                <Button size="lg" className="px-8 py-4 text-lg">
                  Explore Pump by Numbers
                </Button>
              </Link>
            </div>
            <Image
              src="/assets/about-hero.jpg"
              alt="About Us"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-10 lg:p-12">
              <h2 className="mb-8 text-xl leading-tight font-bold text-gray-900 md:text-3xl lg:text-4xl">
                Your Blueprint for Getting the Most from
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Bulletproof Equipment
                </span>
              </h2>

              <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                What if mastering your equipment was as simple as painting by
                numbers?
              </p>

              <p className="text-base leading-relaxed text-gray-900 sm:text-lg">
                Introducing <strong>Pump by Numbers</strong> — a revolutionary
                platform from Bulletproof Fitness Equipment that&apos;s equal
                parts brilliant and badass. Inspired by the simplicity of the
                nostalgic &quot;Paint by Numbers&quot; kits, Pump by Numbers is
                our answer to one of the biggest challenges we never saw coming:
                our gear does so much, it overwhelmed people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <Image
              src="/assets/problem.jpg"
              alt="Problem"
              width={500}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
            />
            <div className="w-full">
              <div className="rounded-xl border border-white/50 bg-blue-50 p-4 shadow-xl backdrop-blur-sm lg:p-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                  <span>
                    THE PROBLEM: <br /> TOO MUCH VERSATILITY, TOO LITTLE CLARITY
                  </span>
                </h3>

                <div className="space-y-8 text-gray-900">
                  <p className="text-base leading-relaxed">
                    When we started Bulletproof, our mission was crystal clear:
                  </p>

                  <blockquote className="rounded-lg border-l-4 border-primary bg-white p-8 pl-8 text-xl font-medium italic shadow-sm">
                    Bring commercial-grade gym power into smaller gyms and home
                    setups — with a fraction of the cost and space.
                  </blockquote>

                  <p className="text-base leading-relaxed">
                    We succeeded — maybe too well. Units like our Isolator
                    became beasts of versatility, replacing racks full of
                    machines. But something funny happened:
                  </p>

                  <p className="text-base leading-relaxed">
                    People were only using them for one or two exercises — like
                    preacher curls or leg extensions — because they didn&apos;t
                    know what else was possible. Some got stuck. Others got
                    overwhelmed. And many didn&apos;t have the training
                    knowledge to unlock the magic.
                  </p>

                  <p className="mb-6 text-lg leading-relaxed font-medium text-gray-900">
                    So we went back to the drawing board and created something
                    the industry has never seen before…
                  </p>
                  <div className="mt-10 text-base"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-violet-50 py-10 lg:py-24">
        <div className="container">
          <div className="space-y-8">
            {/* Left Content */}
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                THE SOLUTION: <br /> COMMUNITY-POWERED SETUP VIDEOS
              </h3>

              <div className="space-y-6 text-gray-900">
                <p className="text-lg leading-relaxed">
                  Pump by Numbers is more than a tutorial library — it&apos;s a
                  living, evolving ecosystem of user-generated setups, all
                  vetted and approved by Larry Nolan, Bulletproof&apos;s founder
                  and lifelong trainer. It lets you:
                </p>
              </div>
            </div>

            <div className="mt-20 flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="w-full max-w-xl space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-violet-200 bg-white p-4">
                  <span className="text-2xl">🎥</span>
                  <div>
                    <h4 className="mb-1 font-semibold">Real User Content</h4>
                    <p className="text-sm">
                      Search real setups from real people, just like you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-violet-200 bg-white p-4">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <h4 className="mb-1 font-semibold">Advanced Filtering</h4>
                    <p className="text-sm">
                      Filter by rack type, equipment, body part, height,
                      movement style, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-violet-200 bg-white p-4">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <h4 className="mb-1 font-semibold">Top-Rated Content</h4>
                    <p className="text-sm">
                      Explore top-rated videos, and even search by your favorite
                      contributors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-violet-200 bg-white p-4">
                  <span className="text-2xl">🧍‍♂️</span>
                  <div>
                    <h4 className="mb-1 font-semibold">Personalized Content</h4>
                    <p className="text-sm">
                      View content that&apos;s relevant to your anatomy and your
                      gear — not just a &quot;one-size-fits-none&quot;
                      instruction manual.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/assets/solution.jpg"
                  alt="Pump by Numbers video library interface showing community-generated workout setups"
                  width={500}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-10 lg:py-16">
        <div className="container">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 lg:p-10">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              {/* Left Image - Community/Diverse People */}
              <div className="relative order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/assets/contribution.jpg"
                    alt="Diverse community of people using Bulletproof equipment - different heights, builds, and training styles"
                    width={500}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900 md:text-3xl">
                  WHY COMMUNITY CONTRIBUTION?
                </h3>

                <div className="space-y-6 text-gray-900">
                  <p className="text-lg leading-relaxed">
                    Sure, Larry could&apos;ve made hundreds of videos himself.
                    But here&apos;s the deal:
                  </p>

                  <blockquote className="rounded-lg border-l-4 border-primary bg-green-50 p-6 pl-6 text-lg font-medium italic shadow-sm">
                    One man&apos;s height, build, rack, and goals can&apos;t
                    cover all the infinite variations our customers bring to the
                    table.
                  </blockquote>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="rounded-lg border border-purple-300 bg-white p-6">
                      <h4 className="mb-3 text-lg font-bold text-purple-800">
                        Diverse Perspectives
                      </h4>
                      <p className="leading-relaxed">
                        By opening this up to our incredible community of
                        Bulletproof users, we get the most diverse, most useful,
                        and most creative setups imaginable — and YOU benefit
                        from it.
                      </p>
                    </div>
                    <div className="rounded-lg border border-purple-300 bg-white p-6">
                      <h4 className="mb-3 text-lg font-bold text-purple-800">
                        Perfect Match
                      </h4>
                      <p className="leading-relaxed">
                        Tall? Short? Using a different brand rack? Want to
                        isolate a very specific muscle? There&apos;s likely
                        already a setup in Pump by Numbers tailored just for
                        your situation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Changer Section */}
      <section className="bg-white py-10 lg:py-16">
        <div className="container">
          <div>
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
              WHY THIS IS A GAME-CHANGER
            </h3>

            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 text-gray-900 md:grid-cols-2">
              <div className="flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <span className="rounded-full bg-green-500 p-1.5">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">
                    Democratizes Knowledge
                  </h4>
                  <p className="text-base leading-relaxed">
                    Everyone becomes both a student and a teacher. Share your
                    discoveries and learn from others&apos; innovations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <span className="rounded-full bg-green-500 p-1.5">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">
                    Eliminates Frustration
                  </h4>
                  <p className="text-base leading-relaxed">
                    Stop scratching your head over how to set something up —
                    just search and go. No more guesswork.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <span className="rounded-full bg-green-500 p-1.5">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">
                    Unleashes Potential
                  </h4>
                  <p className="text-base leading-relaxed">
                    Finally see everything your equipment can do — not just what
                    you&apos;ve already discovered on your own.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <span className="rounded-full bg-green-500 p-1.5">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">
                    Evolves Over Time
                  </h4>
                  <p className="text-base leading-relaxed">
                    This isn&apos;t a static database — it grows as our
                    community grows, constantly adding new possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 lg:py-16">
        <div className="container">
          <div className="rounded-lg border border-gray-200 bg-white p-6 text-center lg:p-12">
            <h3 className="mb-6 flex items-center justify-center gap-3 text-2xl font-bold text-gray-900 md:text-4xl">
              JOIN THE MOVEMENT
            </h3>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-900 md:text-lg">
              Pump by Numbers is where versatility meets accessibility, powered
              by you, approved by Larry, and built to make Bulletproof&apos;s
              legendary gear more powerful than ever.
            </p>

            <div className="mx-auto mb-8 max-w-md rounded-lg border border-blue-200 bg-blue-50 p-5">
              <p className="mb-1 text-xl font-semibold text-gray-900">
                Don&apos;t just train.
              </p>
              <p className="text-2xl font-bold text-primary">
                Pump by Numbers.
              </p>
            </div>

            <Link href="/">
              <Button
                size="lg"
                className="bg-primary px-10 py-6 text-xl shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
              >
                Start Exploring Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
