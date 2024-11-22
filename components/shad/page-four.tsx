"use dom";
// import "@/global.css";
import { CameraType, CameraView, useCameraPermissions,  } from "expo-camera";
import { useRef, useState } from "react";
import { useGlobalButtonHaptics } from "../global-button-haptics";

type Props = {
  navigate: typeof import("expo-router").router["navigate"];

  ref?: import("react").RefObject<import("react-native-webview").WebView>;
  dom?: import("expo/dom").DOMProps;
};

export default function PageFour({
  navigate,
  onCameraButtonClick,
  onButtonClick,
}: {
  navigate: typeof import("expo-router").router["navigate"];
  dom?: import("expo/dom").DOMProps;
  ref?: import("react").RefObject<import("react-native-webview").WebView>;
  onButtonClick: (size: number) => Promise<void>;
  onCameraButtonClick: (size: number) => Promise<void>;
}) {
  useGlobalButtonHaptics(onButtonClick);
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <div />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <div >
        <h2 >We need your permission to show the camera on desktop</h2>
        <button onClick={requestPermission}  >grant permission</button>
      </div>
    );
  }

  return (
    <div className="bg-white flex-1 flex-col gap-4 overflow-y-scroll form-style">
      <h2>Appearance</h2>
        <CameraView  ref={ref} style={{ flex: 1, width: "100%", height: "100%",justifyContent: "end"  }} facing="front">
          <div className="flex flex-row gap-4 justify-center w-full h-fit z-10">
            <button onClick={()=>console.log(ref.current?.takePictureAsync())} className="bg-blue-500 text-white py-2 px-4 rounded">Take Photo</button>
          </div>         
        </CameraView>
    </div>
  );
}
