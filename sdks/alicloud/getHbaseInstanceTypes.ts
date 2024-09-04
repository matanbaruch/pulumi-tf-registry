// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHbaseInstanceTypes(args?: GetHbaseInstanceTypesArgs, opts?: pulumi.InvokeOptions): Promise<GetHbaseInstanceTypesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getHbaseInstanceTypes:getHbaseInstanceTypes", {
        "chargeType": args.chargeType,
        "diskType": args.diskType,
        "engine": args.engine,
        "id": args.id,
        "instanceType": args.instanceType,
        "outputFile": args.outputFile,
        "regionId": args.regionId,
        "version": args.version,
        "zoneId": args.zoneId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHbaseInstanceTypes.
 */
export interface GetHbaseInstanceTypesArgs {
    chargeType?: string;
    diskType?: string;
    engine?: string;
    id?: string;
    instanceType?: string;
    outputFile?: string;
    regionId?: string;
    version?: string;
    zoneId?: string;
}

/**
 * A collection of values returned by getHbaseInstanceTypes.
 */
export interface GetHbaseInstanceTypesResult {
    readonly chargeType?: string;
    readonly coreInstanceTypes: outputs.GetHbaseInstanceTypesCoreInstanceType[];
    readonly diskType?: string;
    readonly engine?: string;
    readonly id: string;
    readonly ids: string[];
    readonly instanceType?: string;
    readonly masterInstanceTypes: outputs.GetHbaseInstanceTypesMasterInstanceType[];
    readonly outputFile?: string;
    readonly regionId?: string;
    readonly types: outputs.GetHbaseInstanceTypesType[];
    readonly version?: string;
    readonly zoneId?: string;
}
export function getHbaseInstanceTypesOutput(args?: GetHbaseInstanceTypesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHbaseInstanceTypesResult> {
    return pulumi.output(args).apply((a: any) => getHbaseInstanceTypes(a, opts))
}

/**
 * A collection of arguments for invoking getHbaseInstanceTypes.
 */
export interface GetHbaseInstanceTypesOutputArgs {
    chargeType?: pulumi.Input<string>;
    diskType?: pulumi.Input<string>;
    engine?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceType?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    regionId?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
}
