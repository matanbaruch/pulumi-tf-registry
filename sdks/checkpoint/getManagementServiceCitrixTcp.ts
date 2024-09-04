// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementServiceCitrixTcp(args?: GetManagementServiceCitrixTcpArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementServiceCitrixTcpResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementServiceCitrixTcp:getManagementServiceCitrixTcp", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementServiceCitrixTcp.
 */
export interface GetManagementServiceCitrixTcpArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementServiceCitrixTcp.
 */
export interface GetManagementServiceCitrixTcpResult {
    readonly application: string;
    readonly color: string;
    readonly comments: string;
    readonly id: string;
    readonly name?: string;
    readonly tags: string[];
    readonly uid?: string;
}
export function getManagementServiceCitrixTcpOutput(args?: GetManagementServiceCitrixTcpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementServiceCitrixTcpResult> {
    return pulumi.output(args).apply((a: any) => getManagementServiceCitrixTcp(a, opts))
}

/**
 * A collection of arguments for invoking getManagementServiceCitrixTcp.
 */
export interface GetManagementServiceCitrixTcpOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
