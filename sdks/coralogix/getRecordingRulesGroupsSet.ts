// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRecordingRulesGroupsSet(args: GetRecordingRulesGroupsSetArgs, opts?: pulumi.InvokeOptions): Promise<GetRecordingRulesGroupsSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("coralogix:index/getRecordingRulesGroupsSet:getRecordingRulesGroupsSet", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRecordingRulesGroupsSet.
 */
export interface GetRecordingRulesGroupsSetArgs {
    id: string;
}

/**
 * A collection of values returned by getRecordingRulesGroupsSet.
 */
export interface GetRecordingRulesGroupsSetResult {
    readonly groups: outputs.GetRecordingRulesGroupsSetGroup[];
    readonly id: string;
    readonly name: string;
    readonly yamlContent: string;
}
export function getRecordingRulesGroupsSetOutput(args: GetRecordingRulesGroupsSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRecordingRulesGroupsSetResult> {
    return pulumi.output(args).apply((a: any) => getRecordingRulesGroupsSet(a, opts))
}

/**
 * A collection of arguments for invoking getRecordingRulesGroupsSet.
 */
export interface GetRecordingRulesGroupsSetOutputArgs {
    id: pulumi.Input<string>;
}
