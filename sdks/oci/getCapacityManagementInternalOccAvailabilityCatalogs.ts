// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCapacityManagementInternalOccAvailabilityCatalogs(args: GetCapacityManagementInternalOccAvailabilityCatalogsArgs, opts?: pulumi.InvokeOptions): Promise<GetCapacityManagementInternalOccAvailabilityCatalogsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCapacityManagementInternalOccAvailabilityCatalogs:getCapacityManagementInternalOccAvailabilityCatalogs", {
        "catalogState": args.catalogState,
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "namespace": args.namespace,
        "occCustomerGroupId": args.occCustomerGroupId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCapacityManagementInternalOccAvailabilityCatalogs.
 */
export interface GetCapacityManagementInternalOccAvailabilityCatalogsArgs {
    catalogState?: string;
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetCapacityManagementInternalOccAvailabilityCatalogsFilter[];
    id?: string;
    namespace?: string;
    occCustomerGroupId?: string;
}

/**
 * A collection of values returned by getCapacityManagementInternalOccAvailabilityCatalogs.
 */
export interface GetCapacityManagementInternalOccAvailabilityCatalogsResult {
    readonly catalogState?: string;
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetCapacityManagementInternalOccAvailabilityCatalogsFilter[];
    readonly id?: string;
    readonly namespace?: string;
    readonly occAvailabilityCatalogCollections: outputs.GetCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection[];
    readonly occCustomerGroupId?: string;
}
export function getCapacityManagementInternalOccAvailabilityCatalogsOutput(args: GetCapacityManagementInternalOccAvailabilityCatalogsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCapacityManagementInternalOccAvailabilityCatalogsResult> {
    return pulumi.output(args).apply((a: any) => getCapacityManagementInternalOccAvailabilityCatalogs(a, opts))
}

/**
 * A collection of arguments for invoking getCapacityManagementInternalOccAvailabilityCatalogs.
 */
export interface GetCapacityManagementInternalOccAvailabilityCatalogsOutputArgs {
    catalogState?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCapacityManagementInternalOccAvailabilityCatalogsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    occCustomerGroupId?: pulumi.Input<string>;
}
