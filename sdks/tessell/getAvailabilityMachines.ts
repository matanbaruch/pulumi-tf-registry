// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAvailabilityMachines(args?: GetAvailabilityMachinesArgs, opts?: pulumi.InvokeOptions): Promise<GetAvailabilityMachinesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tessell:index/getAvailabilityMachines:getAvailabilityMachines", {
        "engineType": args.engineType,
        "id": args.id,
        "loadAcls": args.loadAcls,
        "name": args.name,
        "owners": args.owners,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAvailabilityMachines.
 */
export interface GetAvailabilityMachinesArgs {
    engineType?: string;
    id?: string;
    loadAcls?: boolean;
    name?: string;
    owners?: string[];
    status?: string;
}

/**
 * A collection of values returned by getAvailabilityMachines.
 */
export interface GetAvailabilityMachinesResult {
    readonly availabilityMachines: outputs.GetAvailabilityMachinesAvailabilityMachine[];
    readonly engineType?: string;
    readonly id: string;
    readonly loadAcls?: boolean;
    readonly name?: string;
    readonly owners?: string[];
    readonly status?: string;
}
export function getAvailabilityMachinesOutput(args?: GetAvailabilityMachinesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAvailabilityMachinesResult> {
    return pulumi.output(args).apply((a: any) => getAvailabilityMachines(a, opts))
}

/**
 * A collection of arguments for invoking getAvailabilityMachines.
 */
export interface GetAvailabilityMachinesOutputArgs {
    engineType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    loadAcls?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
}
