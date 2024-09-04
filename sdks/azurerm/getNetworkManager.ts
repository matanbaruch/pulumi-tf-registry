// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkManager(args: GetNetworkManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkManagerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getNetworkManager:getNetworkManager", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkManager.
 */
export interface GetNetworkManagerArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetNetworkManagerTimeouts;
}

/**
 * A collection of values returned by getNetworkManager.
 */
export interface GetNetworkManagerResult {
    readonly crossTenantScopes: outputs.GetNetworkManagerCrossTenantScope[];
    readonly description: string;
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly scopeAccesses: string[];
    readonly scopes: outputs.GetNetworkManagerScope[];
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetNetworkManagerTimeouts;
}
export function getNetworkManagerOutput(args: GetNetworkManagerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkManagerResult> {
    return pulumi.output(args).apply((a: any) => getNetworkManager(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkManager.
 */
export interface GetNetworkManagerOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetNetworkManagerTimeoutsArgs>;
}
