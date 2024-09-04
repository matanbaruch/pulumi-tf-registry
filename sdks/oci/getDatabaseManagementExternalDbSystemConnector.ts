// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementExternalDbSystemConnector(args: GetDatabaseManagementExternalDbSystemConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementExternalDbSystemConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementExternalDbSystemConnector:getDatabaseManagementExternalDbSystemConnector", {
        "externalDbSystemConnectorId": args.externalDbSystemConnectorId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementExternalDbSystemConnector.
 */
export interface GetDatabaseManagementExternalDbSystemConnectorArgs {
    externalDbSystemConnectorId: string;
}

/**
 * A collection of values returned by getDatabaseManagementExternalDbSystemConnector.
 */
export interface GetDatabaseManagementExternalDbSystemConnectorResult {
    readonly agentId: string;
    readonly compartmentId: string;
    readonly connectionFailureMessage: string;
    readonly connectionInfos: outputs.GetDatabaseManagementExternalDbSystemConnectorConnectionInfo[];
    readonly connectionStatus: string;
    readonly connectorType: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly externalDbSystemConnectorId: string;
    readonly externalDbSystemId: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeConnectionStatusLastUpdated: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDatabaseManagementExternalDbSystemConnectorOutput(args: GetDatabaseManagementExternalDbSystemConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementExternalDbSystemConnectorResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementExternalDbSystemConnector(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementExternalDbSystemConnector.
 */
export interface GetDatabaseManagementExternalDbSystemConnectorOutputArgs {
    externalDbSystemConnectorId: pulumi.Input<string>;
}
