// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFabricPort(args: GetFabricPortArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricPortResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("equinix:index/getFabricPort:getFabricPort", {
        "id": args.id,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFabricPort.
 */
export interface GetFabricPortArgs {
    id?: string;
    uuid: string;
}

/**
 * A collection of values returned by getFabricPort.
 */
export interface GetFabricPortResult {
    readonly accounts: outputs.GetFabricPortAccount[];
    readonly availableBandwidth: number;
    readonly bandwidth: number;
    readonly changeLogs: outputs.GetFabricPortChangeLog[];
    readonly description: string;
    readonly devices: outputs.GetFabricPortDevice[];
    readonly encapsulations: outputs.GetFabricPortEncapsulation[];
    readonly href: string;
    readonly id: string;
    readonly lagEnabled: boolean;
    readonly locations: outputs.GetFabricPortLocation[];
    readonly name: string;
    readonly operations: outputs.GetFabricPortOperation[];
    readonly redundancies: outputs.GetFabricPortRedundancy[];
    readonly serviceType: string;
    readonly state: string;
    readonly type: string;
    readonly usedBandwidth: number;
    readonly uuid: string;
}
export function getFabricPortOutput(args: GetFabricPortOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricPortResult> {
    return pulumi.output(args).apply((a: any) => getFabricPort(a, opts))
}

/**
 * A collection of arguments for invoking getFabricPort.
 */
export interface GetFabricPortOutputArgs {
    id?: pulumi.Input<string>;
    uuid: pulumi.Input<string>;
}
