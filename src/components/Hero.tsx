import Image from 'next/image'
import clsx from 'clsx'

import { BackgroundIllustration } from './BackgroundIllustration'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

type Logo = { 
  company: string; 
  svg: string;
  width: number;
  height: number;
  showOnMobile: boolean;
}

type HeroProps = { 
  title: string; 
  subtitle: string;
  logos?: Logo[];
  children?: React.ReactNode; 
  buttonText: string; 
  buttonLink: string;
}

export function Hero(props: HeroProps) {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container className={undefined}>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-1 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              {props.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              {props.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              {/* <AppStoreLink /> */}
              <Button
                href={props.buttonLink}
                variant="outline" className={undefined}              
              >
                <span>{props.buttonText}</span>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              {/* <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame> */}
              {props.children}
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              As featured in
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {props.logos?.map((logo) => (
                <li key={logo.company} className={clsx('flex', logo.showOnMobile != true ? 'hidden xl:block' : '')}>
                  <Image src={logo.svg} width={logo.width} height={logo.height} alt={logo.company} className="h-8" unoptimized />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
