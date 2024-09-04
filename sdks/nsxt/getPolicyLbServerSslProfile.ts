// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPolicyLbServerSslProfile(args?: GetPolicyLbServerSslProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyLbServerSslProfileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt:index/getPolicyLbServerSslProfile:getPolicyLbServerSslProfile", {
        "description": args.description,
        "displayName": args.displayName,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPolicyLbServerSslProfile.
 */
export interface GetPolicyLbServerSslProfileArgs {
    description?: string;
    displayName?: string;
    id?: string;
}

/**
 * A collection of values returned by getPolicyLbServerSslProfile.
 */
export interface GetPolicyLbServerSslProfileResult {
    readonly description: string;
    readonly displayName: string;
    readonly id: string;
    readonly path: string;
}
export function getPolicyLbServerSslProfileOutput(args?: GetPolicyLbServerSslProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyLbServerSslProfileResult> {
    return pulumi.output(args).apply((a: any) => getPolicyLbServerSslProfile(a, opts))
}

/**
 * A collection of arguments for invoking getPolicyLbServerSslProfile.
 */
export interface GetPolicyLbServerSslProfileOutputArgs {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
