// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getInstanceTypeFamilies(args?: GetInstanceTypeFamiliesArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceTypeFamiliesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getInstanceTypeFamilies:getInstanceTypeFamilies", {
        "generation": args.generation,
        "id": args.id,
        "instanceChargeType": args.instanceChargeType,
        "outputFile": args.outputFile,
        "spotStrategy": args.spotStrategy,
        "zoneId": args.zoneId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInstanceTypeFamilies.
 */
export interface GetInstanceTypeFamiliesArgs {
    generation?: string;
    id?: string;
    instanceChargeType?: string;
    outputFile?: string;
    spotStrategy?: string;
    zoneId?: string;
}

/**
 * A collection of values returned by getInstanceTypeFamilies.
 */
export interface GetInstanceTypeFamiliesResult {
    readonly families: outputs.GetInstanceTypeFamiliesFamily[];
    readonly generation?: string;
    readonly id: string;
    readonly ids: string[];
    readonly instanceChargeType?: string;
    readonly outputFile?: string;
    readonly spotStrategy?: string;
    readonly zoneId?: string;
}
export function getInstanceTypeFamiliesOutput(args?: GetInstanceTypeFamiliesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInstanceTypeFamiliesResult> {
    return pulumi.output(args).apply((a: any) => getInstanceTypeFamilies(a, opts))
}

/**
 * A collection of arguments for invoking getInstanceTypeFamilies.
 */
export interface GetInstanceTypeFamiliesOutputArgs {
    generation?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceChargeType?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    spotStrategy?: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
}
