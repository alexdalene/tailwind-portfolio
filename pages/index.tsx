import Head from 'next/head'
import Image from 'next/image'
import localFont from 'next/font/local'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'
import useCopyToClipboard from './components/copytext'
import MakeProject from './components/projects'
import { useRef } from 'react'

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

  return (
    <>
      <Head>
        <title>Alex Dalene | Creative Designer</title>
        <meta name="description" content="Frontend-developer with a passion for graphic design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div className='bg-hero-image bg-center bg-cover fixed w-screen h-screen -z-10' style={{ opacity: scrollYProgress }}></motion.div>
      <main className={[`${montreal.variable} font-montreal`, `${woodland.variable} font-woodland`, 'px-20 flex flex-col gap-20 mb-20 h-full'].join(' ')}>
        <section className='h-almost-screen flex flex-col justify-end'>
          <header className='flex h-hero-height w-full justify-between flex-wrap'>
            <div className='flex flex-col justify-between h-full'>
              <h1 className='text-9xl font-woodland font-thin box-border leading-extra-tight'>creative<br /> <b className='font-bold'>developer</b></h1>
              <div className='flex items-center gap-6'>
                <Link href='/Resume-Alex-Dalene.pdf' target='_blank' className='text-6xl border-solid border-white border-2 rounded-full box-border p-3 font-montreal font-normal hover:bg-black hover:text-white hover:border-black transition'>RESUME</Link>
              </div>
            </div>
            <div className='flex flex-col h-full gap-2 w-96 text-2xl font-montreal font-normal overflow-hidden'>
              <motion.h2 className='whitespace-nowrap font-bold' animate={{ x: '-118px'}} transition={{ repeat: Infinity, duration: 5, ease: 'linear' }} >CONTACT CONTACT CONTACT CONTACT CONTACT</motion.h2>
              <hr className='border-1'/>
              <motion.p onClick={() => copy('alexdalene@outlook.com')} className='hover:cursor-copy hover:text-black transition flex items-center gap-3 active:text-white'><Image src='/mail.svg' alt='simplistic icon of a paper plane' width='24' height='24' className='inline'></Image>alexdalene@outlook.com</motion.p>
              <p onClick={() => copy('47606931')} className='hover:text-black transition hover:cursor-copy flex items-center gap-3 active:text-white'> <Image src='/number.svg' alt='simple icon of a telephone' width='24' height='24' className='inline'></Image>476 06 931</p>
            </div>
          </header>
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
