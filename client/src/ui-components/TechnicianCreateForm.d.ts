/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TechnicianCreateFormInputValues = {
    fullName?: string;
    contactNumber?: string;
    email?: string;
    password?: string;
    status?: string;
    address?: string;
    city?: string;
    state?: string;
    createdAt?: string;
    fee?: number;
};
export declare type TechnicianCreateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    contactNumber?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    fee?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechnicianCreateFormOverridesProps = {
    TechnicianCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    contactNumber?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    fee?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TechnicianCreateFormProps = React.PropsWithChildren<{
    overrides?: TechnicianCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TechnicianCreateFormInputValues) => TechnicianCreateFormInputValues;
    onSuccess?: (fields: TechnicianCreateFormInputValues) => void;
    onError?: (fields: TechnicianCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechnicianCreateFormInputValues) => TechnicianCreateFormInputValues;
    onValidate?: TechnicianCreateFormValidationValues;
} & React.CSSProperties>;
export default function TechnicianCreateForm(props: TechnicianCreateFormProps): React.ReactElement;
