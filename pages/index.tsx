import Head from 'next/head'
import Image from 'next/image'
import localFont from 'next/font/local'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import useCopyToClipboard from './components/copytext'
import MakeProject from './components/projects'
import { useRef, useState } from 'react'

// Fonts

const montreal = localFont({
  variable: '--font-montreal',
  src: [
    {
      path: './fonts/PPNeueMontreal-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/PPNeueMontreal-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PPNeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ]
})

const woodland = localFont({
  variable: '--font-woodland',
  src: [
    {
      path: './fonts/PPWoodland-Ultralight.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/PPWoodland-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ]
})

export default function Home() {
  const [value, copy] = useCopyToClipboard()

  const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end start", "start end"]
    })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1], [0, -0.1], {
        clamp: false,
  })

  return (
    <>
      <Head>
        <title>Alex Dalene | Creative Developer</title>
        <meta name="description" content="Frontend-developer with a passion for graphic design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div className='bg-hero-image bg-center bg-cover fixed w-screen h-screen -z-10' style={{ opacity: scrollYProgress }}></motion.div>
      <motion.div className='w-screen bg-zinc-700 h-screen fixed z-50' initial={{ height: '100vh'}} animate={{ height: '0vh' }} transition={{ duration: 1, delay: 0.8 }} ></motion.div>
      <motion.div className='bg-zinc-600 w-screen h-screen fixed z-50' initial={{ height: '100vh'}} animate={{ height: '0vh' }} transition={{ duration: 1, delay: 0.5 }} ></motion.div>
      <main className={[`${montreal.variable} font-montreal`, `${woodland.variable} font-woodland`, 'px-20 flex flex-col gap-20 mb-20 h-full'].join(' ')}>
        <section className='h-almost-screen flex flex-col justify-end'>
          <motion.header className='flex h-hero-height w-full justify-between flex-wrap overflow-hidden' initial={{ overflow: 'hidden' }} animate={{ overflow: 'visible' }} transition={{ delay: 2 }}>
            <motion.div className='flex flex-col justify-between h-full' style={{ y: y }}>
              <motion.h1 className='text-9xl font-woodland font-thin -mt-5' initial={{ y: '-100%' }} animate={{ y: '0' }} transition={{ delay: 1.3, duration: 1 }}>Creative<br /> <b className='font-bold'>Developer</b></motion.h1>
              <h2 className='font-montreal text-3xl'>Alex Dalene</h2>
            </motion.div>
            <div className='flex flex-col justify-between h-full gap-2 w-96 text-2xl font-montreal font-normal overflow-hidden'>
              <div className='flex flex-col gap-2'>
                <motion.h2 className='whitespace-nowrap font-bold' animate={{ x: '-118px'}} transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}>CONTACT CONTACT CONTACT CONTACT CONTACT</motion.h2>
                <motion.hr className='border-1' initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ delay: 1.2, duration: 1 }} />
                <motion.p onClick={() => copy('alexdalene@outlook.com')} className='hover:cursor-copy hover:text-black transition flex items-center gap-3 active:text-white' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }}><Image src='/mail.svg' alt='simplistic icon of a paper plane' width='24' height='24' className='inline'></Image>alexdalene@outlook.com</motion.p>
                <motion.p onClick={() => copy('47606931')} className='hover:text-black transition hover:cursor-copy flex items-center gap-3 active:text-white' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}><Image src='/number.svg' alt='simple icon of a telephone' width='24' height='24' className='inline'></Image>476 06 931</motion.p>
              </div>
              <Link href='/Resume-Alex-Dalene.pdf' target='_blank' className='text-6xl w-fit border-solid border-white border-2 rounded-full box-border p-3 font-montreal font-normal hover:bg-black hover:text-white hover:border-black transition'>RESUME</Link>
            </div>
          </motion.header>
        </section>
        <section className='h-full flex flex-col gap-20' id='projects'>
        <div>
          <motion.hr initial={{ width: '0%' }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 2 }} ref={ref}/>
          <p className='font-montreal'>#1 - SCIENCE MUSEUM</p>
        </div>
        <MakeProject type='EXAM' 
        title='Science&nbsp;Museum' 
        description1='Exam through school. We had to follow a few requirements, like text and content - but had full control over design.' 
        description2='I decided to go with a retro-futuristic look with a little brutalism.'
        gitLink='https://github.com/alexdalene/exam-des22'
        webLink='https://ad-science-museum.netlify.app/'
        ></MakeProject>
        <div>
          <motion.hr initial={{ width: '0%' }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 2 }}/>
          <p className='font-montreal'>#2 - RAINYDAYS</p>
        </div>
        <MakeProject type='PROJECT' 
        title='Rainydays' 
        description1='This was our very first project using HTML and CSS. We later updated it to include REST API’s, making the products “real”.' 
        description2='Simplistic, modern and calming design - with a  focus on easy navigation.'
        gitLink='https://github.com/alexdalene/rainydays-cms'
        webLink='https://rainydays-cms-ad.netlify.app/'
        ></MakeProject>
        <div>
          <motion.hr initial={{ width: '0%' }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 2 }}/>
          <p className='font-montreal'>#3 - LORD OF THE RINGS - API</p>
        </div>
        <MakeProject type='PROJECT' 
        title='LotR&nbsp;API' 
        description1='First real project I used REST API’s with. Found a free Lord of the Rings API that had almost everything I wanted.' 
        description2='Went for a more modern-sleek look, inspired by material-design and GitHub.'
        gitLink='https://github.com/alexdalene/api-course-assignment'
        webLink='https://lotr-assignment.netlify.app/'
        ></MakeProject>
        </section>
      </main>
    </>
  )
}
