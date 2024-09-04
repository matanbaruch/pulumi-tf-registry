// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRouterOspfAreaInterface(args: GetRouterOspfAreaInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterOspfAreaInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getRouterOspfAreaInterface:getRouterOspfAreaInterface", {
        "areaId": args.areaId,
        "device": args.device,
        "interfaceName": args.interfaceName,
        "processName": args.processName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterOspfAreaInterface.
 */
export interface GetRouterOspfAreaInterfaceArgs {
    areaId: string;
    device?: string;
    interfaceName: string;
    processName: string;
}

/**
 * A collection of values returned by getRouterOspfAreaInterface.
 */
export interface GetRouterOspfAreaInterfaceResult {
    readonly areaId: string;
    readonly cost: number;
    readonly device?: string;
    readonly fastReroutePerPrefixTiLfa: boolean;
    readonly fastReroutePerPrefixTiebreakerNodeProtecting: number;
    readonly fastReroutePerPrefixTiebreakerSrlgDisjoint: number;
    readonly id: string;
    readonly interfaceName: string;
    readonly networkBroadcast: boolean;
    readonly networkNonBroadcast: boolean;
    readonly networkPointToMultipoint: boolean;
    readonly networkPointToPoint: boolean;
    readonly passiveDisable: boolean;
    readonly passiveEnable: boolean;
    readonly prefixSidAlgorithms: outputs.GetRouterOspfAreaInterfacePrefixSidAlgorithm[];
    readonly prefixSidStrictSpfIndex: number;
    readonly priority: number;
    readonly processName: string;
}
export function getRouterOspfAreaInterfaceOutput(args: GetRouterOspfAreaInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterOspfAreaInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getRouterOspfAreaInterface(a, opts))
}

/**
 * A collection of arguments for invoking getRouterOspfAreaInterface.
 */
export interface GetRouterOspfAreaInterfaceOutputArgs {
    areaId: pulumi.Input<string>;
    device?: pulumi.Input<string>;
    interfaceName: pulumi.Input<string>;
    processName: pulumi.Input<string>;
}
