// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudProjectDatabaseIpRestrictions(args: GetCloudProjectDatabaseIpRestrictionsArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudProjectDatabaseIpRestrictionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getCloudProjectDatabaseIpRestrictions:getCloudProjectDatabaseIpRestrictions", {
        "clusterId": args.clusterId,
        "engine": args.engine,
        "serviceName": args.serviceName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudProjectDatabaseIpRestrictions.
 */
export interface GetCloudProjectDatabaseIpRestrictionsArgs {
    clusterId: string;
    engine: string;
    serviceName: string;
}

/**
 * A collection of values returned by getCloudProjectDatabaseIpRestrictions.
 */
export interface GetCloudProjectDatabaseIpRestrictionsResult {
    readonly clusterId: string;
    readonly engine: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ips: string[];
    readonly serviceName: string;
}
export function getCloudProjectDatabaseIpRestrictionsOutput(args: GetCloudProjectDatabaseIpRestrictionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudProjectDatabaseIpRestrictionsResult> {
    return pulumi.output(args).apply((a: any) => getCloudProjectDatabaseIpRestrictions(a, opts))
}

/**
 * A collection of arguments for invoking getCloudProjectDatabaseIpRestrictions.
 */
export interface GetCloudProjectDatabaseIpRestrictionsOutputArgs {
    clusterId: pulumi.Input<string>;
    engine: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
}
