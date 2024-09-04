// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkSecurityAddressGroupIamPolicy(args: GetNetworkSecurityAddressGroupIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityAddressGroupIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getNetworkSecurityAddressGroupIamPolicy:getNetworkSecurityAddressGroupIamPolicy", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkSecurityAddressGroupIamPolicy.
 */
export interface GetNetworkSecurityAddressGroupIamPolicyArgs {
    id?: string;
    location?: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getNetworkSecurityAddressGroupIamPolicy.
 */
export interface GetNetworkSecurityAddressGroupIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly policyData: string;
    readonly project: string;
}
export function getNetworkSecurityAddressGroupIamPolicyOutput(args: GetNetworkSecurityAddressGroupIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkSecurityAddressGroupIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getNetworkSecurityAddressGroupIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkSecurityAddressGroupIamPolicy.
 */
export interface GetNetworkSecurityAddressGroupIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
