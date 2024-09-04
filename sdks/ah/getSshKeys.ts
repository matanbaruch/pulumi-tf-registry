// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSshKeys(args?: GetSshKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetSshKeysResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ah:index/getSshKeys:getSshKeys", {
        "filters": args.filters,
        "id": args.id,
        "sorts": args.sorts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSshKeys.
 */
export interface GetSshKeysArgs {
    filters?: inputs.GetSshKeysFilter[];
    id?: string;
    sorts?: inputs.GetSshKeysSort[];
}

/**
 * A collection of values returned by getSshKeys.
 */
export interface GetSshKeysResult {
    readonly filters?: outputs.GetSshKeysFilter[];
    readonly id: string;
    readonly sorts?: outputs.GetSshKeysSort[];
    readonly sshKeys: outputs.GetSshKeysSshKey[];
}
export function getSshKeysOutput(args?: GetSshKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSshKeysResult> {
    return pulumi.output(args).apply((a: any) => getSshKeys(a, opts))
}

/**
 * A collection of arguments for invoking getSshKeys.
 */
export interface GetSshKeysOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetSshKeysFilterArgs>[]>;
    id?: pulumi.Input<string>;
    sorts?: pulumi.Input<pulumi.Input<inputs.GetSshKeysSortArgs>[]>;
}
