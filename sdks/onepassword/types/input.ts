// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetItemFile {
    /**
     * The content of the file.
     */
    content?: string;
    /**
     * The content of the file in base64 encoding. (Use this for binary files.)
     */
    contentBase64?: string;
    /**
     * The UUID of the file.
     */
    id?: string;
    /**
     * The name of the file.
     */
    name?: string;
}

export interface GetItemFileArgs {
    /**
     * The content of the file.
     */
    content?: pulumi.Input<string>;
    /**
     * The content of the file in base64 encoding. (Use this for binary files.)
     */
    contentBase64?: pulumi.Input<string>;
    /**
     * The UUID of the file.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the file.
     */
    name?: pulumi.Input<string>;
}

export interface GetItemSection {
    fields?: inputs.GetItemSectionField[];
    /**
     * A list of files attached to the section.
     */
    files?: inputs.GetItemSectionFile[];
    /**
     * A unique identifier for the section.
     */
    id?: string;
    /**
     * The label for the section.
     */
    label?: string;
}

export interface GetItemSectionArgs {
    fields?: pulumi.Input<pulumi.Input<inputs.GetItemSectionFieldArgs>[]>;
    /**
     * A list of files attached to the section.
     */
    files?: pulumi.Input<pulumi.Input<inputs.GetItemSectionFileArgs>[]>;
    /**
     * A unique identifier for the section.
     */
    id?: pulumi.Input<string>;
    /**
     * The label for the section.
     */
    label?: pulumi.Input<string>;
}

export interface GetItemSectionField {
    /**
     * A unique identifier for the field.
     */
    id?: string;
    /**
     * The label for the field.
     */
    label?: string;
    /**
     * Purpose indicates this is a special field: a username, password, or notes field. One of ["USERNAME" "PASSWORD" "NOTES"]
     */
    purpose?: string;
    /**
     * The type of value stored in the field. One of ["STRING" "CONCEALED" "EMAIL" "URL" "OTP" "DATE" "MONTH_YEAR" "MENU"]
     */
    type?: string;
    /**
     * The value of the field.
     */
    value?: string;
}

export interface GetItemSectionFieldArgs {
    /**
     * A unique identifier for the field.
     */
    id?: pulumi.Input<string>;
    /**
     * The label for the field.
     */
    label?: pulumi.Input<string>;
    /**
     * Purpose indicates this is a special field: a username, password, or notes field. One of ["USERNAME" "PASSWORD" "NOTES"]
     */
    purpose?: pulumi.Input<string>;
    /**
     * The type of value stored in the field. One of ["STRING" "CONCEALED" "EMAIL" "URL" "OTP" "DATE" "MONTH_YEAR" "MENU"]
     */
    type?: pulumi.Input<string>;
    /**
     * The value of the field.
     */
    value?: pulumi.Input<string>;
}

export interface GetItemSectionFile {
    /**
     * The content of the file.
     */
    content?: string;
    /**
     * The content of the file in base64 encoding. (Use this for binary files.)
     */
    contentBase64?: string;
    /**
     * The UUID of the file.
     */
    id?: string;
    /**
     * The name of the file.
     */
    name?: string;
}

export interface GetItemSectionFileArgs {
    /**
     * The content of the file.
     */
    content?: pulumi.Input<string>;
    /**
     * The content of the file in base64 encoding. (Use this for binary files.)
     */
    contentBase64?: pulumi.Input<string>;
    /**
     * The UUID of the file.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the file.
     */
    name?: pulumi.Input<string>;
}

export interface ItemPasswordRecipe {
    /**
     * Use digits [0-9] when generating the password.
     */
    digits?: pulumi.Input<boolean>;
    /**
     * The length of the password to be generated.
     */
    length?: pulumi.Input<number>;
    /**
     * Use letters [a-zA-Z] when generating the password.
     */
    letters?: pulumi.Input<boolean>;
    /**
     * Use symbols [!@.-_*] when generating the password.
     */
    symbols?: pulumi.Input<boolean>;
}

export interface ItemSection {
    /**
     * A list of custom fields in the section.
     */
    fields?: pulumi.Input<pulumi.Input<inputs.ItemSectionField>[]>;
    /**
     * A unique identifier for the section.
     */
    id?: pulumi.Input<string>;
    /**
     * The label for the section.
     */
    label: pulumi.Input<string>;
}

export interface ItemSectionField {
    /**
     * A unique identifier for the field.
     */
    id?: pulumi.Input<string>;
    /**
     * The label for the field.
     */
    label: pulumi.Input<string>;
    /**
     * The recipe used to generate a new value for a password.
     */
    passwordRecipes?: pulumi.Input<pulumi.Input<inputs.ItemSectionFieldPasswordRecipe>[]>;
    /**
     * Purpose indicates this is a special field: a username, password, or notes field. One of ["USERNAME" "PASSWORD" "NOTES"]
     */
    purpose?: pulumi.Input<string>;
    /**
     * The type of value stored in the field. One of ["STRING" "CONCEALED" "EMAIL" "URL" "OTP" "DATE" "MONTH_YEAR" "MENU"]
     */
    type?: pulumi.Input<string>;
    /**
     * The value of the field.
     */
    value?: pulumi.Input<string>;
}

export interface ItemSectionFieldPasswordRecipe {
    /**
     * Use digits [0-9] when generating the password.
     */
    digits?: pulumi.Input<boolean>;
    /**
     * The length of the password to be generated.
     */
    length?: pulumi.Input<number>;
    /**
     * Use letters [a-zA-Z] when generating the password.
     */
    letters?: pulumi.Input<boolean>;
    /**
     * Use symbols [!@.-_*] when generating the password.
     */
    symbols?: pulumi.Input<boolean>;
}
