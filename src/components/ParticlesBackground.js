import React from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "./config/particles-config";

export default function ParticlesBackground() {
  return (
    <>
      <Particles params={ParticlesConfig} className="particles"></Particles>
    </>
  );
}
