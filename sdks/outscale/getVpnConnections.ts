// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpnConnections(args?: GetVpnConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnConnectionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("outscale:index/getVpnConnections:getVpnConnections", {
        "filters": args.filters,
        "id": args.id,
        "vpnConnectionIds": args.vpnConnectionIds,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpnConnections.
 */
export interface GetVpnConnectionsArgs {
    filters?: inputs.GetVpnConnectionsFilter[];
    id?: string;
    vpnConnectionIds?: string[];
}

/**
 * A collection of values returned by getVpnConnections.
 */
export interface GetVpnConnectionsResult {
    readonly filters?: outputs.GetVpnConnectionsFilter[];
    readonly id: string;
    readonly requestId: string;
    readonly vpnConnectionIds?: string[];
    readonly vpnConnections: outputs.GetVpnConnectionsVpnConnection[];
}
export function getVpnConnectionsOutput(args?: GetVpnConnectionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnConnectionsResult> {
    return pulumi.output(args).apply((a: any) => getVpnConnections(a, opts))
}

/**
 * A collection of arguments for invoking getVpnConnections.
 */
export interface GetVpnConnectionsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetVpnConnectionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    vpnConnectionIds?: pulumi.Input<pulumi.Input<string>[]>;
}
