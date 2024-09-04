// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIpv6PrefixListPolicyObject(args: GetIpv6PrefixListPolicyObjectArgs, opts?: pulumi.InvokeOptions): Promise<GetIpv6PrefixListPolicyObjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getIpv6PrefixListPolicyObject:getIpv6PrefixListPolicyObject", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpv6PrefixListPolicyObject.
 */
export interface GetIpv6PrefixListPolicyObjectArgs {
    id: string;
}

/**
 * A collection of values returned by getIpv6PrefixListPolicyObject.
 */
export interface GetIpv6PrefixListPolicyObjectResult {
    readonly entries: outputs.GetIpv6PrefixListPolicyObjectEntry[];
    readonly id: string;
    readonly name: string;
    readonly version: number;
}
export function getIpv6PrefixListPolicyObjectOutput(args: GetIpv6PrefixListPolicyObjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpv6PrefixListPolicyObjectResult> {
    return pulumi.output(args).apply((a: any) => getIpv6PrefixListPolicyObject(a, opts))
}

/**
 * A collection of arguments for invoking getIpv6PrefixListPolicyObject.
 */
export interface GetIpv6PrefixListPolicyObjectOutputArgs {
    id: pulumi.Input<string>;
}
