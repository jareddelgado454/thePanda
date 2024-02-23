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
import { getUser } from "../graphql/queries";
import { updateUser } from "../graphql/mutations";
const client = generateClient();
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    token: "",
    rol: "",
    fullName: "",
    contactNumber: "",
    createdAt: "",
    status: "",
    address: "",
    city: "",
    state: "",
    profilePicture: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [token, setToken] = React.useState(initialValues.token);
  const [rol, setRol] = React.useState(initialValues.rol);
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [contactNumber, setContactNumber] = React.useState(
    initialValues.contactNumber
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [status, setStatus] = React.useState(initialValues.status);
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [profilePicture, setProfilePicture] = React.useState(
    initialValues.profilePicture
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setEmail(cleanValues.email);
    setToken(cleanValues.token);
    setRol(cleanValues.rol);
    setFullName(cleanValues.fullName);
    setContactNumber(cleanValues.contactNumber);
    setCreatedAt(cleanValues.createdAt);
    setStatus(cleanValues.status);
    setAddress(cleanValues.address);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setProfilePicture(cleanValues.profilePicture);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUser
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    email: [{ type: "Required" }],
    token: [{ type: "Required" }],
    rol: [{ type: "Required" }],
    fullName: [{ type: "Required" }],
    contactNumber: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    status: [{ type: "Required" }],
    address: [],
    city: [{ type: "Required" }],
    state: [{ type: "Required" }],
    profilePicture: [{ type: "Required" }],
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
          email,
          token,
          rol,
          fullName,
          contactNumber,
          createdAt,
          status,
          address: address ?? null,
          city,
          state,
          profilePicture,
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
            query: updateUser.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userRecord.id,
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              token,
              rol,
              fullName,
              contactNumber,
              createdAt,
              status,
              address,
              city,
              state,
              profilePicture,
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
        label="Token"
        isRequired={true}
        isReadOnly={false}
        value={token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              token: value,
              rol,
              fullName,
              contactNumber,
              createdAt,
              status,
              address,
              city,
              state,
              profilePicture,
            };
            const result = onChange(modelFields);
            value = result?.token ?? value;
          }
          if (errors.token?.hasError) {
            runValidationTasks("token", value);
          }
          setToken(value);
        }}
        onBlur={() => runValidationTasks("token", token)}
        errorMessage={errors.token?.errorMessage}
        hasError={errors.token?.hasError}
        {...getOverrideProps(overrides, "token")}
      ></TextField>
      <TextField
        label="Rol"
        isRequired={true}
        isReadOnly={false}
        value={rol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              token,
              rol: value,
              fullName,
              contactNumber,
              createdAt,
              status,
              address,
              city,
              state,
              profilePicture,
            };
            const result = onChange(modelFields);
            value = result?.rol ?? value;
          }
          if (errors.rol?.hasError) {
            runValidationTasks("rol", value);
          }
          setRol(value);
        }}
        onBlur={() => runValidationTasks("rol", rol)}
        errorMessage={errors.rol?.errorMessage}
        hasError={errors.rol?.hasError}
        {...getOverrideProps(overrides, "rol")}
      ></TextField>
      <TextField
        label="Full name"
        isRequired={true}
        isReadOnly={false}
        value={fullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              token,
              rol,
              fullName: value,
              contactNumber,
              createdAt,
              status,
              address,
              city,
              state,
              profilePicture,
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
              email,
              token,
              rol,
              fullName,
              contactNumber: value,
              createdAt,
              status,
              address,
              city,
              state,
              profilePicture,
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
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              token,
              rol,
              fullName,
              contactNumber,
              createdAt: value,
              status,
              address,
              city,
              state,
              profilePicture,
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
        label="Status"
        isRequired={true}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              token,
              rol,
              fullName,
              contactNumber,
              createdAt,
              status: value,
              address,
              city,
              state,
              profilePicture,
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
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              token,
              rol,
              fullName,
              contactNumber,
              createdAt,
              status,
              address: value,
              city,
              state,
              profilePicture,
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
              email,
              token,
              rol,
              fullName,
              contactNumber,
              createdAt,
              status,
              address,
              city: value,
              state,
              profilePicture,
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
              email,
              token,
              rol,
              fullName,
              contactNumber,
              createdAt,
              status,
              address,
              city,
              state: value,
              profilePicture,
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
        label="Profile picture"
        isRequired={true}
        isReadOnly={false}
        value={profilePicture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              token,
              rol,
              fullName,
              contactNumber,
              createdAt,
              status,
              address,
              city,
              state,
              profilePicture: value,
            };
            const result = onChange(modelFields);
            value = result?.profilePicture ?? value;
          }
          if (errors.profilePicture?.hasError) {
            runValidationTasks("profilePicture", value);
          }
          setProfilePicture(value);
        }}
        onBlur={() => runValidationTasks("profilePicture", profilePicture)}
        errorMessage={errors.profilePicture?.errorMessage}
        hasError={errors.profilePicture?.hasError}
        {...getOverrideProps(overrides, "profilePicture")}
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
          isDisabled={!(idProp || userModelProp)}
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
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
