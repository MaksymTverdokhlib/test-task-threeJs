import {
  useContext,
  useEffect,
  useRef,
} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "./Environment";
import { Context } from "../App";

function Parent() {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const childRef2 = useRef(null);
  const childRef3 = useRef(null);
  const childRef4 = useRef(null);

  const {
    countertopWidth,
    countertopHeight,
    countertopDepth,
    countertopColor,
    legsColor,
  } = useContext(Context);

  const { size } = useThree();

  useEffect(() => {
    const parentWidth = parentRef.current.geometry.parameters.width;
    const parentHeight = parentRef.current.geometry.parameters.height;
    const parentDepth = parentRef.current.geometry.parameters.depth;

    const childWidth = childRef.current.geometry.parameters.width;

    const childX = parentWidth * 0.5 - childWidth * 0.5;

    childRef.current.position.set(
      childX,
      parentDepth < 1
        ? -parentDepth / 2 - 0.5
        : parentDepth % 2 === 0
        ? Math.round(-parentDepth / 2) - 0.5
        : Math.round(-parentDepth / 2) - 1,
      parentHeight % 2 === 0
        ? parentHeight / 2 - 0.5
        : Math.floor(parentHeight / 2)
    );

    childRef2.current.position.set(
      childX,
      parentDepth < 1
        ? -parentDepth / 2 - 0.5
        : parentDepth % 2 === 0
        ? Math.round(-parentDepth / 2) - 0.5
        : Math.round(-parentDepth / 2) - 1,
      parentHeight % 2 === 0
        ? -(parentHeight / 2 - 0.5)
        : -Math.floor(parentHeight / 2)
    );

    childRef3.current.position.set(
      -childX,
      parentDepth < 1
        ? -parentDepth / 2 - 0.5
        : parentDepth % 2 === 0
        ? Math.round(-parentDepth / 2) - 0.5
        : Math.round(-parentDepth / 2) - 1,
      parentHeight % 2 === 0
        ? -(parentHeight / 2 - 0.5)
        : -Math.floor(parentHeight / 2)
    );

    childRef4.current.position.set(
      -childX,
      parentDepth < 1
        ? -parentDepth / 2 - 0.5
        : parentDepth % 2 === 0
        ? Math.round(-parentDepth / 2) - 0.5
        : Math.round(-parentDepth / 2) - 1,
      parentHeight % 2 === 0
        ? parentHeight / 2 - 0.5
        : Math.floor(parentHeight / 2)
    );
  }, [size]);

  return (
    <>
      <group>
        <mesh
          ref={parentRef}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        >
          <boxBufferGeometry
            args={[countertopWidth, countertopHeight, countertopDepth]}
          />
          <meshBasicMaterial color={countertopColor} />
        </mesh>
        <mesh position={[0, -1, 0]} ref={childRef}>
          <boxBufferGeometry args={[0.5, 1, 1]} />
          <meshBasicMaterial color={legsColor} />
        </mesh>

        <mesh position={[0, -1, 0]} ref={childRef2}>
          <boxBufferGeometry args={[0.5, 1, 1]} />
          <meshBasicMaterial color={legsColor} />
        </mesh>
        <mesh position={[0, -1, 0]} ref={childRef3}>
          <boxBufferGeometry args={[0.5, 1, 1]} />
          <meshBasicMaterial color={legsColor} />
        </mesh>
        <mesh position={[0, -1, 0]} ref={childRef4}>
          <boxBufferGeometry args={[0.5, 1, 1]} />
          <meshBasicMaterial color={legsColor} />
        </mesh>
      </group>
    </>
  );
}

export default function HouseWrapper() {
  return (
    <Canvas shadows camera={{ position: [-15, 10, 15], fov: 25 }}>
      <color attach="background" args={["skyblue"]} />
      <Parent />
      <Environment />
      <OrbitControls makeDefault />
    </Canvas>
  );
}
