// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getInspectionCustomControls(args?: GetInspectionCustomControlsArgs, opts?: pulumi.InvokeOptions): Promise<GetInspectionCustomControlsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zpa:index/getInspectionCustomControls:getInspectionCustomControls", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInspectionCustomControls.
 */
export interface GetInspectionCustomControlsArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getInspectionCustomControls.
 */
export interface GetInspectionCustomControlsResult {
    readonly action: string;
    readonly actionValue: string;
    readonly controlNumber: string;
    readonly controlRuleJson: string;
    readonly controlType: string;
    readonly creationTime: string;
    readonly defaultAction: string;
    readonly defaultActionValue: string;
    readonly description: string;
    readonly id: string;
    readonly modifiedTime: string;
    readonly modifiedby: string;
    readonly name: string;
    readonly paranoiaLevel: string;
    readonly protocolType: string;
    readonly rules: outputs.GetInspectionCustomControlsRule[];
    readonly severity: string;
    readonly type: string;
    readonly version: string;
}
export function getInspectionCustomControlsOutput(args?: GetInspectionCustomControlsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInspectionCustomControlsResult> {
    return pulumi.output(args).apply((a: any) => getInspectionCustomControls(a, opts))
}

/**
 * A collection of arguments for invoking getInspectionCustomControls.
 */
export interface GetInspectionCustomControlsOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
