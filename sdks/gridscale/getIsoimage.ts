// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIsoimage(args: GetIsoimageArgs, opts?: pulumi.InvokeOptions): Promise<GetIsoimageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gridscale:index/getIsoimage:getIsoimage", {
        "id": args.id,
        "resourceId": args.resourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIsoimage.
 */
export interface GetIsoimageArgs {
    id?: string;
    resourceId: string;
}

/**
 * A collection of values returned by getIsoimage.
 */
export interface GetIsoimageResult {
    readonly capacity: number;
    readonly changeTime: string;
    readonly createTime: string;
    readonly currentPrice: number;
    readonly description: string;
    readonly id: string;
    readonly labels: string[];
    readonly locationCountry: string;
    readonly locationIata: string;
    readonly locationName: string;
    readonly locationUuid: string;
    readonly name: string;
    readonly private: boolean;
    readonly resourceId: string;
    readonly servers: outputs.GetIsoimageServer[];
    readonly sourceUrl: string;
    readonly status: string;
    readonly usageInMinutes: number;
    readonly version: string;
}
export function getIsoimageOutput(args: GetIsoimageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIsoimageResult> {
    return pulumi.output(args).apply((a: any) => getIsoimage(a, opts))
}

/**
 * A collection of arguments for invoking getIsoimage.
 */
export interface GetIsoimageOutputArgs {
    id?: pulumi.Input<string>;
    resourceId: pulumi.Input<string>;
}
