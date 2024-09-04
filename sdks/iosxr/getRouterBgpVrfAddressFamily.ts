// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRouterBgpVrfAddressFamily(args: GetRouterBgpVrfAddressFamilyArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterBgpVrfAddressFamilyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getRouterBgpVrfAddressFamily:getRouterBgpVrfAddressFamily", {
        "afName": args.afName,
        "asNumber": args.asNumber,
        "device": args.device,
        "vrfName": args.vrfName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterBgpVrfAddressFamily.
 */
export interface GetRouterBgpVrfAddressFamilyArgs {
    afName: string;
    asNumber: string;
    device?: string;
    vrfName: string;
}

/**
 * A collection of values returned by getRouterBgpVrfAddressFamily.
 */
export interface GetRouterBgpVrfAddressFamilyResult {
    readonly additionalPathsReceive: boolean;
    readonly additionalPathsSelectionRoutePolicy: string;
    readonly additionalPathsSend: boolean;
    readonly advertiseBestExternal: boolean;
    readonly afName: string;
    readonly aggregateAddresses: outputs.GetRouterBgpVrfAddressFamilyAggregateAddress[];
    readonly allocateLabelAll: boolean;
    readonly allocateLabelAllUnlabeledPath: boolean;
    readonly asNumber: string;
    readonly device?: string;
    readonly id: string;
    readonly labelModePerCe: boolean;
    readonly labelModePerVrf: boolean;
    readonly maximumPathsEbgpMultipath: number;
    readonly maximumPathsEibgpMultipath: number;
    readonly maximumPathsIbgpMultipath: number;
    readonly networks: outputs.GetRouterBgpVrfAddressFamilyNetwork[];
    readonly redistributeConnected: boolean;
    readonly redistributeConnectedMetric: number;
    readonly redistributeConnectedRoutePolicy: string;
    readonly redistributeOspfs: outputs.GetRouterBgpVrfAddressFamilyRedistributeOspf[];
    readonly redistributeStatic: boolean;
    readonly redistributeStaticMetric: number;
    readonly redistributeStaticRoutePolicy: string;
    readonly segmentRoutingSrv6AllocModePerVrf: boolean;
    readonly segmentRoutingSrv6Locator: string;
    readonly vrfName: string;
}
export function getRouterBgpVrfAddressFamilyOutput(args: GetRouterBgpVrfAddressFamilyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterBgpVrfAddressFamilyResult> {
    return pulumi.output(args).apply((a: any) => getRouterBgpVrfAddressFamily(a, opts))
}

/**
 * A collection of arguments for invoking getRouterBgpVrfAddressFamily.
 */
export interface GetRouterBgpVrfAddressFamilyOutputArgs {
    afName: pulumi.Input<string>;
    asNumber: pulumi.Input<string>;
    device?: pulumi.Input<string>;
    vrfName: pulumi.Input<string>;
}
