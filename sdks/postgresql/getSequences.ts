// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSequences(args: GetSequencesArgs, opts?: pulumi.InvokeOptions): Promise<GetSequencesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("postgresql:index/getSequences:getSequences", {
        "database": args.database,
        "id": args.id,
        "likeAllPatterns": args.likeAllPatterns,
        "likeAnyPatterns": args.likeAnyPatterns,
        "notLikeAllPatterns": args.notLikeAllPatterns,
        "regexPattern": args.regexPattern,
        "schemas": args.schemas,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSequences.
 */
export interface GetSequencesArgs {
    database: string;
    id?: string;
    likeAllPatterns?: string[];
    likeAnyPatterns?: string[];
    notLikeAllPatterns?: string[];
    regexPattern?: string;
    schemas?: string[];
}

/**
 * A collection of values returned by getSequences.
 */
export interface GetSequencesResult {
    readonly database: string;
    readonly id: string;
    readonly likeAllPatterns?: string[];
    readonly likeAnyPatterns?: string[];
    readonly notLikeAllPatterns?: string[];
    readonly regexPattern?: string;
    readonly schemas?: string[];
    readonly sequences: outputs.GetSequencesSequence[];
}
export function getSequencesOutput(args: GetSequencesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSequencesResult> {
    return pulumi.output(args).apply((a: any) => getSequences(a, opts))
}

/**
 * A collection of arguments for invoking getSequences.
 */
export interface GetSequencesOutputArgs {
    database: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    likeAllPatterns?: pulumi.Input<pulumi.Input<string>[]>;
    likeAnyPatterns?: pulumi.Input<pulumi.Input<string>[]>;
    notLikeAllPatterns?: pulumi.Input<pulumi.Input<string>[]>;
    regexPattern?: pulumi.Input<string>;
    schemas?: pulumi.Input<pulumi.Input<string>[]>;
}
