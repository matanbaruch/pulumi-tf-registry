// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSiteRecoveryFabric(args: GetSiteRecoveryFabricArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteRecoveryFabricResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getSiteRecoveryFabric:getSiteRecoveryFabric", {
        "id": args.id,
        "name": args.name,
        "recoveryVaultName": args.recoveryVaultName,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSiteRecoveryFabric.
 */
export interface GetSiteRecoveryFabricArgs {
    id?: string;
    name: string;
    recoveryVaultName: string;
    resourceGroupName: string;
    timeouts?: inputs.GetSiteRecoveryFabricTimeouts;
}

/**
 * A collection of values returned by getSiteRecoveryFabric.
 */
export interface GetSiteRecoveryFabricResult {
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly recoveryVaultName: string;
    readonly resourceGroupName: string;
    readonly timeouts?: outputs.GetSiteRecoveryFabricTimeouts;
}
export function getSiteRecoveryFabricOutput(args: GetSiteRecoveryFabricOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSiteRecoveryFabricResult> {
    return pulumi.output(args).apply((a: any) => getSiteRecoveryFabric(a, opts))
}

/**
 * A collection of arguments for invoking getSiteRecoveryFabric.
 */
export interface GetSiteRecoveryFabricOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    recoveryVaultName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetSiteRecoveryFabricTimeoutsArgs>;
}
