// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAdministrativeAccount(args: GetAdministrativeAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAdministrativeAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingfederate:index/getAdministrativeAccount:getAdministrativeAccount", {
        "username": args.username,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAdministrativeAccount.
 */
export interface GetAdministrativeAccountArgs {
    username: string;
}

/**
 * A collection of values returned by getAdministrativeAccount.
 */
export interface GetAdministrativeAccountResult {
    readonly active: boolean;
    readonly auditor: boolean;
    readonly department: string;
    readonly description: string;
    readonly emailAddress: string;
    readonly encryptedPassword: string;
    readonly id: string;
    readonly password: string;
    readonly phoneNumber: string;
    readonly roles: string[];
    readonly username: string;
}
export function getAdministrativeAccountOutput(args: GetAdministrativeAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdministrativeAccountResult> {
    return pulumi.output(args).apply((a: any) => getAdministrativeAccount(a, opts))
}

/**
 * A collection of arguments for invoking getAdministrativeAccount.
 */
export interface GetAdministrativeAccountOutputArgs {
    username: pulumi.Input<string>;
}
