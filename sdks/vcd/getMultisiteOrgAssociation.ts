// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMultisiteOrgAssociation(args: GetMultisiteOrgAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetMultisiteOrgAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcd:index/getMultisiteOrgAssociation:getMultisiteOrgAssociation", {
        "associatedOrgId": args.associatedOrgId,
        "associationDataFile": args.associationDataFile,
        "id": args.id,
        "orgId": args.orgId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMultisiteOrgAssociation.
 */
export interface GetMultisiteOrgAssociationArgs {
    associatedOrgId?: string;
    associationDataFile?: string;
    id?: string;
    orgId: string;
}

/**
 * A collection of values returned by getMultisiteOrgAssociation.
 */
export interface GetMultisiteOrgAssociationResult {
    readonly associatedOrgId?: string;
    readonly associatedOrgName: string;
    readonly associatedSiteId: string;
    readonly associationDataFile?: string;
    readonly id: string;
    readonly orgId: string;
    readonly status: string;
}
export function getMultisiteOrgAssociationOutput(args: GetMultisiteOrgAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMultisiteOrgAssociationResult> {
    return pulumi.output(args).apply((a: any) => getMultisiteOrgAssociation(a, opts))
}

/**
 * A collection of arguments for invoking getMultisiteOrgAssociation.
 */
export interface GetMultisiteOrgAssociationOutputArgs {
    associatedOrgId?: pulumi.Input<string>;
    associationDataFile?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    orgId: pulumi.Input<string>;
}
