// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSnsTopic(args: GetSnsTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetSnsTopicResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getSnsTopic:getSnsTopic", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSnsTopic.
 */
export interface GetSnsTopicArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getSnsTopic.
 */
export interface GetSnsTopicResult {
    readonly arn: string;
    readonly id: string;
    readonly name: string;
}
export function getSnsTopicOutput(args: GetSnsTopicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSnsTopicResult> {
    return pulumi.output(args).apply((a: any) => getSnsTopic(a, opts))
}

/**
 * A collection of arguments for invoking getSnsTopic.
 */
export interface GetSnsTopicOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
