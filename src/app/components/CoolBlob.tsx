import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

export default function CoolBlob({
  top,
  bottom,
  left,
  right,
  className,
  width = 300,
  height = 300,
}: {
  width?: number;
  height?: number;
  className?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}) {
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
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=3&cAzimuthAngle=120&cDistance=2.8&cPolarAngle=80&cameraZoom=3&color1=%23f2ef00&color2=%23ca1804&color3=%23d45900&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=3&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&toggleAxis=false&type=sphere&uAmplitude=1&uDensity=1&uFrequency=0&uSpeed=0.3&uStrength=1&uTime=8&wireframe=false"
          // Full Screen Size
          // urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=3&cAzimuthAngle=120&cDistance=2.8&cPolarAngle=80&cameraZoom=1&color1=%23f2ef00&color2=%23ca1804&color3=%23d45900&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=3&positionX=-1&positionY=-2&positionZ=-6&range=enabled&rangeEnd=40&rangeStart=0&reflection=1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&toggleAxis=false&type=sphere&uAmplitude=1&uDensity=1&uFrequency=0&uSpeed=0.3&uStrength=1&uTime=8&wireframe=false"
          // animate="off"
        />
      </ShaderGradientCanvas>
      <p className="md:text-xs text-[8px] text-white/60 text-end px-2 py-1">
        Made with ShaderGradient by Ruucm
      </p>
      <div className="w-[300px] h-[300px]  absolute bottom-0 right-0" />
    </div>
  );
}
