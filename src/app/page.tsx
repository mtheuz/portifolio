"use client";
import Image from "next/image";
import Container from "./component/Container";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbPick } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  const selectionButton = () => {};
  const [aboutMe, setAboutMe] = useState("");

  let contentAboutMe;
  if (aboutMe == "sobreMim") {
    contentAboutMe = (
      <p className="text-white max-w-[600px] ">
        Graduando em Engenharia da Computação pela Universidade Estadual de
        Feira de Santana (UEFS), atualmente no 6º semestre do curso. Na
        graduação, adoto a metodologia PBL (Problem Based Learning),
      </p>
    );
  } else if (aboutMe == "formaçao" || aboutMe == "") {
    contentAboutMe = (
      <p className="text-white max-w-[600px] ">
        Graduando em Engenharia da Computação pela Universidade Estadual de
        Feira de Santana (UEFS), atualmente no 6º semestre do curso. Na
        graduação, adoto a metodologia PBL (Problem Based Learning), centrada no
        aprendizado por meio da resolução de problemas reais. Essa abordagem não
        apenas fortalece minhas habilidades técnicas, permitindo-me trabalhar
        com diversas linguagens de programação e técnicas, mas também promove o
        desenvolvimento de soft skills essenciais, como comunicação eficaz e
        trabalho em equipe.
      </p>
    );
  } else if (aboutMe == "complementar") {
    contentAboutMe = (
      <p className="text-white max-w-[600px] ">
        + Diretor de Projetos | EcompJR : 
      </p>
    );
  }

  return (
    <main className="bg-black scrollbar scrollbar-thumb-yellow-primary scrollbar-track-slate-800 h-screen overflow-y-scroll">
      <section>
        <Container className="">
          <div className="flex justify-center md:justify-between items-center">
            <div className=" space-y-8">
              <h1 className="text-white text-xl md:text-5xl font-semibold ">
                Desenvolvedor
                <span className="text-yellow-primary ">
                  {" "}
                  <TypeAnimation
                    sequence={[
                      "Front-end",
                      1000,
                      "de Software",
                      1000,
                      "Full-stack",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-xl md:text-5xl"
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <div className="flex md:hidden justify-center w-60 h-60 md:w-[400px] md:h-[400px] md:min-w-[400px] min-w-60 relative">
                <Image src={"/art.png"} fill={true} alt={"img"} />
              </div>
              <p className="text-white max-w-[656px]">
                Desenvolvedor de software, estudante do 6° semestre de
                Engenharia de computação e atual Diretor de Projetos da EcompJr.
              </p>
              <div className="flex justify-center md:justify-start gap-7">
                <button className=" border-2 border-white min-w-32 md:min-w-40 text-sm font-semibold rounded-md bg-gradient-to-r  from-green-400 to-green-button-primary py-3 ">
                  Open the Work
                </button>
                <Link
                  target="_blank"
                  href={"/curriculo-matheu-mota.pdf"}
                  download={"curriculo-matheu-mota.pdf"}
                  className="flex justify-center border-2 border-white min-w-32   md:min-w-40 text-sm font-semibold rounded-md bg-gradient-to-r hover:bg-gradient-to-l from-yellow-300 to-yellow-400 py-3 "
                >
                  Download curriculo
                </Link>
              </div>
              <div className="flex gap-3 justify-center md:justify-start">
                <Link
                  href={"https://www.linkedin.com/in/matheus-mota-2615361b9/"}
                  target="_blank"
                >
                  <FaLinkedin color="white" size={20} />
                </Link>
                <Link
                  href={"https://www.instagram.com/mtheuz._/"}
                  target="_blank"
                >
                  <FaInstagram color="white" size={20} />
                </Link>
                <Link href={"https://github.com/mtheuz"} target="_blank">
                  <FaGithub color="white" size={20} />
                </Link>
              </div>
            </div>

            <div className="hidden md:flex w-60 h-60 md:w-[400px] md:h-[400px] md:min-w-[400px] min-w-60 relative">
              <Image src={"/art.png"} fill={true} alt={"img"} />
            </div>
          </div>
          <div className="mt-14 animate-bounce flex w-full gap-8 justify-center">
            <div className="w-10 h-14 min-w-11 relative">
              <Image src={"/arrow.png"} fill={true} alt={"img"} />
            </div>
            <div className="w-10 h-14 min-w-11 relative">
              <Image src={"/arrow.png"} fill={true} alt={"img"} />
            </div>
            <div className="w-10 h-14 min-w-11 relative">
              <Image src={"/arrow.png"} fill={true} alt={"img"} />
            </div>
            <div className="w-10 h-14 min-w-11 relative">
              <Image src={"/arrow.png"} fill={true} alt={"img"} />
            </div>
          </div>

          <section className="flex flex-col md:flex-row justify-center items-center mt-32 text-justify gap-20">
            <div className=" w-80 h-80 min-w-80 relative">
              <Image
                className="rounded-xl border-4 transition-transform hover:scale-105 duration-300 delay-150 border-yellow-primary"
                src={"/perfil.jpeg"}
                fill={true}
                alt={"img"}
              />
            </div>

            <div>
              <div className="flex rounded-lg min-w-[576px] md:min-w-[276px] h-14 mb-6 bg-slate-800 justify-evenly items-center">
                <button
                  onClick={() => setAboutMe("sobreMim")}
                  className="h-10 m-0 w-48 rounded-lg hover:bg-slate-900  text-white active:bg-white active:text-yellow-primary font-semibold"
                >
                  Sobre mim
                </button>
                <button
                  onClick={() => setAboutMe("formaçao")}
                  className="h-10 m-0 w-48 rounded-lg hover:bg-slate-900  text-white active:bg-white active:text-yellow-primary font-semibold"
                >
                  Formação
                </button>
                <button
                  onClick={() => setAboutMe("complementar")}
                  className="h-10 m-0 w-48 rounded-lg hover:bg-slate-900  text-white active:bg-white active:text-yellow-primary font-semibold"
                > 
                  Experiencia
                </button>
              </div>
              <div className="min-h-[250px]">{contentAboutMe}</div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-center gap-1 mt-10">
              <TbPick className="animate-bounce" color="#FFA800"  size={35}/>
              <h1 className=" text-yellow-primary text-center text-4xl font-semibold ">
                SKILLS
              </h1>
            </div>

            <div className="flex mt-16 mx-40 justify-between ">
              <div>
                <h2 className="text-white text-3xl font-semibold">
                  Soft Skills
                </h2>
              </div>
              <div>
                <h2 className="text-white text-3xl font-semibold mb-20">
                  Hard Skills
                </h2>
                <ul className="text-white">
                  <li className="flex items-center gap-4">
                    <IoLogoJavascript size={20} color="white" />
                    JavaScript
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </main>
  );
}
