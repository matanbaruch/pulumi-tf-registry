// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRouterHsrpInterface(args: GetRouterHsrpInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterHsrpInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getRouterHsrpInterface:getRouterHsrpInterface", {
        "device": args.device,
        "interfaceName": args.interfaceName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterHsrpInterface.
 */
export interface GetRouterHsrpInterfaceArgs {
    device?: string;
    interfaceName: string;
}

/**
 * A collection of values returned by getRouterHsrpInterface.
 */
export interface GetRouterHsrpInterfaceResult {
    readonly device?: string;
    readonly hsrpBfdMinimumInterval: number;
    readonly hsrpBfdMultiplier: number;
    readonly hsrpDelayMinimum: number;
    readonly hsrpDelayReload: number;
    readonly hsrpMacRefresh: number;
    readonly hsrpRedirectsDisable: boolean;
    readonly hsrpUseBia: boolean;
    readonly id: string;
    readonly interfaceName: string;
}
export function getRouterHsrpInterfaceOutput(args: GetRouterHsrpInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterHsrpInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getRouterHsrpInterface(a, opts))
}

/**
 * A collection of arguments for invoking getRouterHsrpInterface.
 */
export interface GetRouterHsrpInterfaceOutputArgs {
    device?: pulumi.Input<string>;
    interfaceName: pulumi.Input<string>;
}
