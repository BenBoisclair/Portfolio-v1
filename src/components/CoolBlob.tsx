"use client";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { useRouter } from "next/navigation";

import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

export default function CoolBlob({
  top,
  bottom,
  left,
  right,
  credits = true,
  className,
  width = 300,
  height = 300,
}: {
  credits?: boolean;
  width?: number;
  height?: number;
  className?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}) {
  const colors = [
    {
      color1: "23f2ef00",
      color2: "23ca1804",
      color3: "23d45900",
    },
    {
      color1: "23008080",
      color2: "23800080",
      color3: "23FF4500",
    },

    {
      color1: "2300FFFF",
      color2: "23FF1493",
      color3: "234B0082",
    },
    {
      color1: "2300CED1",
      color2: "23FF6347",
      color3: "239ACD32",
    },
    {
      color1: "23E6E6FA",
      color2: "23FF4500",
      color3: "2320B2AA",
    },
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const router = useRouter();

  return (
    <div
      style={{
        position: "absolute",
        top,
        bottom,
        left,
        right,
      }}
      className={className}>
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          // Small Box
          width: `${width}px`,
          height: `${height}px`,
        }}>
        <ShaderGradient
          control="query"
          // Small Box Size
          urlString={`https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=3&cAzimuthAngle=120&cDistance=2.8&cPolarAngle=80&cameraZoom=3&color1=%${colors[randomIndex].color1}&color2=%${colors[randomIndex].color2}&color3=%${colors[randomIndex].color3}0&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=3&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&toggleAxis=false&type=sphere&uAmplitude=1&uDensity=1&uFrequency=0&uSpeed=0.3&uStrength=1&uTime=8&wireframe=false`}
          // Full Screen Size
          // urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=3&cAzimuthAngle=120&cDistance=2.8&cPolarAngle=80&cameraZoom=1&color1=%23f2ef00&color2=%23ca1804&color3=%23d45900&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=3&positionX=-1&positionY=-2&positionZ=-6&range=enabled&rangeEnd=40&rangeStart=0&reflection=1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&toggleAxis=false&type=sphere&uAmplitude=1&uDensity=1&uFrequency=0&uSpeed=0.3&uStrength=1&uTime=8&wireframe=false"
          // animate="off"
        />
      </ShaderGradientCanvas>
      {credits && (
        <p className="md:text-xs text-[8px] text-white/60 text-end px-2 py-1 italic">
          Made with ShaderGradient by Ruucm
        </p>
      )}
      <div
        onClick={() => router.push("/blob")}
        className="md:w-[300px] md:h-[300px] h-[170px] w-[170px]  absolute bottom-0 right-0 cursor-pointer"
      />
    </div>
  );
}
