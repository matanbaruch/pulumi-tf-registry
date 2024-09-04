// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRegistry(args: GetRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("codefresh:index/getRegistry:getRegistry", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRegistry.
 */
export interface GetRegistryArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getRegistry.
 */
export interface GetRegistryResult {
    readonly default: boolean;
    readonly domain: string;
    readonly fallbackRegistry: string;
    readonly id: string;
    readonly kind: string;
    readonly name: string;
    readonly primary: boolean;
    readonly registryProvider: string;
    readonly repositoryPrefix: string;
}
export function getRegistryOutput(args: GetRegistryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryResult> {
    return pulumi.output(args).apply((a: any) => getRegistry(a, opts))
}

/**
 * A collection of arguments for invoking getRegistry.
 */
export interface GetRegistryOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
