// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementExternalDbHomes(args?: GetDatabaseManagementExternalDbHomesArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementExternalDbHomesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementExternalDbHomes:getDatabaseManagementExternalDbHomes", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "externalDbSystemId": args.externalDbSystemId,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementExternalDbHomes.
 */
export interface GetDatabaseManagementExternalDbHomesArgs {
    compartmentId?: string;
    displayName?: string;
    externalDbSystemId?: string;
    filters?: inputs.GetDatabaseManagementExternalDbHomesFilter[];
    id?: string;
}

/**
 * A collection of values returned by getDatabaseManagementExternalDbHomes.
 */
export interface GetDatabaseManagementExternalDbHomesResult {
    readonly compartmentId?: string;
    readonly displayName?: string;
    readonly externalDbHomeCollections: outputs.GetDatabaseManagementExternalDbHomesExternalDbHomeCollection[];
    readonly externalDbSystemId?: string;
    readonly filters?: outputs.GetDatabaseManagementExternalDbHomesFilter[];
    readonly id: string;
}
export function getDatabaseManagementExternalDbHomesOutput(args?: GetDatabaseManagementExternalDbHomesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementExternalDbHomesResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementExternalDbHomes(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementExternalDbHomes.
 */
export interface GetDatabaseManagementExternalDbHomesOutputArgs {
    compartmentId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    externalDbSystemId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseManagementExternalDbHomesFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
