import { motion } from 'framer-motion'
import Image from 'next/image'

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      },
    }
}

const children = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const line = {
    hidden: { width: '0px', opacity: 0 },
    show: { width: '250px', opacity: 1 }
}

export default function MakeProject({ type, title, description1, description2, gitLink, webLink}: { type: string, title: string, description1: string, description2: string, gitLink: string, webLink: string}) {
    return (
    <motion.article className='flex flex-col gap-4' variants={ container } initial='hidden' whileInView='show' viewport={{ once: true, margin: '-100px 0px' }}>
        <motion.header className='flex flex-col font-montreal w-full gap-1'>
            <motion.h4 className='font-bold font-montreal text-green-400 text-3xl -mb-3' variants={ children } >{type ? type : "Default type"}</motion.h4>
            <motion.h3 className='font-woodland text-7xl mb-2' variants={ children } >{title ? title : "Default title"}</motion.h3>
            <motion.p className='text-3xl' variants={ children } >{description1 ? description1 : "Default description"}</motion.p>
            <motion.p className='text-3xl' variants={ children } >{description2 ? description2 : "Default description"}</motion.p>
        </motion.header>
        <motion.hr className='' variants={ line } />
        <motion.div className='flex gap-6 text-2xl font-montreal' variants={ children } >
            <motion.a href={gitLink} target='_blank' className='flex items-center gap-2 hover:text-black transition'><Image src='/github.svg' width='24' height='24' alt='GitHub logo'></Image>GitHub</motion.a>
            <motion.a href={webLink} target='_blank' className='flex items-center gap-2 hover:text-black transition'><Image src='/website.svg' width='24' height='24' alt='Icon of a simplistic globe'></Image>Website</motion.a>
        </motion.div>
    </motion.article>
    )
}