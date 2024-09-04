// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getInspectionAllPredefinedControls(args?: GetInspectionAllPredefinedControlsArgs, opts?: pulumi.InvokeOptions): Promise<GetInspectionAllPredefinedControlsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zpa:index/getInspectionAllPredefinedControls:getInspectionAllPredefinedControls", {
        "groupName": args.groupName,
        "id": args.id,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInspectionAllPredefinedControls.
 */
export interface GetInspectionAllPredefinedControlsArgs {
    groupName?: string;
    id?: string;
    version?: string;
}

/**
 * A collection of values returned by getInspectionAllPredefinedControls.
 */
export interface GetInspectionAllPredefinedControlsResult {
    readonly groupName?: string;
    readonly id: string;
    readonly lists: outputs.GetInspectionAllPredefinedControlsList[];
    readonly version?: string;
}
export function getInspectionAllPredefinedControlsOutput(args?: GetInspectionAllPredefinedControlsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInspectionAllPredefinedControlsResult> {
    return pulumi.output(args).apply((a: any) => getInspectionAllPredefinedControls(a, opts))
}

/**
 * A collection of arguments for invoking getInspectionAllPredefinedControls.
 */
export interface GetInspectionAllPredefinedControlsOutputArgs {
    groupName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}
