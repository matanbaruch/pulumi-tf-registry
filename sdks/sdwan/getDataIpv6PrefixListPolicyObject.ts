// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataIpv6PrefixListPolicyObject(args: GetDataIpv6PrefixListPolicyObjectArgs, opts?: pulumi.InvokeOptions): Promise<GetDataIpv6PrefixListPolicyObjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getDataIpv6PrefixListPolicyObject:getDataIpv6PrefixListPolicyObject", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataIpv6PrefixListPolicyObject.
 */
export interface GetDataIpv6PrefixListPolicyObjectArgs {
    id: string;
}

/**
 * A collection of values returned by getDataIpv6PrefixListPolicyObject.
 */
export interface GetDataIpv6PrefixListPolicyObjectResult {
    readonly entries: outputs.GetDataIpv6PrefixListPolicyObjectEntry[];
    readonly id: string;
    readonly name: string;
    readonly version: number;
}
export function getDataIpv6PrefixListPolicyObjectOutput(args: GetDataIpv6PrefixListPolicyObjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataIpv6PrefixListPolicyObjectResult> {
    return pulumi.output(args).apply((a: any) => getDataIpv6PrefixListPolicyObject(a, opts))
}

/**
 * A collection of arguments for invoking getDataIpv6PrefixListPolicyObject.
 */
export interface GetDataIpv6PrefixListPolicyObjectOutputArgs {
    id: pulumi.Input<string>;
}
