// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEffectiveIgnition(args: GetEffectiveIgnitionArgs, opts?: pulumi.InvokeOptions): Promise<GetEffectiveIgnitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hivelocity:index/getEffectiveIgnition:getEffectiveIgnition", {
        "deviceId": args.deviceId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEffectiveIgnition.
 */
export interface GetEffectiveIgnitionArgs {
    deviceId: number;
    id?: string;
}

/**
 * A collection of values returned by getEffectiveIgnition.
 */
export interface GetEffectiveIgnitionResult {
    readonly contents: string;
    readonly deviceId: number;
    readonly id: string;
}
export function getEffectiveIgnitionOutput(args: GetEffectiveIgnitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEffectiveIgnitionResult> {
    return pulumi.output(args).apply((a: any) => getEffectiveIgnition(a, opts))
}

/**
 * A collection of arguments for invoking getEffectiveIgnition.
 */
export interface GetEffectiveIgnitionOutputArgs {
    deviceId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
}
