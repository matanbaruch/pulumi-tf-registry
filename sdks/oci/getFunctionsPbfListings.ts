// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFunctionsPbfListings(args?: GetFunctionsPbfListingsArgs, opts?: pulumi.InvokeOptions): Promise<GetFunctionsPbfListingsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getFunctionsPbfListings:getFunctionsPbfListings", {
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "nameContains": args.nameContains,
        "nameStartsWith": args.nameStartsWith,
        "pbfListingId": args.pbfListingId,
        "state": args.state,
        "triggers": args.triggers,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFunctionsPbfListings.
 */
export interface GetFunctionsPbfListingsArgs {
    filters?: inputs.GetFunctionsPbfListingsFilter[];
    id?: string;
    name?: string;
    nameContains?: string;
    nameStartsWith?: string;
    pbfListingId?: string;
    state?: string;
    triggers?: string[];
}

/**
 * A collection of values returned by getFunctionsPbfListings.
 */
export interface GetFunctionsPbfListingsResult {
    readonly filters?: outputs.GetFunctionsPbfListingsFilter[];
    readonly id: string;
    readonly name?: string;
    readonly nameContains?: string;
    readonly nameStartsWith?: string;
    readonly pbfListingId?: string;
    readonly pbfListingsCollections: outputs.GetFunctionsPbfListingsPbfListingsCollection[];
    readonly state?: string;
    readonly triggers?: string[];
}
export function getFunctionsPbfListingsOutput(args?: GetFunctionsPbfListingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFunctionsPbfListingsResult> {
    return pulumi.output(args).apply((a: any) => getFunctionsPbfListings(a, opts))
}

/**
 * A collection of arguments for invoking getFunctionsPbfListings.
 */
export interface GetFunctionsPbfListingsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetFunctionsPbfListingsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameContains?: pulumi.Input<string>;
    nameStartsWith?: pulumi.Input<string>;
    pbfListingId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    triggers?: pulumi.Input<pulumi.Input<string>[]>;
}
