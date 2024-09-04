// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetUserAttributesBool {
    name: string;
    values: boolean[];
}

export interface GetUserAttributesBoolArgs {
    name: pulumi.Input<string>;
    values: pulumi.Input<pulumi.Input<boolean>[]>;
}

export interface GetUserAttributesDate {
    name: string;
    values: string[];
}

export interface GetUserAttributesDateArgs {
    name: pulumi.Input<string>;
    values: pulumi.Input<pulumi.Input<string>[]>;
}

export interface GetUserAttributesDouble {
    name: string;
    values: number[];
}

export interface GetUserAttributesDoubleArgs {
    name: pulumi.Input<string>;
    values: pulumi.Input<pulumi.Input<number>[]>;
}

export interface GetUserAttributesEmail {
    name: string;
    values: string[];
}

export interface GetUserAttributesEmailArgs {
    name: pulumi.Input<string>;
    values: pulumi.Input<pulumi.Input<string>[]>;
}

export interface GetUserAttributesInteger {
    name: string;
    values: number[];
}

export interface GetUserAttributesIntegerArgs {
    name: pulumi.Input<string>;
    values: pulumi.Input<pulumi.Input<number>[]>;
}

export interface GetUserAttributesPhone {
    name: string;
    values: string[];
}

export interface GetUserAttributesPhoneArgs {
    name: pulumi.Input<string>;
    values: pulumi.Input<pulumi.Input<string>[]>;
}

export interface GetUserAttributesString {
    name: string;
    values: string[];
}

export interface GetUserAttributesStringArgs {
    name: pulumi.Input<string>;
    values: pulumi.Input<pulumi.Input<string>[]>;
}

export interface GroupMembersMember {
    email: pulumi.Input<string>;
    etag?: pulumi.Input<string>;
    kind?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

export interface UserAttributesCustomSchema {
    name: pulumi.Input<string>;
    value: pulumi.Input<string>;
}

export interface UserCustomSchema {
    name: pulumi.Input<string>;
    value: pulumi.Input<string>;
}

export interface UserExternalId {
    customType?: pulumi.Input<string>;
    type: pulumi.Input<string>;
    value: pulumi.Input<string>;
}

export interface UserOrganization {
    costCenter?: pulumi.Input<string>;
    customType?: pulumi.Input<string>;
    department?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    fullTimeEquivalent?: pulumi.Input<number>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    primary?: pulumi.Input<boolean>;
    symbol?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

export interface UserPosixAccount {
    accountId?: pulumi.Input<string>;
    gecos?: pulumi.Input<string>;
    gid?: pulumi.Input<number>;
    homeDirectory?: pulumi.Input<string>;
    primary?: pulumi.Input<boolean>;
    shell?: pulumi.Input<string>;
    systemId?: pulumi.Input<string>;
    uid?: pulumi.Input<number>;
    username?: pulumi.Input<string>;
}

export interface UserSchemaField {
    displayName?: pulumi.Input<string>;
    fieldName: pulumi.Input<string>;
    fieldType: pulumi.Input<string>;
    indexed?: pulumi.Input<boolean>;
    multiValued?: pulumi.Input<boolean>;
    range?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    readAccessType?: pulumi.Input<string>;
}

export interface UserSshPublicKey {
    expirationTimeUsec?: pulumi.Input<number>;
    fingerprint?: pulumi.Input<string>;
    key: pulumi.Input<string>;
}
