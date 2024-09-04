// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGaapCustomHeader(args: GetGaapCustomHeaderArgs, opts?: pulumi.InvokeOptions): Promise<GetGaapCustomHeaderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getGaapCustomHeader:getGaapCustomHeader", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
        "ruleId": args.ruleId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGaapCustomHeader.
 */
export interface GetGaapCustomHeaderArgs {
    id?: string;
    resultOutputFile?: string;
    ruleId: string;
}

/**
 * A collection of values returned by getGaapCustomHeader.
 */
export interface GetGaapCustomHeaderResult {
    readonly headers: outputs.GetGaapCustomHeaderHeader[];
    readonly id: string;
    readonly resultOutputFile?: string;
    readonly ruleId: string;
}
export function getGaapCustomHeaderOutput(args: GetGaapCustomHeaderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGaapCustomHeaderResult> {
    return pulumi.output(args).apply((a: any) => getGaapCustomHeader(a, opts))
}

/**
 * A collection of arguments for invoking getGaapCustomHeader.
 */
export interface GetGaapCustomHeaderOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    ruleId: pulumi.Input<string>;
}
