// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAppconfigEnvironment(args: GetAppconfigEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAppconfigEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getAppconfigEnvironment:getAppconfigEnvironment", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppconfigEnvironment.
 */
export interface GetAppconfigEnvironmentArgs {
    id: string;
}

/**
 * A collection of values returned by getAppconfigEnvironment.
 */
export interface GetAppconfigEnvironmentResult {
    readonly applicationId: string;
    readonly description: string;
    readonly environmentId: string;
    readonly id: string;
    readonly monitors: outputs.GetAppconfigEnvironmentMonitor[];
    readonly name: string;
    readonly tags: outputs.GetAppconfigEnvironmentTag[];
}
export function getAppconfigEnvironmentOutput(args: GetAppconfigEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppconfigEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getAppconfigEnvironment(a, opts))
}

/**
 * A collection of arguments for invoking getAppconfigEnvironment.
 */
export interface GetAppconfigEnvironmentOutputArgs {
    id: pulumi.Input<string>;
}
