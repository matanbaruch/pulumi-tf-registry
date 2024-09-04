// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataSafeOnPremConnectors(args: GetDataSafeOnPremConnectorsArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeOnPremConnectorsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeOnPremConnectors:getDataSafeOnPremConnectors", {
        "accessLevel": args.accessLevel,
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "onPremConnectorId": args.onPremConnectorId,
        "onPremConnectorLifecycleState": args.onPremConnectorLifecycleState,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeOnPremConnectors.
 */
export interface GetDataSafeOnPremConnectorsArgs {
    accessLevel?: string;
    compartmentId: string;
    compartmentIdInSubtree?: boolean;
    displayName?: string;
    filters?: inputs.GetDataSafeOnPremConnectorsFilter[];
    id?: string;
    onPremConnectorId?: string;
    onPremConnectorLifecycleState?: string;
}

/**
 * A collection of values returned by getDataSafeOnPremConnectors.
 */
export interface GetDataSafeOnPremConnectorsResult {
    readonly accessLevel?: string;
    readonly compartmentId: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly displayName?: string;
    readonly filters?: outputs.GetDataSafeOnPremConnectorsFilter[];
    readonly id: string;
    readonly onPremConnectorId?: string;
    readonly onPremConnectorLifecycleState?: string;
    readonly onPremConnectors: outputs.GetDataSafeOnPremConnectorsOnPremConnector[];
}
export function getDataSafeOnPremConnectorsOutput(args: GetDataSafeOnPremConnectorsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeOnPremConnectorsResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeOnPremConnectors(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeOnPremConnectors.
 */
export interface GetDataSafeOnPremConnectorsOutputArgs {
    accessLevel?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDataSafeOnPremConnectorsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    onPremConnectorId?: pulumi.Input<string>;
    onPremConnectorLifecycleState?: pulumi.Input<string>;
}
