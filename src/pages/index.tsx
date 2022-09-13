import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TailwindCssNotification from "./components/utility-first/tailwind-css-notification";
import BreakpointColorTarget from "./components/responsive-design/media-responsive-button";
import BreakpointResponsiveCard from "./components/responsive-design/media-responsive-card";
import ResponsiveImage from "./components/responsive-design/media-responsive-image";
import DisabledButton from "./components/states/disabled-button";
import FocusInput from "./components/states/focus-input";
import HoverButton from "./components/states/hover-button";

const Home: NextPage = () => {
  return (
    <div className="p-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TailwindCssNotification />
      <BreakpointResponsiveCard />
      <ResponsiveImage />
      <BreakpointColorTarget />
      <FocusInput />
      <HoverButton />
      <DisabledButton />

      <Link href="/pokedex">
        <a className="text-blue-500 hover:underline block">Check out the Pokedex page!</a>
      </Link>
    </div>
  );
};

export default Home;
