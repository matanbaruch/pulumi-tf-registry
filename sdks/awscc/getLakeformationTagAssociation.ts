// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLakeformationTagAssociation(args: GetLakeformationTagAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetLakeformationTagAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLakeformationTagAssociation:getLakeformationTagAssociation", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLakeformationTagAssociation.
 */
export interface GetLakeformationTagAssociationArgs {
    id: string;
}

/**
 * A collection of values returned by getLakeformationTagAssociation.
 */
export interface GetLakeformationTagAssociationResult {
    readonly id: string;
    readonly lfTags: outputs.GetLakeformationTagAssociationLfTag[];
    readonly resource: outputs.GetLakeformationTagAssociationResource;
    readonly resourceIdentifier: string;
    readonly tagsIdentifier: string;
}
export function getLakeformationTagAssociationOutput(args: GetLakeformationTagAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLakeformationTagAssociationResult> {
    return pulumi.output(args).apply((a: any) => getLakeformationTagAssociation(a, opts))
}

/**
 * A collection of arguments for invoking getLakeformationTagAssociation.
 */
export interface GetLakeformationTagAssociationOutputArgs {
    id: pulumi.Input<string>;
}
