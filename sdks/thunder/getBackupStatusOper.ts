// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBackupStatusOper(args?: GetBackupStatusOperArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupStatusOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getBackupStatusOper:getBackupStatusOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBackupStatusOper.
 */
export interface GetBackupStatusOperArgs {
    id?: string;
    oper?: inputs.GetBackupStatusOperOper;
}

/**
 * A collection of values returned by getBackupStatusOper.
 */
export interface GetBackupStatusOperResult {
    readonly id: string;
    readonly oper?: outputs.GetBackupStatusOperOper;
}
export function getBackupStatusOperOutput(args?: GetBackupStatusOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupStatusOperResult> {
    return pulumi.output(args).apply((a: any) => getBackupStatusOper(a, opts))
}

/**
 * A collection of arguments for invoking getBackupStatusOper.
 */
export interface GetBackupStatusOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetBackupStatusOperOperArgs>;
}
