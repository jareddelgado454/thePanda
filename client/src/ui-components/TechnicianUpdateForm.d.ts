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
export declare type TechnicianUpdateFormInputValues = {
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
export declare type TechnicianUpdateFormValidationValues = {
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
export declare type TechnicianUpdateFormOverridesProps = {
    TechnicianUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type TechnicianUpdateFormProps = React.PropsWithChildren<{
    overrides?: TechnicianUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    technician?: any;
    onSubmit?: (fields: TechnicianUpdateFormInputValues) => TechnicianUpdateFormInputValues;
    onSuccess?: (fields: TechnicianUpdateFormInputValues) => void;
    onError?: (fields: TechnicianUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechnicianUpdateFormInputValues) => TechnicianUpdateFormInputValues;
    onValidate?: TechnicianUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TechnicianUpdateForm(props: TechnicianUpdateFormProps): React.ReactElement;
