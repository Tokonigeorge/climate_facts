/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Beta_Joints: THREE.SkinnedMesh
    Beta_Surface: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    Beta_Joints_MAT: THREE.MeshStandardMaterial
    ['asdf1:Beta_HighLimbsGeoSG2']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Armature|mixamo.com|Layer0'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/first.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.Beta_Joints.geometry}
          material={materials.Beta_Joints_MAT}
          skeleton={nodes.Beta_Joints.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Beta_Surface.geometry}
          material={materials['asdf1:Beta_HighLimbsGeoSG2']}
          skeleton={nodes.Beta_Surface.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/first.glb')
