// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNote(args?: GetNoteArgs, opts?: pulumi.InvokeOptions): Promise<GetNoteResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sakuracloud:index/getNote:getNote", {
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNote.
 */
export interface GetNoteArgs {
    filter?: inputs.GetNoteFilter;
    id?: string;
}

/**
 * A collection of values returned by getNote.
 */
export interface GetNoteResult {
    readonly class: string;
    readonly content: string;
    readonly description: string;
    readonly filter?: outputs.GetNoteFilter;
    readonly iconId: string;
    readonly id: string;
    readonly name: string;
    readonly tags: string[];
}
export function getNoteOutput(args?: GetNoteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNoteResult> {
    return pulumi.output(args).apply((a: any) => getNote(a, opts))
}

/**
 * A collection of arguments for invoking getNote.
 */
export interface GetNoteOutputArgs {
    filter?: pulumi.Input<inputs.GetNoteFilterArgs>;
    id?: pulumi.Input<string>;
}
