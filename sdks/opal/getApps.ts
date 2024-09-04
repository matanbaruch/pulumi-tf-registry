// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApps(args?: GetAppsArgs, opts?: pulumi.InvokeOptions): Promise<GetAppsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("opal:index/getApps:getApps", {
        "appTypeFilters": args.appTypeFilters,
        "ownerFilter": args.ownerFilter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApps.
 */
export interface GetAppsArgs {
    appTypeFilters?: string[];
    ownerFilter?: string;
}

/**
 * A collection of values returned by getApps.
 */
export interface GetAppsResult {
    readonly appTypeFilters?: string[];
    readonly apps: outputs.GetAppsApp[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ownerFilter?: string;
}
export function getAppsOutput(args?: GetAppsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppsResult> {
    return pulumi.output(args).apply((a: any) => getApps(a, opts))
}

/**
 * A collection of arguments for invoking getApps.
 */
export interface GetAppsOutputArgs {
    appTypeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    ownerFilter?: pulumi.Input<string>;
}
