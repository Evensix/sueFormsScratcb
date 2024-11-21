"use dom";

import { schemaTwo } from "@/util/validation/validation";
import { useGlobalButtonHaptics } from "../global-button-haptics";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useFormContext } from "@/hooks/useFormProvider";

type Props = {
  navigate: typeof import("expo-router").router["navigate"];

  ref?: import("react").RefObject<import("react-native-webview").WebView>;
  dom?: import("expo/dom").DOMProps;
};

export default function PageTwo({
  navigate,
  onButtonClick,
}: {
  navigate: typeof import("expo-router").router["navigate"];
  dom?: import("expo/dom").DOMProps;
  ref?: import("react").RefObject<import("react-native-webview").WebView>;
  onButtonClick: (size: number) => Promise<void>;
}) {
  useGlobalButtonHaptics(onButtonClick);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaTwo),
    defaultValues: {
        legalStatus: "",
        admissionDate: new Date(),
        publishingAuthority: "",
        localAuthority: "",
        keyWorker: "",
        lastLacDate: new Date(),
        nextLacDate: new Date(),
        dischargeDate: new Date(),
    },
  });

  const { updateFormData} = useFormContext();
  
  const onSubmit = (data: any) => {
    updateFormData("careHistory", data);
  }
  return (
    <div>
      <h2>Care History</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("legalStatus")}
          placeholder="Legal Status"
        />
        <p>{errors.legalStatus?.message}</p>
        <input
          {...register("admissionDate")}          
          placeholder="Admission Date"
        />
        <p>{errors.admissionDate?.message}</p>
        <input
          {...register("publishingAuthority")}          
          placeholder="Publishing Authority"
        />
        <p>{errors.publishingAuthority?.message}</p>
        <input
          {...register("localAuthority")}          
          placeholder="Local Authority"
        />
        <p>{errors.localAuthority?.message}</p>
        <input
          {...register("keyWorker")}          
          placeholder="Key Worker"
        />
        <p>{errors.keyWorker?.message}</p>
        <input
          {...register("lastLacDate")}          
          placeholder="Last LAC Date"
        />
        <p>{errors.lastLacDate?.message}</p>
        <input
          {...register("nextLacDate")}          
          placeholder="Next LAC Date"
        />
        <p>{errors.nextLacDate?.message}</p>
        <input
          {...register("dischargeDate")}          
          placeholder="Discharge Date"
        />
        <p>{errors.dischargeDate?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}