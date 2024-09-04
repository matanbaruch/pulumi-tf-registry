// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWafv2IpSet(args: GetWafv2IpSetArgs, opts?: pulumi.InvokeOptions): Promise<GetWafv2IpSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getWafv2IpSet:getWafv2IpSet", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafv2IpSet.
 */
export interface GetWafv2IpSetArgs {
    id: string;
}

/**
 * A collection of values returned by getWafv2IpSet.
 */
export interface GetWafv2IpSetResult {
    readonly addresses: string[];
    readonly arn: string;
    readonly description: string;
    readonly id: string;
    readonly ipAddressVersion: string;
    readonly ipSetId: string;
    readonly name: string;
    readonly scope: string;
    readonly tags: outputs.GetWafv2IpSetTag[];
}
export function getWafv2IpSetOutput(args: GetWafv2IpSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafv2IpSetResult> {
    return pulumi.output(args).apply((a: any) => getWafv2IpSet(a, opts))
}

/**
 * A collection of arguments for invoking getWafv2IpSet.
 */
export interface GetWafv2IpSetOutputArgs {
    id: pulumi.Input<string>;
}
