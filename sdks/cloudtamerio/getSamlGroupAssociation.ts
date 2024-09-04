// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSamlGroupAssociation(args?: GetSamlGroupAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetSamlGroupAssociationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cloudtamerio:index/getSamlGroupAssociation:getSamlGroupAssociation", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSamlGroupAssociation.
 */
export interface GetSamlGroupAssociationArgs {
    filters?: inputs.GetSamlGroupAssociationFilter[];
    id?: string;
}

/**
 * A collection of values returned by getSamlGroupAssociation.
 */
export interface GetSamlGroupAssociationResult {
    readonly filters?: outputs.GetSamlGroupAssociationFilter[];
    readonly id: string;
    readonly lists: outputs.GetSamlGroupAssociationList[];
}
export function getSamlGroupAssociationOutput(args?: GetSamlGroupAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSamlGroupAssociationResult> {
    return pulumi.output(args).apply((a: any) => getSamlGroupAssociation(a, opts))
}

/**
 * A collection of arguments for invoking getSamlGroupAssociation.
 */
export interface GetSamlGroupAssociationOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetSamlGroupAssociationFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
