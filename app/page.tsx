"use client"

import styles from "./page.module.css";

import { useState } from "react";
import { Data } from "@/data";

export default function Home() {

  const [innerOne, setInnerOne] = useState("")
  const [innerTwo, setInnerTwo] = useState("")
  const [innerThree, setInnerThree] = useState("")
  const [innerFour, setInnerFour] = useState("")
  const [innerFive, setInnerFive] = useState("")
  const [innerSix, setInnerSix] = useState("")
  const [innerSeven, setInnerSeven] = useState("")
  const [innerEight, setInnerEight] = useState("")
  const [innerNine, setInnerNine] = useState("")
  const [innerTen, setInnerTen] = useState("")

  const setInner = (set: () => void) => {
    setInnerOne("")
    setInnerTwo("")
    setInnerThree("")
    setInnerFour("")
    setInnerFive("")
    setInnerSix("")
    setInnerSeven("")
    setInnerEight("")
    setInnerNine("")
    setInnerTen("")
    set()
  }

  const [outerOne, setOuterOne] = useState("")
  const [outerTwo, setOuterTwo] = useState("")
  const [outerThree, setOuterThree] = useState("")
  const [outerFour, setOuterFour] = useState("")
  const [outerFive, setOuterFive] = useState("")
  const [outerSix, setOuterSix] = useState("")
  const [outerSeven, setOuterSeven] = useState("")
  const [outerEight, setOuterEight] = useState("")

  const setOuter =  (set: () => void) =>  {
    setOuterOne("")
    setOuterTwo("")
    setOuterThree("")
    setOuterFour("")
    setOuterFive("")
    setOuterSix("")
    setOuterSeven("")
    setOuterEight("")
    set()
  }


  const skills: string[] = []

  for (let i = 0; i < Data.length; i++) {
    Data[i].mainSkills.map(main => {
      if (!(skills.includes(main))) {
        skills.push(main)
      }
    })
    Data[i].otherSkills.map(main => {
      if (!(skills.includes(main))) {
        skills.push(main)
      }
    })
  }

  console.log(skills.length)


  return (
    <div className="outerCircle">

      <div onClick={() => setOuter(() => setOuterOne("outerActive outerOne__active"))} className={`outer outerOne ${outerOne}`}></div>
      <div onClick={() => setOuter(() => setOuterTwo("outerActive outerTwo__active"))} className={`outer outerTwo ${outerTwo}`}></div>
      <div onClick={() => setOuter(() => setOuterThree("outerActive outerThree__active"))} className={`outer outerThree ${outerThree}`}></div>
      <div onClick={() => setOuter(() => setOuterFour("outerActive outerFour__active"))} className={`outer outerFour ${outerFour}`}></div>
      <div onClick={() => setOuter(() => setOuterFive("outerActive outerFive__active"))} className={`outer outerFive ${outerFive}`}></div>
      <div onClick={() => setOuter(() => setOuterSix("outerActive outerSix__active"))} className={`outer outerSix ${outerSix}`}></div>
      <div onClick={() => setOuter(() => setOuterSeven("outerActive outerSeven__active"))} className={`outer outerSeven ${outerSeven}`}></div>
      <div onClick={() => setOuter(() => setOuterEight("outerActive outerEight__active"))} className={`outer outerEight ${outerEight}`}></div>

      <div onClick={() => setOuter(() => setOuterEight("outerActive outerTwentyTwo__active"))} className={`outer outerTwentyTwo `}></div>

      {/* <div className={styles.outerCircle__divTwo}></div>

      <div className={styles.outerCircle__divThree}></div>

      <div className={styles.outerCircle__divFour}></div> */}



      <div className="innerCircle">
        <div onClick={() => setInner(() => setInnerOne("innerActive innerOne__active"))} className={`inner innerOne ${innerOne}`}></div>
        <div onClick={() => setInner(() => setInnerTwo("innerActive innerTwo__active"))} className={`inner innerTwo ${innerTwo}`}></div>
        <div onClick={() => setInner(() => setInnerThree("innerActive innerThree__active"))} className={`inner innerThree ${innerThree}`}></div>
        <div onClick={() => setInner(() => setInnerFour("innerActive innerFour__active"))} className={`inner innerFour ${innerFour}`}></div>
        <div onClick={() => setInner(() => setInnerFive("innerActive innerFive__active"))} className={`inner innerFive ${innerFive}`}></div>
        <div onClick={() => setInner(() => setInnerSix("innerActive innerSix__active"))} className={`inner innerSix ${innerSix}`}></div>
        <div onClick={() => setInner(() => setInnerSeven("innerActive innerSeven__active"))} className={`inner innerSeven ${innerSeven}`}></div>
        <div onClick={() => setInner(() => setInnerEight("innerActive innerEight__active"))} className={`inner innerEight ${innerEight}`}></div>
        <div onClick={() => setInner(() => setInnerNine("innerActive innerNine__active"))} className={`inner innerNine ${innerNine}`}></div>
        <div onClick={() => setInner(() => setInnerTen("innerActive innerTen__active"))} className={`inner innerTen ${innerTen}`}></div>
      </div>
    </div>
  )
}
