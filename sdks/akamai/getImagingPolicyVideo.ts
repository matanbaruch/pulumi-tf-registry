// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getImagingPolicyVideo(args: GetImagingPolicyVideoArgs, opts?: pulumi.InvokeOptions): Promise<GetImagingPolicyVideoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getImagingPolicyVideo:getImagingPolicyVideo", {
        "id": args.id,
        "policy": args.policy,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getImagingPolicyVideo.
 */
export interface GetImagingPolicyVideoArgs {
    id?: string;
    policy: inputs.GetImagingPolicyVideoPolicy;
}

/**
 * A collection of values returned by getImagingPolicyVideo.
 */
export interface GetImagingPolicyVideoResult {
    readonly id: string;
    readonly json: string;
    readonly policy: outputs.GetImagingPolicyVideoPolicy;
}
export function getImagingPolicyVideoOutput(args: GetImagingPolicyVideoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImagingPolicyVideoResult> {
    return pulumi.output(args).apply((a: any) => getImagingPolicyVideo(a, opts))
}

/**
 * A collection of arguments for invoking getImagingPolicyVideo.
 */
export interface GetImagingPolicyVideoOutputArgs {
    id?: pulumi.Input<string>;
    policy: pulumi.Input<inputs.GetImagingPolicyVideoPolicyArgs>;
}
