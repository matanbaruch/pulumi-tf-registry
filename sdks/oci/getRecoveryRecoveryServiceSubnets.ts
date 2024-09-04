// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRecoveryRecoveryServiceSubnets(args: GetRecoveryRecoveryServiceSubnetsArgs, opts?: pulumi.InvokeOptions): Promise<GetRecoveryRecoveryServiceSubnetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getRecoveryRecoveryServiceSubnets:getRecoveryRecoveryServiceSubnets", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
        "vcnId": args.vcnId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRecoveryRecoveryServiceSubnets.
 */
export interface GetRecoveryRecoveryServiceSubnetsArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetRecoveryRecoveryServiceSubnetsFilter[];
    id?: string;
    state?: string;
    vcnId?: string;
}

/**
 * A collection of values returned by getRecoveryRecoveryServiceSubnets.
 */
export interface GetRecoveryRecoveryServiceSubnetsResult {
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetRecoveryRecoveryServiceSubnetsFilter[];
    readonly id?: string;
    readonly recoveryServiceSubnetCollections: outputs.GetRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection[];
    readonly state?: string;
    readonly vcnId?: string;
}
export function getRecoveryRecoveryServiceSubnetsOutput(args: GetRecoveryRecoveryServiceSubnetsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRecoveryRecoveryServiceSubnetsResult> {
    return pulumi.output(args).apply((a: any) => getRecoveryRecoveryServiceSubnets(a, opts))
}

/**
 * A collection of arguments for invoking getRecoveryRecoveryServiceSubnets.
 */
export interface GetRecoveryRecoveryServiceSubnetsOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetRecoveryRecoveryServiceSubnetsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    vcnId?: pulumi.Input<string>;
}
