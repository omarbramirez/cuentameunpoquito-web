import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <img
            src="/assets/images/imagotipo.png"
            alt="imagotipo"
            style={{
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
            }}
          />
          <div className="font-semibold text-3xl text-gray-900"></div>
          <div className="text-xl" style={{ textAlign: 'center' }}>
            {AppConfig.description}
          </div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">Inicio</Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">Más información</Link>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Creado por{' '}
        <a href="https://omarbramirez.github.io/omar-b-ramirez/">
          Omar Ramírez
        </a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
);

export { Main };
