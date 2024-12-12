"use client";

import Link from "next/link";
// import { Button } from "./ui/button";
import Nav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-gradient-to-b from-blue-950 to-slate-950">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-bold animate-pulse">
            Aventa <span className="text-2xl font-bold animate-pulse">Holdings</span><span className="text-indigo-600">.</span>
          </h1>
          <h2></h2>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact">
            <Button>Hire me</Button>
          </Link> */}
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default header;
