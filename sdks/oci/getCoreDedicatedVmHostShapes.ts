// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreDedicatedVmHostShapes(args: GetCoreDedicatedVmHostShapesArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreDedicatedVmHostShapesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreDedicatedVmHostShapes:getCoreDedicatedVmHostShapes", {
        "availabilityDomain": args.availabilityDomain,
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "instanceShapeName": args.instanceShapeName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreDedicatedVmHostShapes.
 */
export interface GetCoreDedicatedVmHostShapesArgs {
    availabilityDomain?: string;
    compartmentId: string;
    filters?: inputs.GetCoreDedicatedVmHostShapesFilter[];
    id?: string;
    instanceShapeName?: string;
}

/**
 * A collection of values returned by getCoreDedicatedVmHostShapes.
 */
export interface GetCoreDedicatedVmHostShapesResult {
    readonly availabilityDomain?: string;
    readonly compartmentId: string;
    readonly dedicatedVmHostShapes: outputs.GetCoreDedicatedVmHostShapesDedicatedVmHostShape[];
    readonly filters?: outputs.GetCoreDedicatedVmHostShapesFilter[];
    readonly id: string;
    readonly instanceShapeName?: string;
}
export function getCoreDedicatedVmHostShapesOutput(args: GetCoreDedicatedVmHostShapesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreDedicatedVmHostShapesResult> {
    return pulumi.output(args).apply((a: any) => getCoreDedicatedVmHostShapes(a, opts))
}

/**
 * A collection of arguments for invoking getCoreDedicatedVmHostShapes.
 */
export interface GetCoreDedicatedVmHostShapesOutputArgs {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreDedicatedVmHostShapesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    instanceShapeName?: pulumi.Input<string>;
}
