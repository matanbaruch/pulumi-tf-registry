// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTransform(args: GetTransformArgs, opts?: pulumi.InvokeOptions): Promise<GetTransformResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("streamkap:index/getTransform:getTransform", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTransform.
 */
export interface GetTransformArgs {
    id: string;
}

/**
 * A collection of values returned by getTransform.
 */
export interface GetTransformResult {
    readonly id: string;
    readonly name: string;
    readonly startTime: string;
    readonly topicIds: string[];
    readonly topicMaps: outputs.GetTransformTopicMap[];
}
export function getTransformOutput(args: GetTransformOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTransformResult> {
    return pulumi.output(args).apply((a: any) => getTransform(a, opts))
}

/**
 * A collection of arguments for invoking getTransform.
 */
export interface GetTransformOutputArgs {
    id: pulumi.Input<string>;
}
