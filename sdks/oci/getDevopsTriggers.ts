// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDevopsTriggers(args?: GetDevopsTriggersArgs, opts?: pulumi.InvokeOptions): Promise<GetDevopsTriggersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDevopsTriggers:getDevopsTriggers", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "projectId": args.projectId,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDevopsTriggers.
 */
export interface GetDevopsTriggersArgs {
    compartmentId?: string;
    displayName?: string;
    filters?: inputs.GetDevopsTriggersFilter[];
    id?: string;
    projectId?: string;
    state?: string;
}

/**
 * A collection of values returned by getDevopsTriggers.
 */
export interface GetDevopsTriggersResult {
    readonly compartmentId?: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetDevopsTriggersFilter[];
    readonly id?: string;
    readonly projectId?: string;
    readonly state?: string;
    readonly triggerCollections: outputs.GetDevopsTriggersTriggerCollection[];
}
export function getDevopsTriggersOutput(args?: GetDevopsTriggersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevopsTriggersResult> {
    return pulumi.output(args).apply((a: any) => getDevopsTriggers(a, opts))
}

/**
 * A collection of arguments for invoking getDevopsTriggers.
 */
export interface GetDevopsTriggersOutputArgs {
    compartmentId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDevopsTriggersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
