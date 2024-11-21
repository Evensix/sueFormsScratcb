"use dom";

import { useFormContext } from "@/hooks/useFormProvider";
import { schemaOne } from "@/util/validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGlobalButtonHaptics } from "../global-button-haptics";

type Props = {
  navigate: typeof import("expo-router").router["navigate"];

  ref?: import("react").RefObject<import("react-native-webview").WebView>;
  dom?: import("expo/dom").DOMProps;
};

export default function PageOne({
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
    resolver: yupResolver(schemaOne),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      previousName: "",
      otherNames: "",
      DOB: new Date(),
      gender: "",
      NIN: "",
      racialOrigin: "",
      religion: "",
      language: "",
      accent: "",
    },
  });
  
  const { updateFormData} = useFormContext();
  
  const onSubmit = (data: any) => {
    updateFormData("personalInfo", data);
  }

  return (
    <div className="flex-1 flex-col gap-4 bg-black">
      <h2>Personal Information</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" {...register("firstName")} />
        <p>{errors.firstName?.message}</p>

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" {...register("lastName")}/>
        <p>{errors.lastName?.message}</p>

        <label htmlFor="middleName">Middle Name</label>
        {/* <DropDownInputComponent label="Middle Name" value="" /> */}
        <input id="middleName" {...register("middleName")}/>
        <p>{errors.middleName?.message}</p>

        <label htmlFor="previousName">Previous Name</label>
        <input id="previousName" {...register("previousName")}/>
        <p>{errors.previousName?.message}</p>

        <label htmlFor="otherNames">Other Names</label>
        <input id="otherNames" {...register("otherNames")}/>
        <p>{errors.otherNames?.message}</p>

        <label htmlFor="DOB">Date of Birth</label>
        <input id="DOB" {...register("DOB")} type="date" />
        <p>{errors.DOB?.message}</p>

        <label htmlFor="gender">Gender</label>
        <select 
          id="gender"
          defaultValue={register("gender").name}
          {...register("gender")}
        >
          <option value="select">select</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <p>{errors.gender?.message}</p>

        <label htmlFor="NIN">National Insurance Number</label>
        <input {...register("NIN")}
          type="text"
        />
        <p>{errors.NIN?.message}</p>

        <label htmlFor="racialOrigin">Racial Origin</label>
        <input id="racialOrigin" {...register("racialOrigin")} />
        <p>{errors.racialOrigin?.message}</p>

        <label htmlFor="religion">Religion</label>
        <input id="religion" {...register("religion")} />
        <p>{errors.religion?.message}</p>

        <label htmlFor="language">Language</label>
        <input id="language" {...register("language")} />
        <p>{errors.language?.message}</p>

        <label htmlFor="accent">Accent</label>
        <input id="accent" {...register("accent")}placeholder="accent"/>
        <p>{errors.accent?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
