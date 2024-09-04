// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNameServicesLdapsDataSource(args: GetNameServicesLdapsDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetNameServicesLdapsDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netapp-ontap:index/getNameServicesLdapsDataSource:getNameServicesLdapsDataSource", {
        "cxProfileName": args.cxProfileName,
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNameServicesLdapsDataSource.
 */
export interface GetNameServicesLdapsDataSourceArgs {
    cxProfileName: string;
    filter?: inputs.GetNameServicesLdapsDataSourceFilter;
}

/**
 * A collection of values returned by getNameServicesLdapsDataSource.
 */
export interface GetNameServicesLdapsDataSourceResult {
    readonly cxProfileName: string;
    readonly filter?: outputs.GetNameServicesLdapsDataSourceFilter;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly nameServicesLdaps: outputs.GetNameServicesLdapsDataSourceNameServicesLdap[];
}
export function getNameServicesLdapsDataSourceOutput(args: GetNameServicesLdapsDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNameServicesLdapsDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getNameServicesLdapsDataSource(a, opts))
}

/**
 * A collection of arguments for invoking getNameServicesLdapsDataSource.
 */
export interface GetNameServicesLdapsDataSourceOutputArgs {
    cxProfileName: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.GetNameServicesLdapsDataSourceFilterArgs>;
}
