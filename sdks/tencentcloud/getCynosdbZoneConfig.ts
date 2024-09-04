// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCynosdbZoneConfig(args?: GetCynosdbZoneConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetCynosdbZoneConfigResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getCynosdbZoneConfig:getCynosdbZoneConfig", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCynosdbZoneConfig.
 */
export interface GetCynosdbZoneConfigArgs {
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getCynosdbZoneConfig.
 */
export interface GetCynosdbZoneConfigResult {
    readonly id: string;
    readonly lists: outputs.GetCynosdbZoneConfigList[];
    readonly resultOutputFile?: string;
}
export function getCynosdbZoneConfigOutput(args?: GetCynosdbZoneConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCynosdbZoneConfigResult> {
    return pulumi.output(args).apply((a: any) => getCynosdbZoneConfig(a, opts))
}

/**
 * A collection of arguments for invoking getCynosdbZoneConfig.
 */
export interface GetCynosdbZoneConfigOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
