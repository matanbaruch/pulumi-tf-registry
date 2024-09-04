// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMsgVpnProxy(args: GetMsgVpnProxyArgs, opts?: pulumi.InvokeOptions): Promise<GetMsgVpnProxyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getMsgVpnProxy:getMsgVpnProxy", {
        "msgVpnName": args.msgVpnName,
        "proxyName": args.proxyName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMsgVpnProxy.
 */
export interface GetMsgVpnProxyArgs {
    msgVpnName: string;
    proxyName: string;
}

/**
 * A collection of values returned by getMsgVpnProxy.
 */
export interface GetMsgVpnProxyResult {
    readonly authenticationBasicUsername: string;
    readonly authenticationScheme: string;
    readonly enabled: boolean;
    readonly host: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly msgVpnName: string;
    readonly port: number;
    readonly proxyName: string;
    readonly proxyType: string;
}
export function getMsgVpnProxyOutput(args: GetMsgVpnProxyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMsgVpnProxyResult> {
    return pulumi.output(args).apply((a: any) => getMsgVpnProxy(a, opts))
}

/**
 * A collection of arguments for invoking getMsgVpnProxy.
 */
export interface GetMsgVpnProxyOutputArgs {
    msgVpnName: pulumi.Input<string>;
    proxyName: pulumi.Input<string>;
}
