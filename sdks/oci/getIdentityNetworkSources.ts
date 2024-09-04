// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityNetworkSources(args: GetIdentityNetworkSourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityNetworkSourcesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityNetworkSources:getIdentityNetworkSources", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityNetworkSources.
 */
export interface GetIdentityNetworkSourcesArgs {
    compartmentId: string;
    filters?: inputs.GetIdentityNetworkSourcesFilter[];
    id?: string;
    name?: string;
    state?: string;
}

/**
 * A collection of values returned by getIdentityNetworkSources.
 */
export interface GetIdentityNetworkSourcesResult {
    readonly compartmentId: string;
    readonly filters?: outputs.GetIdentityNetworkSourcesFilter[];
    readonly id: string;
    readonly name?: string;
    readonly networkSources: outputs.GetIdentityNetworkSourcesNetworkSource[];
    readonly state?: string;
}
export function getIdentityNetworkSourcesOutput(args: GetIdentityNetworkSourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityNetworkSourcesResult> {
    return pulumi.output(args).apply((a: any) => getIdentityNetworkSources(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityNetworkSources.
 */
export interface GetIdentityNetworkSourcesOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetIdentityNetworkSourcesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
