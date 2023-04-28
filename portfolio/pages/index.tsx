import Head from 'next/head'
import { BsGithub, BsFillArrowUpCircleFill } from 'react-icons/bs'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { FaLine } from 'react-icons/fa'
import Link from 'next/link'
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [data, setData] = useState<any>([]);
  const [about, setAbout] = useState<any>([]);
  const [project, setProject] = useState<any>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/data')
        .then(response => {
          setData(response.data);
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });

        axios.get('http://localhost:8080/about')
        .then(response => {
          setAbout(response.data);
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });

        axios.get('http://localhost:8080/project')
        .then(response => {
          setProject(response.data);
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });

    }, []);

  function BacktoTopButton() {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
          setShowBtn(true)
        } else {
          setShowBtn(false)
        }
      })

    } ,[])

    const backToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    return (
      <div>
        {showBtn && (
          <BsFillArrowUpCircleFill
            className='fixed bottom-10 right-10 text-4xl text-cyan-500 cursor-pointer'
            onClick={backToTop}
          />
        )}
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Mixer's Portfolio</title>
        <meta name="description" content="Try open it, definitely not virus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-cyan-900 font-mono'>
        <BacktoTopButton/>
        <section className='min-h-fit md:min-h-full xl:min-h-screen'>
          <nav className='px-2 md:px-10 py-6 mb-10 flex justify-between border-b-2 border-cyan-800'>
            <h1 className='text-base md:text-xl text-white font-extrabold uppercase'>{data[0]}</h1>
            <ul className='flex items-center'>
              <li>
                <a className='bg-cyan-500 text-white px-1 py-2 rounded-md ml-2 text-xs md:text-base md:px-4 md:ml-6' href='#about'>About me</a>
              </li>
              <li>
                <a className='bg-cyan-500 text-white px-1 py-2 rounded-md ml-2 text-xs md:text-base md:px-4 md:ml-6' href='#project'>My Projects</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-3'>
            <img className='w-[100px] h-[150px] rounded-full mx-auto md:w-[200px] md:h-[300px]' src='profile.jpg' alt='profile'/>
            <div className='text-2xl py-3 text-cyan-500 font-medium md:text-5xl'>
              <Typewriter
                  words={[
                    "Welcome to my portfolio.",
                    "Hello, My name is Mixer.",
                    "I'm a student at KMUTNB.",
                    "Nice to meet you.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
              />
            </div>
            <p className='text-sm py-5 leading-5 text-white md:text-base'>
              {data[1]}<br/> 
              {data[2]}<br/> 
              {data[3]}<br/>
            </p>
            <h3 className='text-sm py-1 px-2 md:text-xl text-white'>{data[4]}<br/> {data[5]}</h3>
          </div>
          <div className='text-2xl flex justify-center gap-6 py-3 md:text-3xl'>
            <Link href='https://www.facebook.com/mixcombo.mixer' legacyBehavior><a target="_blank"><AiFillFacebook/></a></Link>
            <Link href='https://www.instagram.com/mixwrw_/' legacyBehavior><a target="_blank"><AiFillInstagram/></a></Link>
            <Link href='https://line.me/ti/p/DpF9hTEhLW' legacyBehavior><a target="_blank"><FaLine/></a></Link>
            <Link href='https://github.com/Mixcombo' legacyBehavior><a target="_blank"><BsGithub/></a></Link>
          </div>
        </section>

        <section className='min-h-fit md:min-h-fit xl:min-h-screen' id='about'>
          <div>
            <h3 className='text-xl py-3 px-10 mb-8 flex justify-center bg-cyan-500 text-white md:text-3xl'>About me</h3>
            <div className='text-center text-sm pb-5 md:text-xl text-white'>
              <p className='px-10'>{about[0]}</p>
              <p className='px-10'>{about[1]}</p>
              <p className='px-10'>{about[2]}</p>
              <p className='px-10'>{about[3]}</p>
              <p className='px-10'>{about[4]}</p>
              <p className='px-10'>{about[5]}</p>
              <p className='px-10'>{about[6]}</p>
            </div>
            <div className='py-3 px-5 flex justify-around items-center md:py-10 md:px-10'> 
              <img src='python.png' alt='python' className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]'/>
              <img src='c.png' alt='c' className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]'/>
              <img src='c++.png' alt='c++' className='w-[40px] h-[45px] md:w-[80px] md:h-[90px]'/>
              <img src='java.png' alt='java' className='w-[30px] h-[40px] md:w-[60px] md:h-[80px]'/>
            </div>
            <div className='py-3 px-5 flex justify-around items-center md:py-5 md:px-10'>
              <img src='javascript.png' alt='javascript' className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]'/>
              <img src='mysql.png' alt='mysql' className='w-[70px] h-[40px] md:w-[140px] md:h-[80px]'/>
              <img src='html.png' alt='html' className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]'/>
              <img src='css.png' alt='css' className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]'/>
            </div>
          </div>
        </section>

        <section className='min-h-fit md:min-h-fit xl:min-h-screen' id='project'>
          <div>
            <h3 className='text-xl py-3 px-10 mb-8 flex justify-center bg-cyan-500 text-white md:text-3xl'>My Projects</h3>
            <div className='flex-wrap lg:flex lg:justify-evenly lg:py-10 text-white'>
              <div className='text-center h-auto px-10'>
                <img src='cat1.jpg' className='rounded-full m-auto w-[100px] h-[100px] md:w-[200px] md:h-[200px]'/>
                <h2 className='text-base md:text-xl'>Year 1</h2>
                <p className='text-xs pb-2 md:text-base'>
                  {project[0]}<br/>
                  {project[1]}<br/>
                </p>
              </div>
              <div className='text-center h-auto px-10'>
                <img src='cat2.jpg' alt='cat2' className='rounded-full m-auto w-[100px] h-[100px] md:w-[200px] md:h-[200px]'/>
                <h2 className='text-base md:text-xl'>Year 2</h2>
                <p className='text-xs pb-2 md:text-base'>
                  {project[2]}<br/>
                  {project[3]}<br/>
                </p>
              </div>
              <div className='text-center h-auto px-10'>
                <img src='cat3.jpg' alt='cat3' className='rounded-full m-auto w-[100px] h-[100px] md:w-[200px] md:h-[200px]'/>
                <h2 className='text-base md:text-xl'>Year 3</h2>
                <p className='text-xs pb-5 md:text-base'>
                  {project[4]}<br/>
                  {project[5]}<br/>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
