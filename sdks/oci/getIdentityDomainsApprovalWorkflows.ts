// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsApprovalWorkflows(args: GetIdentityDomainsApprovalWorkflowsArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsApprovalWorkflowsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsApprovalWorkflows:getIdentityDomainsApprovalWorkflows", {
        "approvalWorkflowCount": args.approvalWorkflowCount,
        "approvalWorkflowFilter": args.approvalWorkflowFilter,
        "attributeSets": args.attributeSets,
        "attributes": args.attributes,
        "authorization": args.authorization,
        "compartmentId": args.compartmentId,
        "id": args.id,
        "idcsEndpoint": args.idcsEndpoint,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
        "startIndex": args.startIndex,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsApprovalWorkflows.
 */
export interface GetIdentityDomainsApprovalWorkflowsArgs {
    approvalWorkflowCount?: number;
    approvalWorkflowFilter?: string;
    attributeSets?: string[];
    attributes?: string;
    authorization?: string;
    compartmentId?: string;
    id?: string;
    idcsEndpoint: string;
    resourceTypeSchemaVersion?: string;
    startIndex?: number;
}

/**
 * A collection of values returned by getIdentityDomainsApprovalWorkflows.
 */
export interface GetIdentityDomainsApprovalWorkflowsResult {
    readonly approvalWorkflowCount?: number;
    readonly approvalWorkflowFilter?: string;
    readonly approvalWorkflows: outputs.GetIdentityDomainsApprovalWorkflowsApprovalWorkflow[];
    readonly attributeSets?: string[];
    readonly attributes?: string;
    readonly authorization?: string;
    readonly compartmentId?: string;
    readonly id: string;
    readonly idcsEndpoint: string;
    readonly itemsPerPage: number;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly startIndex?: number;
    readonly totalResults: number;
}
export function getIdentityDomainsApprovalWorkflowsOutput(args: GetIdentityDomainsApprovalWorkflowsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsApprovalWorkflowsResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsApprovalWorkflows(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsApprovalWorkflows.
 */
export interface GetIdentityDomainsApprovalWorkflowsOutputArgs {
    approvalWorkflowCount?: pulumi.Input<number>;
    approvalWorkflowFilter?: pulumi.Input<string>;
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    startIndex?: pulumi.Input<number>;
}
