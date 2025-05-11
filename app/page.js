import AnimatedBeamDemo from "@/components/About/About";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import { Work } from "@/components/Work/Work";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AnimatedBeamDemo></AnimatedBeamDemo>
      <Skills></Skills>
      {/* <Services></Services> */}
      <Work></Work>
    </>
  );
}
