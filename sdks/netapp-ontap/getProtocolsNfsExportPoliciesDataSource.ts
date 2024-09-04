// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProtocolsNfsExportPoliciesDataSource(args: GetProtocolsNfsExportPoliciesDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetProtocolsNfsExportPoliciesDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netapp-ontap:index/getProtocolsNfsExportPoliciesDataSource:getProtocolsNfsExportPoliciesDataSource", {
        "cxProfileName": args.cxProfileName,
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProtocolsNfsExportPoliciesDataSource.
 */
export interface GetProtocolsNfsExportPoliciesDataSourceArgs {
    cxProfileName: string;
    filter?: inputs.GetProtocolsNfsExportPoliciesDataSourceFilter;
}

/**
 * A collection of values returned by getProtocolsNfsExportPoliciesDataSource.
 */
export interface GetProtocolsNfsExportPoliciesDataSourceResult {
    readonly cxProfileName: string;
    readonly filter?: outputs.GetProtocolsNfsExportPoliciesDataSourceFilter;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly protocolsNfsExportPolicies: outputs.GetProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPolicy[];
}
export function getProtocolsNfsExportPoliciesDataSourceOutput(args: GetProtocolsNfsExportPoliciesDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProtocolsNfsExportPoliciesDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getProtocolsNfsExportPoliciesDataSource(a, opts))
}

/**
 * A collection of arguments for invoking getProtocolsNfsExportPoliciesDataSource.
 */
export interface GetProtocolsNfsExportPoliciesDataSourceOutputArgs {
    cxProfileName: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.GetProtocolsNfsExportPoliciesDataSourceFilterArgs>;
}
