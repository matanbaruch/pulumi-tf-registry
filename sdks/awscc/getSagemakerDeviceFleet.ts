// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSagemakerDeviceFleet(args: GetSagemakerDeviceFleetArgs, opts?: pulumi.InvokeOptions): Promise<GetSagemakerDeviceFleetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSagemakerDeviceFleet:getSagemakerDeviceFleet", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSagemakerDeviceFleet.
 */
export interface GetSagemakerDeviceFleetArgs {
    id: string;
}

/**
 * A collection of values returned by getSagemakerDeviceFleet.
 */
export interface GetSagemakerDeviceFleetResult {
    readonly description: string;
    readonly deviceFleetName: string;
    readonly id: string;
    readonly outputConfig: outputs.GetSagemakerDeviceFleetOutputConfig;
    readonly roleArn: string;
    readonly tags: outputs.GetSagemakerDeviceFleetTag[];
}
export function getSagemakerDeviceFleetOutput(args: GetSagemakerDeviceFleetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSagemakerDeviceFleetResult> {
    return pulumi.output(args).apply((a: any) => getSagemakerDeviceFleet(a, opts))
}

/**
 * A collection of arguments for invoking getSagemakerDeviceFleet.
 */
export interface GetSagemakerDeviceFleetOutputArgs {
    id: pulumi.Input<string>;
}
