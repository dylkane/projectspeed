import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#features">
                              Features
                            </MobileNavLink>
                            <MobileNavLink href="#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="/login" variant="outline">
                              Log in
                            </Button>
                            <Button href="#">Download the app</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Button href="/login" variant="outline" className="hidden lg:block">
              Log in
            </Button>
            <Button href="#" className="hidden lg:block">
              Download
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}



// import { Popover, Transition, Menu } from '@headlessui/react'
// import React from 'react';

// export function Header() {

//   return (
//     <header class="relative isolate z-10 bg-white">
//       <Popover>
//         <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
//           <div class="flex lg:flex-1">
//             <a href="#" class="-m-1.5 p-1.5">
//               <span class="sr-only">Your Company</span>
//               <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""></img>
//             </a>
//           </div>
//           <div class="flex lg:hidden">
//             <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
//               <span class="sr-only">Open main menu</span>
//               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//               </svg>
//             </button>
//           </div>
//           <div class="hidden lg:flex lg:gap-x-12">
//             <div>
//               <Popover.Button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
//                 Product
//                 <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//                 </svg>
//               </Popover.Button>

//               {/* <!--
//                 'Product' flyout menu, show/hide based on flyout menu state.

//                 Entering: "transition ease-out duration-200"
//                   From: "opacity-0 -translate-y-1"
//                   To: "opacity-100 translate-y-0"
//                 Leaving: "transition ease-in duration-150"
//                   From: "opacity-100 translate-y-0"
//                   To: "opacity-0 -translate-y-1"
//               --> */}
//               <Transition
//                 enter="duration-200 ease-out"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="duration-150 ease-in"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <Popover.Panel>
//                   <div class="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
//                     <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
//                       <div class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
//                         <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                           <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
//                           </svg>
//                         </div>
//                         <a href="#" class="mt-6 block font-semibold text-gray-900">
//                           Analytics
//                           <span class="absolute inset-0"></span>
//                         </a>
//                         <p class="mt-1 text-gray-600">Get a better understanding where your traffic is coming from</p>
//                       </div>
//                       <div class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
//                         <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                           <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
//                           </svg>
//                         </div>
//                         <a href="#" class="mt-6 block font-semibold text-gray-900">
//                           Engagement
//                           <span class="absolute inset-0"></span>
//                         </a>
//                         <p class="mt-1 text-gray-600">Speak directly to your customers with our engagement tool</p>
//                       </div>
//                       <div class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
//                         <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                           <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
//                           </svg>
//                         </div>
//                         <a href="#" class="mt-6 block font-semibold text-gray-900">
//                           Security
//                           <span class="absolute inset-0"></span>
//                         </a>
//                         <p class="mt-1 text-gray-600">Your customers’ data will be safe and secure</p>
//                       </div>
//                       <div class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
//                         <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                           <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
//                           </svg>
//                         </div>
//                         <a href="#" class="mt-6 block font-semibold text-gray-900">
//                           Integrations
//                           <span class="absolute inset-0"></span>
//                         </a>
//                         <p class="mt-1 text-gray-600">Your customers’ data will be safe and secure</p>
//                       </div>
//                     </div>
//                     <div class="bg-gray-50">
//                       <div class="mx-auto max-w-7xl px-6 lg:px-8">
//                         <div class="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
//                           <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
//                             <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                               <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd" />
//                             </svg>
//                             Watch demo
//                           </a>
//                           <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
//                             <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                               <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
//                             </svg>
//                             Contact sales
//                           </a>
//                           <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
//                             <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                               <path fill-rule="evenodd" d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z" clip-rule="evenodd" />
//                             </svg>
//                             View all products
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Popover.Panel>
//               </Transition>
//             </div>

//             <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
//             <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
//             <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
//           </div>
//           <div class="hidden lg:flex lg:flex-1 lg:justify-end">
//             <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
//           </div>
//         </nav>
//       </Popover>
//       {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
//       <Popover>
//       <div class="lg:hidden" role="dialog" aria-modal="true">
//         {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
//         <div class="fixed inset-0 z-10"></div>
//         <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div class="flex items-center justify-between">
//             <a href="#" class="-m-1.5 p-1.5">
//               <span class="sr-only">Your Company</span>
//               <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""></img>
//             </a>
//             <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
//               <span class="sr-only">Close menu</span>
//               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <Popover.Panel>
//           <div class="mt-6 flow-root">
//             <div class="-my-6 divide-y divide-gray-500/10">
//               <div class="space-y-2 py-6">
//                 <Popover>
//                   <div class="-mx-3">
//                     <button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
//                       {/* Product
//                       <!--
//                         Expand/collapse icon, toggle classes based on menu open state.

