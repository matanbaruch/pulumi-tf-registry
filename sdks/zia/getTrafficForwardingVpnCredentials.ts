// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTrafficForwardingVpnCredentials(args?: GetTrafficForwardingVpnCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<GetTrafficForwardingVpnCredentialsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zia:index/getTrafficForwardingVpnCredentials:getTrafficForwardingVpnCredentials", {
        "fqdn": args.fqdn,
        "id": args.id,
        "ipAddress": args.ipAddress,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTrafficForwardingVpnCredentials.
 */
export interface GetTrafficForwardingVpnCredentialsArgs {
    fqdn?: string;
    id?: number;
    ipAddress?: string;
    type?: string;
}

/**
 * A collection of values returned by getTrafficForwardingVpnCredentials.
 */
export interface GetTrafficForwardingVpnCredentialsResult {
    readonly comments: string;
    readonly fqdn?: string;
    readonly id: number;
    readonly ipAddress?: string;
    readonly locations: outputs.GetTrafficForwardingVpnCredentialsLocation[];
    readonly managedBies: outputs.GetTrafficForwardingVpnCredentialsManagedBy[];
    readonly preSharedKey: string;
    readonly type: string;
}
export function getTrafficForwardingVpnCredentialsOutput(args?: GetTrafficForwardingVpnCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTrafficForwardingVpnCredentialsResult> {
    return pulumi.output(args).apply((a: any) => getTrafficForwardingVpnCredentials(a, opts))
}

/**
 * A collection of arguments for invoking getTrafficForwardingVpnCredentials.
 */
export interface GetTrafficForwardingVpnCredentialsOutputArgs {
    fqdn?: pulumi.Input<string>;
    id?: pulumi.Input<number>;
    ipAddress?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
