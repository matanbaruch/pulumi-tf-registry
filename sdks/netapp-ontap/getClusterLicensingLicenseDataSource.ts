// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getClusterLicensingLicenseDataSource(args: GetClusterLicensingLicenseDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterLicensingLicenseDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netapp-ontap:index/getClusterLicensingLicenseDataSource:getClusterLicensingLicenseDataSource", {
        "cxProfileName": args.cxProfileName,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClusterLicensingLicenseDataSource.
 */
export interface GetClusterLicensingLicenseDataSourceArgs {
    cxProfileName: string;
    name: string;
}

/**
 * A collection of values returned by getClusterLicensingLicenseDataSource.
 */
export interface GetClusterLicensingLicenseDataSourceResult {
    readonly cxProfileName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly licenses: outputs.GetClusterLicensingLicenseDataSourceLicense[];
    readonly name: string;
    readonly scope: string;
    readonly state: string;
}
export function getClusterLicensingLicenseDataSourceOutput(args: GetClusterLicensingLicenseDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterLicensingLicenseDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getClusterLicensingLicenseDataSource(a, opts))
}

/**
 * A collection of arguments for invoking getClusterLicensingLicenseDataSource.
 */
export interface GetClusterLicensingLicenseDataSourceOutputArgs {
    cxProfileName: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
