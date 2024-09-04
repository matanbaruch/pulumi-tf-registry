// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNameServicesDnsDataSource(args: GetNameServicesDnsDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetNameServicesDnsDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netapp-ontap:index/getNameServicesDnsDataSource:getNameServicesDnsDataSource", {
        "cxProfileName": args.cxProfileName,
        "svmName": args.svmName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNameServicesDnsDataSource.
 */
export interface GetNameServicesDnsDataSourceArgs {
    cxProfileName: string;
    svmName: string;
}

/**
 * A collection of values returned by getNameServicesDnsDataSource.
 */
export interface GetNameServicesDnsDataSourceResult {
    readonly cxProfileName: string;
    readonly dnsDomains: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly nameServers: string[];
    readonly svmName: string;
    readonly svmUuid: string;
}
export function getNameServicesDnsDataSourceOutput(args: GetNameServicesDnsDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNameServicesDnsDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getNameServicesDnsDataSource(a, opts))
}

/**
 * A collection of arguments for invoking getNameServicesDnsDataSource.
 */
export interface GetNameServicesDnsDataSourceOutputArgs {
    cxProfileName: pulumi.Input<string>;
    svmName: pulumi.Input<string>;
}
