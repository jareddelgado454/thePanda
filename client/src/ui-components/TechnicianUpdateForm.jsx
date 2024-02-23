/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTechnician } from "../graphql/queries";
import { updateTechnician } from "../graphql/mutations";
const client = generateClient();
export default function TechnicianUpdateForm(props) {
  const {
    id: idProp,
    technician: technicianModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fullName: "",
    contactNumber: "",
    email: "",
    password: "",
    status: "",
    address: "",
    city: "",
    state: "",
    createdAt: "",
    fee: "",
  };
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [contactNumber, setContactNumber] = React.useState(
    initialValues.contactNumber
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [password, setPassword] = React.useState(initialValues.password);
  const [status, setStatus] = React.useState(initialValues.status);
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [fee, setFee] = React.useState(initialValues.fee);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = technicianRecord
      ? { ...initialValues, ...technicianRecord }
      : initialValues;
    setFullName(cleanValues.fullName);
    setContactNumber(cleanValues.contactNumber);
    setEmail(cleanValues.email);
    setPassword(cleanValues.password);
    setStatus(cleanValues.status);
    setAddress(cleanValues.address);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setCreatedAt(cleanValues.createdAt);
    setFee(cleanValues.fee);
    setErrors({});
  };
  const [technicianRecord, setTechnicianRecord] =
    React.useState(technicianModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTechnician.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTechnician
        : technicianModelProp;
      setTechnicianRecord(record);
    };
    queryData();
  }, [idProp, technicianModelProp]);
  React.useEffect(resetStateValues, [technicianRecord]);
  const validations = {
    fullName: [{ type: "Required" }],
    contactNumber: [{ type: "Required" }],
    email: [{ type: "Required" }],
    password: [{ type: "Required" }],
    status: [{ type: "Required" }],
    address: [{ type: "Required" }],
    city: [{ type: "Required" }],
    state: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    fee: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fullName,
          contactNumber,
          email,
          password,
          status,
          address,
          city,
          state,
          createdAt,
          fee,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateTechnician.replaceAll("__typename", ""),
            variables: {
              input: {
                id: technicianRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TechnicianUpdateForm")}
      {...rest}
    >
      <TextField
        label="Full name"
        isRequired={true}
        isReadOnly={false}
        value={fullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName: value,
              contactNumber,
              email,
              password,
              status,
              address,
              city,
              state,
              createdAt,
              fee,
            };
            const result = onChange(modelFields);
            value = result?.fullName ?? value;
          }
          if (errors.fullName?.hasError) {
            runValidationTasks("fullName", value);
          }
          setFullName(value);
        }}
        onBlur={() => runValidationTasks("fullName", fullName)}
        errorMessage={errors.fullName?.errorMessage}
        hasError={errors.fullName?.hasError}
        {...getOverrideProps(overrides, "fullName")}
      ></TextField>
      <TextField
        label="Contact number"
        isRequired={true}
        isReadOnly={false}
        value={contactNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              contactNumber: value,
              email,
              password,
              status,
              address,
              city,
              state,
              createdAt,
              fee,
            };
            const result = onChange(modelFields);
            value = result?.contactNumber ?? value;
          }
          if (errors.contactNumber?.hasError) {
            runValidationTasks("contactNumber", value);
          }
          setContactNumber(value);
        }}
        onBlur={() => runValidationTasks("contactNumber", contactNumber)}
        errorMessage={errors.contactNumber?.errorMessage}
        hasError={errors.contactNumber?.hasError}
        {...getOverrideProps(overrides, "contactNumber")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              contactNumber,
              email: value,
              password,
              status,
              address,
              city,
              state,
              createdAt,
              fee,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              contactNumber,
              email,
              password: value,
              status,
              address,
              city,
              state,
              createdAt,
              fee,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={true}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              contactNumber,
              email,
              password,
              status: value,
              address,
              city,
              state,
              createdAt,
              fee,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              contactNumber,
              email,
              password,
              status,
              address: value,
              city,
              state,
              createdAt,
              fee,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              contactNumber,
              email,
              password,
              status,
              address,
              city: value,
              state,
              createdAt,
              fee,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={true}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              contactNumber,
              email,
              password,
              status,
              address,
              city,
              state: value,
              createdAt,
              fee,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              contactNumber,
              email,
              password,
              status,
              address,
              city,
              state,
              createdAt: value,
              fee,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Fee"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={fee}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              fullName,
              contactNumber,
              email,
              password,
              status,
              address,
              city,
              state,
              createdAt,
              fee: value,
            };
            const result = onChange(modelFields);
            value = result?.fee ?? value;
          }
          if (errors.fee?.hasError) {
            runValidationTasks("fee", value);
          }
          setFee(value);
        }}
        onBlur={() => runValidationTasks("fee", fee)}
        errorMessage={errors.fee?.errorMessage}
        hasError={errors.fee?.hasError}
        {...getOverrideProps(overrides, "fee")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || technicianModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || technicianModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
