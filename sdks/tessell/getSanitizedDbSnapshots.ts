// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSanitizedDbSnapshots(args: GetSanitizedDbSnapshotsArgs, opts?: pulumi.InvokeOptions): Promise<GetSanitizedDbSnapshotsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tessell:index/getSanitizedDbSnapshots:getSanitizedDbSnapshots", {
        "availabilityMachineId": args.availabilityMachineId,
        "id": args.id,
        "manual": args.manual,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSanitizedDbSnapshots.
 */
export interface GetSanitizedDbSnapshotsArgs {
    availabilityMachineId: string;
    id?: string;
    manual?: boolean;
    name?: string;
}

/**
 * A collection of values returned by getSanitizedDbSnapshots.
 */
export interface GetSanitizedDbSnapshotsResult {
    readonly availabilityMachineId: string;
    readonly id: string;
    readonly manual?: boolean;
    readonly name?: string;
    readonly sanitizedDbSnapshots: outputs.GetSanitizedDbSnapshotsSanitizedDbSnapshot[];
}
export function getSanitizedDbSnapshotsOutput(args: GetSanitizedDbSnapshotsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSanitizedDbSnapshotsResult> {
    return pulumi.output(args).apply((a: any) => getSanitizedDbSnapshots(a, opts))
}

/**
 * A collection of arguments for invoking getSanitizedDbSnapshots.
 */
export interface GetSanitizedDbSnapshotsOutputArgs {
    availabilityMachineId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    manual?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
}
