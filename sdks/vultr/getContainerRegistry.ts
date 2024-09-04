// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getContainerRegistry(args?: GetContainerRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerRegistryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vultr:index/getContainerRegistry:getContainerRegistry", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getContainerRegistry.
 */
export interface GetContainerRegistryArgs {
    filters?: inputs.GetContainerRegistryFilter[];
    id?: string;
}

/**
 * A collection of values returned by getContainerRegistry.
 */
export interface GetContainerRegistryResult {
    readonly dateCreated: string;
    readonly filters?: outputs.GetContainerRegistryFilter[];
    readonly id: string;
    readonly name: string;
    readonly public: boolean;
    readonly repositories: outputs.GetContainerRegistryRepository[];
    readonly rootUser: {[key: string]: string};
    readonly storage: {[key: string]: string};
    readonly urn: string;
}
export function getContainerRegistryOutput(args?: GetContainerRegistryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerRegistryResult> {
    return pulumi.output(args).apply((a: any) => getContainerRegistry(a, opts))
}

/**
 * A collection of arguments for invoking getContainerRegistry.
 */
export interface GetContainerRegistryOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetContainerRegistryFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
