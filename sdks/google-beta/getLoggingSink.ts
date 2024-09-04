// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLoggingSink(args: GetLoggingSinkArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingSinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getLoggingSink:getLoggingSink", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingSink.
 */
export interface GetLoggingSinkArgs {
    id: string;
}

/**
 * A collection of values returned by getLoggingSink.
 */
export interface GetLoggingSinkResult {
    readonly bigqueryOptions: outputs.GetLoggingSinkBigqueryOption[];
    readonly description: string;
    readonly destination: string;
    readonly disabled: boolean;
    readonly exclusions: outputs.GetLoggingSinkExclusion[];
    readonly filter: string;
    readonly id: string;
    readonly name: string;
    readonly writerIdentity: string;
}
export function getLoggingSinkOutput(args: GetLoggingSinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingSinkResult> {
    return pulumi.output(args).apply((a: any) => getLoggingSink(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingSink.
 */
export interface GetLoggingSinkOutputArgs {
    id: pulumi.Input<string>;
}
