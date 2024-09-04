// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getActionsOrganizationRegistrationToken(args?: GetActionsOrganizationRegistrationTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetActionsOrganizationRegistrationTokenResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getActionsOrganizationRegistrationToken:getActionsOrganizationRegistrationToken", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getActionsOrganizationRegistrationToken.
 */
export interface GetActionsOrganizationRegistrationTokenArgs {
    id?: string;
}

/**
 * A collection of values returned by getActionsOrganizationRegistrationToken.
 */
export interface GetActionsOrganizationRegistrationTokenResult {
    readonly expiresAt: number;
    readonly id: string;
    readonly token: string;
}
export function getActionsOrganizationRegistrationTokenOutput(args?: GetActionsOrganizationRegistrationTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActionsOrganizationRegistrationTokenResult> {
    return pulumi.output(args).apply((a: any) => getActionsOrganizationRegistrationToken(a, opts))
}

/**
 * A collection of arguments for invoking getActionsOrganizationRegistrationToken.
 */
export interface GetActionsOrganizationRegistrationTokenOutputArgs {
    id?: pulumi.Input<string>;
}
