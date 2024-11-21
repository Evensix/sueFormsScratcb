"use dom";

import { useFormContext } from "@/hooks/useFormProvider";
import { schemaOne } from "@/util/validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGlobalButtonHaptics } from "../global-button-haptics";
import { DropDownInput } from "../AddListInput";
import { DateInput } from "../DateInput";
import { ComboBoxInput } from "../ComboBox";
import { RichTextInput } from "../RichTextInput";

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

  const { updateFormData } = useFormContext();

  const onSubmit = (data: any) => {
    updateFormData("personalInfo", data);
  };

  return (
    <div className="bg-white flex-1 flex-col gap-4 overflow-y-scroll form-style">
      <h2>Personal Information</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-[15rem]"
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" {...register("lastName")} />
          <p>{errors.lastName?.message}</p>
        </div>

        <div>
          <label htmlFor="middleName">Middle Name</label>
          <DropDownInput label="Middle Name" value="" />
          {/* <input id="middleName" {...register("middleName")}/> */}
          <p>{errors.middleName?.message}</p>
        </div>

        <div>
          <label htmlFor="previousName">Previous Name</label>
          <input id="previousName" {...register("previousName")} />
          <p>{errors.previousName?.message}</p>
        </div>

        <div>
          <label htmlFor="otherNames">Other Names</label>
          <input id="otherNames" {...register("otherNames")} />
          <p>{errors.otherNames?.message}</p>
        </div>

        <div>
          <label htmlFor="DOB">Date of Birth</label>
          <DateInput label="Date of Birth" value="" />
          {/* <input id="DOB" {...register("DOB")} type="date" /> */}
          <p>{errors.DOB?.message}</p>
        </div>

        <ComboBoxInput
          label="Gender"
          options={["Male", "Female", "Other"]}
          value=""
          hint="think about it"
          example="example"
        />

        <div>
          <label htmlFor="NIN">National Insurance Number</label>
          <input {...register("NIN")} type="text" />
          <p>{errors.NIN?.message}</p>
        </div>

        <div>
          <label htmlFor="racialOrigin">Racial Origin</label>
          <input id="racialOrigin" {...register("racialOrigin")} />
          <p>{errors.racialOrigin?.message}</p>
        </div>

        <div>
          <label htmlFor="religion">Religion</label>
          <input id="religion" {...register("religion")} />
          <p>{errors.religion?.message}</p>
        </div>

        <div>
          <label htmlFor="language">Language</label>
          <input id="language" {...register("language")} />
          <p>{errors.language?.message}</p>
        </div>

        <div>
          <RichTextInput
            label="Accent"
            value=""
            hint="hint"
            example="example"
          />
          <p>{errors.accent?.message}</p>
        </div>

        <button  type="submit">Continue</button>
      </form>
    </div>
  );
}
