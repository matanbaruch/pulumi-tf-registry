// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getJmsJavaFamilies(args?: GetJmsJavaFamiliesArgs, opts?: pulumi.InvokeOptions): Promise<GetJmsJavaFamiliesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getJmsJavaFamilies:getJmsJavaFamilies", {
        "displayName": args.displayName,
        "familyVersion": args.familyVersion,
        "filters": args.filters,
        "id": args.id,
        "isSupportedVersion": args.isSupportedVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getJmsJavaFamilies.
 */
export interface GetJmsJavaFamiliesArgs {
    displayName?: string;
    familyVersion?: string;
    filters?: inputs.GetJmsJavaFamiliesFilter[];
    id?: string;
    isSupportedVersion?: boolean;
}

/**
 * A collection of values returned by getJmsJavaFamilies.
 */
export interface GetJmsJavaFamiliesResult {
    readonly displayName?: string;
    readonly familyVersion?: string;
    readonly filters?: outputs.GetJmsJavaFamiliesFilter[];
    readonly id: string;
    readonly isSupportedVersion?: boolean;
    readonly javaFamilyCollections: outputs.GetJmsJavaFamiliesJavaFamilyCollection[];
}
export function getJmsJavaFamiliesOutput(args?: GetJmsJavaFamiliesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJmsJavaFamiliesResult> {
    return pulumi.output(args).apply((a: any) => getJmsJavaFamilies(a, opts))
}

/**
 * A collection of arguments for invoking getJmsJavaFamilies.
 */
export interface GetJmsJavaFamiliesOutputArgs {
    displayName?: pulumi.Input<string>;
    familyVersion?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetJmsJavaFamiliesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    isSupportedVersion?: pulumi.Input<boolean>;
}
