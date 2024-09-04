// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCdssConfigGroup(args: GetCdssConfigGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetCdssConfigGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ncloud:index/getCdssConfigGroup:getCdssConfigGroup", {
        "filters": args.filters,
        "kafkaVersionCode": args.kafkaVersionCode,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCdssConfigGroup.
 */
export interface GetCdssConfigGroupArgs {
    filters?: inputs.GetCdssConfigGroupFilter[];
    kafkaVersionCode: string;
}

/**
 * A collection of values returned by getCdssConfigGroup.
 */
export interface GetCdssConfigGroupResult {
    readonly configGroupNo: string;
    readonly description: string;
    readonly filters?: outputs.GetCdssConfigGroupFilter[];
    readonly id: string;
    readonly kafkaVersionCode: string;
    readonly name: string;
}
export function getCdssConfigGroupOutput(args: GetCdssConfigGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCdssConfigGroupResult> {
    return pulumi.output(args).apply((a: any) => getCdssConfigGroup(a, opts))
}

/**
 * A collection of arguments for invoking getCdssConfigGroup.
 */
export interface GetCdssConfigGroupOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetCdssConfigGroupFilterArgs>[]>;
    kafkaVersionCode: pulumi.Input<string>;
}
