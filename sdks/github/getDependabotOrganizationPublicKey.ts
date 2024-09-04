// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDependabotOrganizationPublicKey(args?: GetDependabotOrganizationPublicKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetDependabotOrganizationPublicKeyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getDependabotOrganizationPublicKey:getDependabotOrganizationPublicKey", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDependabotOrganizationPublicKey.
 */
export interface GetDependabotOrganizationPublicKeyArgs {
    id?: string;
}

/**
 * A collection of values returned by getDependabotOrganizationPublicKey.
 */
export interface GetDependabotOrganizationPublicKeyResult {
    readonly id: string;
    readonly key: string;
    readonly keyId: string;
}
export function getDependabotOrganizationPublicKeyOutput(args?: GetDependabotOrganizationPublicKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDependabotOrganizationPublicKeyResult> {
    return pulumi.output(args).apply((a: any) => getDependabotOrganizationPublicKey(a, opts))
}

/**
 * A collection of arguments for invoking getDependabotOrganizationPublicKey.
 */
export interface GetDependabotOrganizationPublicKeyOutputArgs {
    id?: pulumi.Input<string>;
}
