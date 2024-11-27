'use client'
import Image from "next/image";
import styles from "./page.module.css";
import AnimalList from "./animalList";
import { imagenes } from "./data";
import ImageCarousel from "./imageCarousel";
import Library from "./library";

export default function Home() {
  return (
    <div>
      <AnimalList/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ImageCarousel imagenes={imagenes}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Library/>
    </div>
  );
}
