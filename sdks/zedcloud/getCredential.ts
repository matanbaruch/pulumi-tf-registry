// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCredential(args?: GetCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetCredentialResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zedcloud:index/getCredential:getCredential", {
        "id": args.id,
        "lists": args.lists,
        "nexts": args.nexts,
        "summaryByStates": args.summaryByStates,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCredential.
 */
export interface GetCredentialArgs {
    id?: string;
    lists?: inputs.GetCredentialList[];
    nexts?: inputs.GetCredentialNext[];
    summaryByStates?: inputs.GetCredentialSummaryByState[];
}

/**
 * A collection of values returned by getCredential.
 */
export interface GetCredentialResult {
    readonly id: string;
    readonly lists?: outputs.GetCredentialList[];
    readonly nexts?: outputs.GetCredentialNext[];
    readonly summaryByStates?: outputs.GetCredentialSummaryByState[];
}
export function getCredentialOutput(args?: GetCredentialOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCredentialResult> {
    return pulumi.output(args).apply((a: any) => getCredential(a, opts))
}

/**
 * A collection of arguments for invoking getCredential.
 */
export interface GetCredentialOutputArgs {
    id?: pulumi.Input<string>;
    lists?: pulumi.Input<pulumi.Input<inputs.GetCredentialListArgs>[]>;
    nexts?: pulumi.Input<pulumi.Input<inputs.GetCredentialNextArgs>[]>;
    summaryByStates?: pulumi.Input<pulumi.Input<inputs.GetCredentialSummaryByStateArgs>[]>;
}
