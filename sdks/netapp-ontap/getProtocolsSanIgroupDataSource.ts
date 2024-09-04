// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProtocolsSanIgroupDataSource(args: GetProtocolsSanIgroupDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetProtocolsSanIgroupDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netapp-ontap:index/getProtocolsSanIgroupDataSource:getProtocolsSanIgroupDataSource", {
        "cxProfileName": args.cxProfileName,
        "name": args.name,
        "svmName": args.svmName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProtocolsSanIgroupDataSource.
 */
export interface GetProtocolsSanIgroupDataSourceArgs {
    cxProfileName: string;
    name: string;
    svmName: string;
}

/**
 * A collection of values returned by getProtocolsSanIgroupDataSource.
 */
export interface GetProtocolsSanIgroupDataSourceResult {
    readonly comment: string;
    readonly cxProfileName: string;
    readonly id: string;
    readonly igroups: outputs.GetProtocolsSanIgroupDataSourceIgroup[];
    readonly initiators: outputs.GetProtocolsSanIgroupDataSourceInitiator[];
    readonly lunMaps: outputs.GetProtocolsSanIgroupDataSourceLunMap[];
    readonly name: string;
    readonly osType: string;
    readonly portset: outputs.GetProtocolsSanIgroupDataSourcePortset;
    readonly protocol: string;
    readonly svmName: string;
}
export function getProtocolsSanIgroupDataSourceOutput(args: GetProtocolsSanIgroupDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProtocolsSanIgroupDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getProtocolsSanIgroupDataSource(a, opts))
}

/**
 * A collection of arguments for invoking getProtocolsSanIgroupDataSource.
 */
export interface GetProtocolsSanIgroupDataSourceOutputArgs {
    cxProfileName: pulumi.Input<string>;
    name: pulumi.Input<string>;
    svmName: pulumi.Input<string>;
}
