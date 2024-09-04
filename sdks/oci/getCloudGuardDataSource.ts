// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudGuardDataSource(args: GetCloudGuardDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudGuardDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCloudGuardDataSource:getCloudGuardDataSource", {
        "dataSourceId": args.dataSourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudGuardDataSource.
 */
export interface GetCloudGuardDataSourceArgs {
    dataSourceId: string;
}

/**
 * A collection of values returned by getCloudGuardDataSource.
 */
export interface GetCloudGuardDataSourceResult {
    readonly compartmentId: string;
    readonly dataSourceDetails: outputs.GetCloudGuardDataSourceDataSourceDetail[];
    readonly dataSourceDetectorMappingInfos: outputs.GetCloudGuardDataSourceDataSourceDetectorMappingInfo[];
    readonly dataSourceFeedProvider: string;
    readonly dataSourceId: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly regionStatusDetails: outputs.GetCloudGuardDataSourceRegionStatusDetail[];
    readonly state: string;
    readonly status: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getCloudGuardDataSourceOutput(args: GetCloudGuardDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudGuardDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getCloudGuardDataSource(a, opts))
}

/**
 * A collection of arguments for invoking getCloudGuardDataSource.
 */
export interface GetCloudGuardDataSourceOutputArgs {
    dataSourceId: pulumi.Input<string>;
}
