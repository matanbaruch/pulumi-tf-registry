// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreIpsecConnections(args: GetCoreIpsecConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreIpsecConnectionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreIpsecConnections:getCoreIpsecConnections", {
        "compartmentId": args.compartmentId,
        "cpeId": args.cpeId,
        "drgId": args.drgId,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreIpsecConnections.
 */
export interface GetCoreIpsecConnectionsArgs {
    compartmentId: string;
    cpeId?: string;
    drgId?: string;
    filters?: inputs.GetCoreIpsecConnectionsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getCoreIpsecConnections.
 */
export interface GetCoreIpsecConnectionsResult {
    readonly compartmentId: string;
    readonly connections: outputs.GetCoreIpsecConnectionsConnection[];
    readonly cpeId?: string;
    readonly drgId?: string;
    readonly filters?: outputs.GetCoreIpsecConnectionsFilter[];
    readonly id: string;
}
export function getCoreIpsecConnectionsOutput(args: GetCoreIpsecConnectionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreIpsecConnectionsResult> {
    return pulumi.output(args).apply((a: any) => getCoreIpsecConnections(a, opts))
}

/**
 * A collection of arguments for invoking getCoreIpsecConnections.
 */
export interface GetCoreIpsecConnectionsOutputArgs {
    compartmentId: pulumi.Input<string>;
    cpeId?: pulumi.Input<string>;
    drgId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreIpsecConnectionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
