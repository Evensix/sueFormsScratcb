"use dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import "@/global.css";

import { useGlobalButtonHaptics } from "../global-button-haptics";
import { schemaThree } from "@/util/validation/validation";
import { useFormContext } from "@/hooks/useFormProvider";

type Props = {
    navigate: typeof import("expo-router").router["navigate"];
  
    ref?: import("react").RefObject<import("react-native-webview").WebView>;
    dom?: import("expo/dom").DOMProps;
  };
  
export default function PageThree({
    navigate,
    onButtonClick,
  }: {
    navigate: typeof import("expo-router").router["navigate"];
    dom?: import("expo/dom").DOMProps;
    ref?: import("react").RefObject<import("react-native-webview").WebView>;
    onButtonClick: (size: number) => Promise<void>;
  }) {
    useGlobalButtonHaptics(onButtonClick);
  
    const {register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schemaThree),
        defaultValues: {
            previousAddress: "",
            homeAddress: "",
            homePhone: "",
            cellPhone: "",
            email: "",
        },
      });



      const { updateFormData} = useFormContext();
  
      const onSubmit = (data: any) => {
        updateFormData("contactDetails", data);
      }

    return (
      <div className="mt-4 flex flex-col">
        <h2>Contact Details</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="previousAddress">Previous Address</label>
            <input id="previousAddress" type="text" {...register("previousAddress")}  />
            <p>{errors.previousAddress?.message}</p>

            <label htmlFor="homeAddress">Home Address</label>
            <input id="homeAddress" type="text" {...register("homeAddress")} />
            <p>{errors.homeAddress?.message}</p>

            <label htmlFor="homePhone">Home Phone</label>
            <input id="homePhone"  type="text" {...register("homePhone")} />
            <p>{errors.homePhone?.message}</p>

            <label htmlFor="cellPhone">Cell Phone</label>
            <input id="cellPhone" type="text" {...register("cellPhone")} placeholder="Cell Phone"/>
            <p>{errors.cellPhone?.message}</p>

            <label htmlFor="email">Email</label>
            <input id="email" type="text" {...register("email")}  placeholder="Email"/>
            <p>{errors.email?.message}</p>

            <button type="submit">Submit</button>

        </form>
      </div>
    );
}