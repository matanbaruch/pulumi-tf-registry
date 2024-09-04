// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getActionsOrganizationPublicKey(args?: GetActionsOrganizationPublicKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetActionsOrganizationPublicKeyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getActionsOrganizationPublicKey:getActionsOrganizationPublicKey", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getActionsOrganizationPublicKey.
 */
export interface GetActionsOrganizationPublicKeyArgs {
    id?: string;
}

/**
 * A collection of values returned by getActionsOrganizationPublicKey.
 */
export interface GetActionsOrganizationPublicKeyResult {
    readonly id: string;
    readonly key: string;
    readonly keyId: string;
}
export function getActionsOrganizationPublicKeyOutput(args?: GetActionsOrganizationPublicKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActionsOrganizationPublicKeyResult> {
    return pulumi.output(args).apply((a: any) => getActionsOrganizationPublicKey(a, opts))
}

/**
 * A collection of arguments for invoking getActionsOrganizationPublicKey.
 */
export interface GetActionsOrganizationPublicKeyOutputArgs {
    id?: pulumi.Input<string>;
}
