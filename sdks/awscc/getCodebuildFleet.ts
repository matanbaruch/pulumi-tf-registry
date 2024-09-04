// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCodebuildFleet(args: GetCodebuildFleetArgs, opts?: pulumi.InvokeOptions): Promise<GetCodebuildFleetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCodebuildFleet:getCodebuildFleet", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCodebuildFleet.
 */
export interface GetCodebuildFleetArgs {
    id: string;
}

/**
 * A collection of values returned by getCodebuildFleet.
 */
export interface GetCodebuildFleetResult {
    readonly arn: string;
    readonly baseCapacity: number;
    readonly computeType: string;
    readonly environmentType: string;
    readonly fleetServiceRole: string;
    readonly fleetVpcConfig: outputs.GetCodebuildFleetFleetVpcConfig;
    readonly id: string;
    readonly imageId: string;
    readonly name: string;
    readonly overflowBehavior: string;
    readonly tags: outputs.GetCodebuildFleetTag[];
}
export function getCodebuildFleetOutput(args: GetCodebuildFleetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCodebuildFleetResult> {
    return pulumi.output(args).apply((a: any) => getCodebuildFleet(a, opts))
}

/**
 * A collection of arguments for invoking getCodebuildFleet.
 */
export interface GetCodebuildFleetOutputArgs {
    id: pulumi.Input<string>;
}
