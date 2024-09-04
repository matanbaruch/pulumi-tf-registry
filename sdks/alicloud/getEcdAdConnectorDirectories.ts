// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEcdAdConnectorDirectories(args?: GetEcdAdConnectorDirectoriesArgs, opts?: pulumi.InvokeOptions): Promise<GetEcdAdConnectorDirectoriesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEcdAdConnectorDirectories:getEcdAdConnectorDirectories", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEcdAdConnectorDirectories.
 */
export interface GetEcdAdConnectorDirectoriesArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    status?: string;
}

/**
 * A collection of values returned by getEcdAdConnectorDirectories.
 */
export interface GetEcdAdConnectorDirectoriesResult {
    readonly directories: outputs.GetEcdAdConnectorDirectoriesDirectory[];
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly status?: string;
}
export function getEcdAdConnectorDirectoriesOutput(args?: GetEcdAdConnectorDirectoriesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEcdAdConnectorDirectoriesResult> {
    return pulumi.output(args).apply((a: any) => getEcdAdConnectorDirectories(a, opts))
}

/**
 * A collection of arguments for invoking getEcdAdConnectorDirectories.
 */
export interface GetEcdAdConnectorDirectoriesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
