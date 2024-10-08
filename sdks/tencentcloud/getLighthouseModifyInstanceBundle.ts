// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLighthouseModifyInstanceBundle(args: GetLighthouseModifyInstanceBundleArgs, opts?: pulumi.InvokeOptions): Promise<GetLighthouseModifyInstanceBundleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getLighthouseModifyInstanceBundle:getLighthouseModifyInstanceBundle", {
        "filters": args.filters,
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLighthouseModifyInstanceBundle.
 */
export interface GetLighthouseModifyInstanceBundleArgs {
    filters?: inputs.GetLighthouseModifyInstanceBundleFilter[];
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getLighthouseModifyInstanceBundle.
 */
export interface GetLighthouseModifyInstanceBundleResult {
    readonly filters?: outputs.GetLighthouseModifyInstanceBundleFilter[];
    readonly id: string;
    readonly instanceId: string;
    readonly modifyBundleSets: outputs.GetLighthouseModifyInstanceBundleModifyBundleSet[];
    readonly resultOutputFile?: string;
}
export function getLighthouseModifyInstanceBundleOutput(args: GetLighthouseModifyInstanceBundleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLighthouseModifyInstanceBundleResult> {
    return pulumi.output(args).apply((a: any) => getLighthouseModifyInstanceBundle(a, opts))
}

/**
 * A collection of arguments for invoking getLighthouseModifyInstanceBundle.
 */
export interface GetLighthouseModifyInstanceBundleOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetLighthouseModifyInstanceBundleFilterArgs>[]>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