//                         Open: "rotate-180", Closed: ""
//                       --> */}
//                       <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                         <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//                       </svg>
//                     </button>
//                     {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
//                     <Popover.Panel>
//                       <div class="mt-2 space-y-2" id="disclosure-1">
//                         <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Analytics</a>
//                         <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Engagement</a>
//                         <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Security</a>
//                         <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Integrations</a>
//                         <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Watch demo</a>
//                         <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact sales</a>
//                         <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">View all products</a>
//                       </div>
//                     </Popover.Panel>
//                   </div>
//                 </Popover>
//                 <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
//                 <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
//                 <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
//               </div>
//               <div class="py-6">
//                 <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
//               </div>
//             </div>
//           </div>
//           </Popover.Panel>
//         </div>
//       </div>
//       </Popover>
//     </header>

//   )
// }


// // function MobileNavLink({ href, children }) {
// //   return (
// //     <Popover.Button as={Link} href={href} className="block w-full p-2">
// //       {children}
// //     </Popover.Button>
// //   )
// // }

// // function MobileNavIcon({ open }) {
// //   return (
// //     <svg
// //       aria-hidden="true"
// //       className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
// //       fill="none"
// //       strokeWidth={2}
// //       strokeLinecap="round"
// //     >
// //       <path
// //         d="M0 1H14M0 7H14M0 13H14"
// //         className={clsx(
// //           'origin-center transition',
// //           open && 'scale-90 opacity-0'
// //         )}
// //       />
// //       <path
// //         d="M2 2L12 12M12 2L2 12"
// //         className={clsx(
// //           'origin-center transition',
// //           !open && 'scale-90 opacity-0'
// //         )}
// //       />
// //     </svg>
// //   )
// // }

// // function MobileNavigation() {
// //   return (
// //     <Popover>
// //       <Popover.Button
// //         className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
// //         aria-label="Toggle Navigation"
// //       >
// //         {({ open }) => <MobileNavIcon open={open} />}
// //       </Popover.Button>
// //       <Transition.Root>
// //         <Transition.Child
// //           as={Fragment}
// //           enter="duration-150 ease-out"
// //           enterFrom="opacity-0"
// //           enterTo="opacity-100"
// //           leave="duration-150 ease-in"
// //           leaveFrom="opacity-100"
// //           leaveTo="opacity-0"
// //         >
// //           <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
// //         </Transition.Child>
// //         <Transition.Child
// //           as={Fragment}
// //           enter="duration-150 ease-out"
// //           enterFrom="opacity-0 scale-95"
// //           enterTo="opacity-100 scale-100"
// //           leave="duration-100 ease-in"
// //           leaveFrom="opacity-100 scale-100"
// //           leaveTo="opacity-0 scale-95"
// //         >
// //           <Popover.Panel
// //             as="div"
// //             className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
// //           >
// //             <MobileNavLink href="#features">Features</MobileNavLink>
// //             <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
// //             <MobileNavLink href="#pricing">Pricing</MobileNavLink>
// //             <hr className="m-2 border-slate-300/40" />
// //             <MobileNavLink href="/login">Sign in</MobileNavLink>
// //           </Popover.Panel>
// //         </Transition.Child>
// //       </Transition.Root>
// //     </Popover>
// //   )
// // }

// // export function Header() {
// //   return (
// //     <header className="py-10">
// //       <Container>
// //         <nav className="relative z-50 flex justify-between">
// //           <div className="flex items-center md:gap-x-12">
// //             <Link href="#" aria-label="Home">
// //               <Logo className="h-10 w-auto" />
// //             </Link>
// //             <div className="hidden md:flex md:gap-x-6">
// //               <NavLink href="#features">Features</NavLink>
// //               <NavLink href="#testimonials">Testimonials</NavLink>
// //               <NavLink href="#pricing">Pricing</NavLink>
// //             </div>
// //           </div>
// //           <div className="flex items-center gap-x-5 md:gap-x-8">
// //             <div className="hidden md:block">
// //               <NavLink href="/login">Sign in</NavLink>
// //             </div>
// //             <Button href="/register" color="blue">
// //               <span>
// //                 Get started <span className="hidden lg:inline">today</span>
// //               </span>
// //             </Button>
// //             <div className="-mr-1 md:hidden">
// //               <MobileNavigation />
// //             </div>
// //           </div>
// //         </nav>
// //       </Container>
// //     </header>
// //   )
// // }

