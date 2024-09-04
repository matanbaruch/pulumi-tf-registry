// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAuditConfiguration(args: GetAuditConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetAuditConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getAuditConfiguration:getAuditConfiguration", {
        "compartmentId": args.compartmentId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAuditConfiguration.
 */
export interface GetAuditConfigurationArgs {
    compartmentId: string;
}

/**
 * A collection of values returned by getAuditConfiguration.
 */
export interface GetAuditConfigurationResult {
    readonly compartmentId: string;
    readonly id: string;
    readonly retentionPeriodDays: number;
}
export function getAuditConfigurationOutput(args: GetAuditConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuditConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getAuditConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getAuditConfiguration.
 */
export interface GetAuditConfigurationOutputArgs {
    compartmentId: pulumi.Input<string>;
}
