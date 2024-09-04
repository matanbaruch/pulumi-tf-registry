// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCenTransitRouterCidrs(args: GetCenTransitRouterCidrsArgs, opts?: pulumi.InvokeOptions): Promise<GetCenTransitRouterCidrsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getCenTransitRouterCidrs:getCenTransitRouterCidrs", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "transitRouterCidrId": args.transitRouterCidrId,
        "transitRouterId": args.transitRouterId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCenTransitRouterCidrs.
 */
export interface GetCenTransitRouterCidrsArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    transitRouterCidrId?: string;
    transitRouterId: string;
}

/**
 * A collection of values returned by getCenTransitRouterCidrs.
 */
export interface GetCenTransitRouterCidrsResult {
    readonly cidrs: outputs.GetCenTransitRouterCidrsCidr[];
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly transitRouterCidrId?: string;
    readonly transitRouterId: string;
}
export function getCenTransitRouterCidrsOutput(args: GetCenTransitRouterCidrsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCenTransitRouterCidrsResult> {
    return pulumi.output(args).apply((a: any) => getCenTransitRouterCidrs(a, opts))
}

/**
 * A collection of arguments for invoking getCenTransitRouterCidrs.
 */
export interface GetCenTransitRouterCidrsOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    transitRouterCidrId?: pulumi.Input<string>;
    transitRouterId: pulumi.Input<string>;
}
