import { Suspense } from "react";
import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import Earth from "../components/earth";

const canvasCss = css`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export default function Home() {
  return (
    <div css={canvasCss}>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}
