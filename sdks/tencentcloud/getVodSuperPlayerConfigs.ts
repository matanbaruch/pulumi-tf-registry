// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVodSuperPlayerConfigs(args?: GetVodSuperPlayerConfigsArgs, opts?: pulumi.InvokeOptions): Promise<GetVodSuperPlayerConfigsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getVodSuperPlayerConfigs:getVodSuperPlayerConfigs", {
        "id": args.id,
        "name": args.name,
        "resultOutputFile": args.resultOutputFile,
        "subAppId": args.subAppId,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVodSuperPlayerConfigs.
 */
export interface GetVodSuperPlayerConfigsArgs {
    id?: string;
    name?: string;
    resultOutputFile?: string;
    subAppId?: number;
    type?: string;
}

/**
 * A collection of values returned by getVodSuperPlayerConfigs.
 */
export interface GetVodSuperPlayerConfigsResult {
    readonly configLists: outputs.GetVodSuperPlayerConfigsConfigList[];
    readonly id: string;
    readonly name?: string;
    readonly resultOutputFile?: string;
    readonly subAppId?: number;
    readonly type?: string;
}
export function getVodSuperPlayerConfigsOutput(args?: GetVodSuperPlayerConfigsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVodSuperPlayerConfigsResult> {
    return pulumi.output(args).apply((a: any) => getVodSuperPlayerConfigs(a, opts))
}

/**
 * A collection of arguments for invoking getVodSuperPlayerConfigs.
 */
export interface GetVodSuperPlayerConfigsOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    subAppId?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}
