// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPortListPolicyObject(args: GetPortListPolicyObjectArgs, opts?: pulumi.InvokeOptions): Promise<GetPortListPolicyObjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getPortListPolicyObject:getPortListPolicyObject", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPortListPolicyObject.
 */
export interface GetPortListPolicyObjectArgs {
    id: string;
}

/**
 * A collection of values returned by getPortListPolicyObject.
 */
export interface GetPortListPolicyObjectResult {
    readonly entries: outputs.GetPortListPolicyObjectEntry[];
    readonly id: string;
    readonly name: string;
    readonly version: number;
}
export function getPortListPolicyObjectOutput(args: GetPortListPolicyObjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPortListPolicyObjectResult> {
    return pulumi.output(args).apply((a: any) => getPortListPolicyObject(a, opts))
}

/**
 * A collection of arguments for invoking getPortListPolicyObject.
 */
export interface GetPortListPolicyObjectOutputArgs {
    id: pulumi.Input<string>;
}
