// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreDrgRouteDistributions(args: GetCoreDrgRouteDistributionsArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreDrgRouteDistributionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreDrgRouteDistributions:getCoreDrgRouteDistributions", {
        "displayName": args.displayName,
        "drgId": args.drgId,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreDrgRouteDistributions.
 */
export interface GetCoreDrgRouteDistributionsArgs {
    displayName?: string;
    drgId: string;
    filters?: inputs.GetCoreDrgRouteDistributionsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getCoreDrgRouteDistributions.
 */
export interface GetCoreDrgRouteDistributionsResult {
    readonly displayName?: string;
    readonly drgId: string;
    readonly drgRouteDistributions: outputs.GetCoreDrgRouteDistributionsDrgRouteDistribution[];
    readonly filters?: outputs.GetCoreDrgRouteDistributionsFilter[];
    readonly id: string;
    readonly state?: string;
}
export function getCoreDrgRouteDistributionsOutput(args: GetCoreDrgRouteDistributionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreDrgRouteDistributionsResult> {
    return pulumi.output(args).apply((a: any) => getCoreDrgRouteDistributions(a, opts))
}

/**
 * A collection of arguments for invoking getCoreDrgRouteDistributions.
 */
export interface GetCoreDrgRouteDistributionsOutputArgs {
    displayName?: pulumi.Input<string>;
    drgId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreDrgRouteDistributionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
