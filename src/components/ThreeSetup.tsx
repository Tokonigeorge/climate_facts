import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import First from "./First"
import { OrbitControls } from "@react-three/drei";

export default function ThreeSetup () {
    return(
        <Canvas>
            <OrbitControls/>
            <directionalLight intensity={0.5}/>
            <ambientLight intensity={0.2}/>
            <First/>
        </Canvas>
    )
}