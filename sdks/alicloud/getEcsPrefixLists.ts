// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEcsPrefixLists(args?: GetEcsPrefixListsArgs, opts?: pulumi.InvokeOptions): Promise<GetEcsPrefixListsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEcsPrefixLists:getEcsPrefixLists", {
        "addressFamily": args.addressFamily,
        "enableDetails": args.enableDetails,
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEcsPrefixLists.
 */
export interface GetEcsPrefixListsArgs {
    addressFamily?: string;
    enableDetails?: boolean;
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getEcsPrefixLists.
 */
export interface GetEcsPrefixListsResult {
    readonly addressFamily?: string;
    readonly enableDetails?: boolean;
    readonly id: string;
    readonly ids: string[];
    readonly lists: outputs.GetEcsPrefixListsList[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
}
export function getEcsPrefixListsOutput(args?: GetEcsPrefixListsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEcsPrefixListsResult> {
    return pulumi.output(args).apply((a: any) => getEcsPrefixLists(a, opts))
}

/**
 * A collection of arguments for invoking getEcsPrefixLists.
 */
export interface GetEcsPrefixListsOutputArgs {
    addressFamily?: pulumi.Input<string>;
    enableDetails?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
