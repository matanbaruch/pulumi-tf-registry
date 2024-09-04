// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVirtualRouter(args: GetVirtualRouterArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualRouterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getVirtualRouter:getVirtualRouter", {
        "id": args.id,
        "name": args.name,
        "template": args.template,
        "templateStack": args.templateStack,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualRouter.
 */
export interface GetVirtualRouterArgs {
    id?: string;
    name: string;
    template?: string;
    templateStack?: string;
}

/**
 * A collection of values returned by getVirtualRouter.
 */
export interface GetVirtualRouterResult {
    readonly ebgpDist: number;
    readonly ecmpHashSeed: number;
    readonly ecmpHashSourceOnly: boolean;
    readonly ecmpHashUsePort: boolean;
    readonly ecmpLoadBalanceMethod: string;
    readonly ecmpMaxPath: number;
    readonly ecmpStrictSourcePath: boolean;
    readonly ecmpSymmetricReturn: boolean;
    readonly ecmpWeightedRoundRobinInterfaces: {[key: string]: number};
    readonly enableEcmp: boolean;
    readonly ibgpDist: number;
    readonly id: string;
    readonly interfaces: string[];
    readonly name: string;
    readonly ospfExtDist: number;
    readonly ospfIntDist: number;
    readonly ospfv3ExtDist: number;
    readonly ospfv3IntDist: number;
    readonly ripDist: number;
    readonly staticDist: number;
    readonly staticIpv6Dist: number;
    readonly template?: string;
    readonly templateStack?: string;
}
export function getVirtualRouterOutput(args: GetVirtualRouterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualRouterResult> {
    return pulumi.output(args).apply((a: any) => getVirtualRouter(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualRouter.
 */
export interface GetVirtualRouterOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    templateStack?: pulumi.Input<string>;
}
