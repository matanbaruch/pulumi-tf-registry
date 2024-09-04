// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDbSnapshots(args: GetDbSnapshotsArgs, opts?: pulumi.InvokeOptions): Promise<GetDbSnapshotsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tessell:index/getDbSnapshots:getDbSnapshots", {
        "availabilityMachineId": args.availabilityMachineId,
        "id": args.id,
        "manual": args.manual,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDbSnapshots.
 */
export interface GetDbSnapshotsArgs {
    availabilityMachineId: string;
    id?: string;
    manual?: boolean;
    name?: string;
}

/**
 * A collection of values returned by getDbSnapshots.
 */
export interface GetDbSnapshotsResult {
    readonly availabilityMachineId: string;
    readonly dbSnapshots: outputs.GetDbSnapshotsDbSnapshot[];
    readonly id: string;
    readonly manual?: boolean;
    readonly name?: string;
}
export function getDbSnapshotsOutput(args: GetDbSnapshotsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDbSnapshotsResult> {
    return pulumi.output(args).apply((a: any) => getDbSnapshots(a, opts))
}

/**
 * A collection of arguments for invoking getDbSnapshots.
 */
export interface GetDbSnapshotsOutputArgs {
    availabilityMachineId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    manual?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
}
