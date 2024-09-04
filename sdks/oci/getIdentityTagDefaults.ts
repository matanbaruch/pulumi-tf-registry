// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityTagDefaults(args?: GetIdentityTagDefaultsArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityTagDefaultsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityTagDefaults:getIdentityTagDefaults", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
        "tagDefinitionId": args.tagDefinitionId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityTagDefaults.
 */
export interface GetIdentityTagDefaultsArgs {
    compartmentId?: string;
    filters?: inputs.GetIdentityTagDefaultsFilter[];
    id?: string;
    state?: string;
    tagDefinitionId?: string;
}

/**
 * A collection of values returned by getIdentityTagDefaults.
 */
export interface GetIdentityTagDefaultsResult {
    readonly compartmentId?: string;
    readonly filters?: outputs.GetIdentityTagDefaultsFilter[];
    readonly id?: string;
    readonly state?: string;
    readonly tagDefaults: outputs.GetIdentityTagDefaultsTagDefault[];
    readonly tagDefinitionId?: string;
}
export function getIdentityTagDefaultsOutput(args?: GetIdentityTagDefaultsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityTagDefaultsResult> {
    return pulumi.output(args).apply((a: any) => getIdentityTagDefaults(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityTagDefaults.
 */
export interface GetIdentityTagDefaultsOutputArgs {
    compartmentId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetIdentityTagDefaultsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tagDefinitionId?: pulumi.Input<string>;
}
