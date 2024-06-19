'use client';

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import {Card} from "@/app/components/card";
import {FaExternalLinkAlt} from "react-icons/fa";
import Beacon from 'react-status-beacon'

const navigation = [
  // { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Dylan L. Jones
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
                <Link href={'https://generativeconsulting.ai'} rel={'norefferer noopener'} target={'_blank'}>
                    <Card>
                        <div className={'flex mt-8 -mb-2 items-center justify-center gap-2'}>
                            <Beacon status='neutral' colors={{neutral: '#60a5fa'}} />
                            <p className={'text-zinc-400 mt-1 group-hover:text-zinc-300'}>For Organizations</p>
                        </div>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h2
                                id="featured-post"
                                className="mt-4 text-2xl font-bold text-zinc-200 group-hover:text-white sm:text-4xl font-display"
                            >
                                Looking to plan a robust <br/> Generative AI deployment?
                            </h2>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 flex gap-2 items-center justify-center">
                                Visit my firm, Generative Consulting <FaExternalLinkAlt/>
                            </p>
                        </article>
                    </Card>
                </Link>
            {/*<div className={'grid grid-cols-3 gap-8'}>*/}
            {/*    <Card>*/}
            {/*        <article className="relative w-full h-full p-4 md:p-8">*/}
            {/*            <h2*/}
            {/*                id="featured-post"*/}
            {/*                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"*/}
            {/*            >*/}
            {/*                I post.*/}
            {/*            </h2>*/}
            {/*            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">*/}
            {/*                Through my content, I aim to bring together */}
            {/*            </p>*/}
            {/*            <div className="absolute bottom-4 md:bottom-8">*/}
            {/*                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">*/}
            {/*                    Read more <span aria-hidden="true">&rarr;</span>*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </article>*/}
            {/*    </Card>*/}
            {/*    <Card>*/}
            {/*        <article className="relative w-full h-full p-4 md:p-8">*/}
            {/*            <h2*/}
            {/*                id="featured-post"*/}
            {/*                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"*/}
            {/*            >*/}
            {/*                I build.*/}
            {/*            </h2>*/}
            {/*            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">*/}
            {/*                jy*/}
            {/*            </p>*/}
            {/*            <div className="absolute bottom-4 md:bottom-8">*/}
            {/*                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">*/}
            {/*                    Read more <span aria-hidden="true">&rarr;</span>*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </article>*/}
            {/*    </Card>*/}
            {/*    <Card>*/}
            {/*        <article className="relative w-full h-full p-4 md:p-8">*/}
            {/*            <h2*/}
            {/*                id="featured-post"*/}
            {/*                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"*/}
            {/*            >*/}
            {/*                I advise.*/}
            {/*            </h2>*/}
            {/*            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">*/}
            {/*                jy*/}
            {/*            </p>*/}
            {/*            <div className="absolute bottom-4 md:bottom-8">*/}
            {/*                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">*/}
            {/*                    Read more <span aria-hidden="true">&rarr;</span>*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </article>*/}
            {/*    </Card>*/}
            {/*</div>*/}
        </div>
    </div>
  );

}
