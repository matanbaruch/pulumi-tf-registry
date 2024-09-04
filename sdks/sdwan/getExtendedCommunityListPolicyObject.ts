// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getExtendedCommunityListPolicyObject(args: GetExtendedCommunityListPolicyObjectArgs, opts?: pulumi.InvokeOptions): Promise<GetExtendedCommunityListPolicyObjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getExtendedCommunityListPolicyObject:getExtendedCommunityListPolicyObject", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getExtendedCommunityListPolicyObject.
 */
export interface GetExtendedCommunityListPolicyObjectArgs {
    id: string;
}

/**
 * A collection of values returned by getExtendedCommunityListPolicyObject.
 */
export interface GetExtendedCommunityListPolicyObjectResult {
    readonly entries: outputs.GetExtendedCommunityListPolicyObjectEntry[];
    readonly id: string;
    readonly name: string;
    readonly version: number;
}
export function getExtendedCommunityListPolicyObjectOutput(args: GetExtendedCommunityListPolicyObjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExtendedCommunityListPolicyObjectResult> {
    return pulumi.output(args).apply((a: any) => getExtendedCommunityListPolicyObject(a, opts))
}

/**
 * A collection of arguments for invoking getExtendedCommunityListPolicyObject.
 */
export interface GetExtendedCommunityListPolicyObjectOutputArgs {
    id: pulumi.Input<string>;
}
