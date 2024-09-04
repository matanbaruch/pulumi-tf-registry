// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementExternalDbSystemDiscovery(args: GetDatabaseManagementExternalDbSystemDiscoveryArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementExternalDbSystemDiscoveryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementExternalDbSystemDiscovery:getDatabaseManagementExternalDbSystemDiscovery", {
        "externalDbSystemDiscoveryId": args.externalDbSystemDiscoveryId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementExternalDbSystemDiscovery.
 */
export interface GetDatabaseManagementExternalDbSystemDiscoveryArgs {
    externalDbSystemDiscoveryId: string;
}

/**
 * A collection of values returned by getDatabaseManagementExternalDbSystemDiscovery.
 */
export interface GetDatabaseManagementExternalDbSystemDiscoveryResult {
    readonly agentId: string;
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly discoveredComponents: outputs.GetDatabaseManagementExternalDbSystemDiscoveryDiscoveredComponent[];
    readonly displayName: string;
    readonly externalDbSystemDiscoveryId: string;
    readonly freeformTags: {[key: string]: string};
    readonly gridHome: string;
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly patchOperations: outputs.GetDatabaseManagementExternalDbSystemDiscoveryPatchOperation[];
    readonly resourceId: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDatabaseManagementExternalDbSystemDiscoveryOutput(args: GetDatabaseManagementExternalDbSystemDiscoveryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementExternalDbSystemDiscoveryResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementExternalDbSystemDiscovery(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementExternalDbSystemDiscovery.
 */
export interface GetDatabaseManagementExternalDbSystemDiscoveryOutputArgs {
    externalDbSystemDiscoveryId: pulumi.Input<string>;
}
