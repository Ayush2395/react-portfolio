import React from "react";
import Particles from "react-tsparticles";
import { particlesConfig } from "./particles.config";

export default function ParticlesBackground() {
  return (
    <>
      <Particles params={particlesConfig} className="particles"></Particles>
    </>
  );
}
