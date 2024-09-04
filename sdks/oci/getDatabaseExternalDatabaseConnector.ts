// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseExternalDatabaseConnector(args: GetDatabaseExternalDatabaseConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseExternalDatabaseConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseExternalDatabaseConnector:getDatabaseExternalDatabaseConnector", {
        "externalDatabaseConnectorId": args.externalDatabaseConnectorId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseExternalDatabaseConnector.
 */
export interface GetDatabaseExternalDatabaseConnectorArgs {
    externalDatabaseConnectorId: string;
}

/**
 * A collection of values returned by getDatabaseExternalDatabaseConnector.
 */
export interface GetDatabaseExternalDatabaseConnectorResult {
    readonly compartmentId: string;
    readonly connectionCredentials: outputs.GetDatabaseExternalDatabaseConnectorConnectionCredential[];
    readonly connectionStatus: string;
    readonly connectionStrings: outputs.GetDatabaseExternalDatabaseConnectorConnectionString[];
    readonly connectorAgentId: string;
    readonly connectorType: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly externalDatabaseConnectorId: string;
    readonly externalDatabaseId: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly state: string;
    readonly timeConnectionStatusLastUpdated: string;
    readonly timeCreated: string;
}
export function getDatabaseExternalDatabaseConnectorOutput(args: GetDatabaseExternalDatabaseConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseExternalDatabaseConnectorResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseExternalDatabaseConnector(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseExternalDatabaseConnector.
 */
export interface GetDatabaseExternalDatabaseConnectorOutputArgs {
    externalDatabaseConnectorId: pulumi.Input<string>;
}
