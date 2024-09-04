// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCamListAttachedUserPolicy(args: GetCamListAttachedUserPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetCamListAttachedUserPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getCamListAttachedUserPolicy:getCamListAttachedUserPolicy", {
        "attachType": args.attachType,
        "id": args.id,
        "keyword": args.keyword,
        "resultOutputFile": args.resultOutputFile,
        "strategyType": args.strategyType,
        "targetUin": args.targetUin,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCamListAttachedUserPolicy.
 */
export interface GetCamListAttachedUserPolicyArgs {
    attachType: number;
    id?: string;
    keyword?: string;
    resultOutputFile?: string;
    strategyType?: number;
    targetUin: number;
}

/**
 * A collection of values returned by getCamListAttachedUserPolicy.
 */
export interface GetCamListAttachedUserPolicyResult {
    readonly attachType: number;
    readonly id: string;
    readonly keyword?: string;
    readonly policyLists: outputs.GetCamListAttachedUserPolicyPolicyList[];
    readonly resultOutputFile?: string;
    readonly strategyType?: number;
    readonly targetUin: number;
}
export function getCamListAttachedUserPolicyOutput(args: GetCamListAttachedUserPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCamListAttachedUserPolicyResult> {
    return pulumi.output(args).apply((a: any) => getCamListAttachedUserPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getCamListAttachedUserPolicy.
 */
export interface GetCamListAttachedUserPolicyOutputArgs {
    attachType: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    keyword?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    strategyType?: pulumi.Input<number>;
    targetUin: pulumi.Input<number>;
}
