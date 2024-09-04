// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRouterBgpNeighborGroup(args: GetRouterBgpNeighborGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterBgpNeighborGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getRouterBgpNeighborGroup:getRouterBgpNeighborGroup", {
        "asNumber": args.asNumber,
        "device": args.device,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterBgpNeighborGroup.
 */
export interface GetRouterBgpNeighborGroupArgs {
    asNumber: string;
    device?: string;
    name: string;
}

/**
 * A collection of values returned by getRouterBgpNeighborGroup.
 */
export interface GetRouterBgpNeighborGroupResult {
    readonly addressFamilies: outputs.GetRouterBgpNeighborGroupAddressFamily[];
    readonly advertisementIntervalMilliseconds: number;
    readonly advertisementIntervalSeconds: number;
    readonly aoIncludeTcpOptionsEnable: boolean;
    readonly aoKeyChainName: string;
    readonly asNumber: string;
    readonly bfdFastDetect: boolean;
    readonly bfdFastDetectInheritanceDisable: boolean;
    readonly bfdFastDetectStrictMode: boolean;
    readonly bfdMinimumInterval: number;
    readonly bfdMultiplier: number;
    readonly description: string;
    readonly device?: string;
    readonly id: string;
    readonly localAs: string;
    readonly localAsDualAs: boolean;
    readonly localAsNoPrepend: boolean;
    readonly localAsReplaceAs: boolean;
    readonly name: string;
    readonly remoteAs: string;
    readonly timersHoldtime: string;
    readonly timersKeepaliveInterval: number;
    readonly timersMinimumAcceptableHoldtime: string;
    readonly updateSource: string;
}
export function getRouterBgpNeighborGroupOutput(args: GetRouterBgpNeighborGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterBgpNeighborGroupResult> {
    return pulumi.output(args).apply((a: any) => getRouterBgpNeighborGroup(a, opts))
}

/**
 * A collection of arguments for invoking getRouterBgpNeighborGroup.
 */
export interface GetRouterBgpNeighborGroupOutputArgs {
    asNumber: pulumi.Input<string>;
    device?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
