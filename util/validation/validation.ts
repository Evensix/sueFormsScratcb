import * as yup from "yup";
export const schemaOne = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    middleName: yup.string().required(),
    previousName: yup.string().required(),
    otherNames: yup.string().required(),
    DOB: yup.date().required(),
    gender: yup.string().required(),
    NIN: yup.string().required(),
    racialOrigin: yup.string().required(),
    religion: yup.string().required(),
    language: yup.string().required(),
    accent: yup.string().required(),
  })
  .required();

export const schemaTwo = yup
  .object({
    legalStatus: yup.string().required(),
    admissionDate: yup.date().required(),
    publishingAuthority: yup.string().required(),
    localAuthority: yup.string().required(),
    keyWorker: yup.string().required(),
    lastLacDate: yup.date().required(),
    nextLacDate: yup.date().required(),
    dischargeDate: yup.date().required(),
  })
  .required();

export const schemaThree = yup
  .object({
    previousAddress: yup.string().required(),
    homeAddress: yup.string().required(),
    homePhone: yup.string().required(),
    cellPhone: yup.string().required(),
    email: yup.string().required(),
  })
  .required();