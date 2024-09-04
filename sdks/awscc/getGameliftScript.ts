// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGameliftScript(args: GetGameliftScriptArgs, opts?: pulumi.InvokeOptions): Promise<GetGameliftScriptResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getGameliftScript:getGameliftScript", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGameliftScript.
 */
export interface GetGameliftScriptArgs {
    id: string;
}

/**
 * A collection of values returned by getGameliftScript.
 */
export interface GetGameliftScriptResult {
    readonly arn: string;
    readonly creationTime: string;
    readonly id: string;
    readonly name: string;
    readonly scriptId: string;
    readonly sizeOnDisk: number;
    readonly storageLocation: outputs.GetGameliftScriptStorageLocation;
    readonly tags: outputs.GetGameliftScriptTag[];
    readonly version: string;
}
export function getGameliftScriptOutput(args: GetGameliftScriptOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGameliftScriptResult> {
    return pulumi.output(args).apply((a: any) => getGameliftScript(a, opts))
}

/**
 * A collection of arguments for invoking getGameliftScript.
 */
export interface GetGameliftScriptOutputArgs {
    id: pulumi.Input<string>;
}
