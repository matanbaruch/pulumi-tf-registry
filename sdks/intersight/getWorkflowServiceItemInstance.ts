// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWorkflowServiceItemInstance(args?: GetWorkflowServiceItemInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowServiceItemInstanceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getWorkflowServiceItemInstance:getWorkflowServiceItemInstance", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "catalogServiceRequests": args.catalogServiceRequests,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "idp": args.idp,
        "idpReference": args.idpReference,
        "label": args.label,
        "lastStatus": args.lastStatus,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "resourcelifecycleStatus": args.resourcelifecycleStatus,
        "serviceItemDefinition": args.serviceItemDefinition,
        "sharedScope": args.sharedScope,
        "status": args.status,
        "tags": args.tags,
        "user": args.user,
        "userIdOrEmail": args.userIdOrEmail,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWorkflowServiceItemInstance.
 */
export interface GetWorkflowServiceItemInstanceArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetWorkflowServiceItemInstanceAncestor[];
    catalogServiceRequests?: inputs.GetWorkflowServiceItemInstanceCatalogServiceRequest[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    idp?: inputs.GetWorkflowServiceItemInstanceIdp;
    idpReference?: inputs.GetWorkflowServiceItemInstanceIdpReference;
    label?: string;
    lastStatus?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetWorkflowServiceItemInstanceOrganization;
    owners?: string[];
    parent?: inputs.GetWorkflowServiceItemInstanceParent;
    permissionResources?: inputs.GetWorkflowServiceItemInstancePermissionResource[];
    resourcelifecycleStatus?: string;
    serviceItemDefinition?: inputs.GetWorkflowServiceItemInstanceServiceItemDefinition;
    sharedScope?: string;
    status?: string;
    tags?: inputs.GetWorkflowServiceItemInstanceTag[];
    user?: inputs.GetWorkflowServiceItemInstanceUser;
    userIdOrEmail?: string;
    versionContext?: inputs.GetWorkflowServiceItemInstanceVersionContext;
}

/**
 * A collection of values returned by getWorkflowServiceItemInstance.
 */
export interface GetWorkflowServiceItemInstanceResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetWorkflowServiceItemInstanceAncestor[];
    readonly catalogServiceRequests?: outputs.GetWorkflowServiceItemInstanceCatalogServiceRequest[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly idp?: outputs.GetWorkflowServiceItemInstanceIdp;
    readonly idpReference?: outputs.GetWorkflowServiceItemInstanceIdpReference;
    readonly label?: string;
    readonly lastStatus?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetWorkflowServiceItemInstanceOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetWorkflowServiceItemInstanceParent;
    readonly permissionResources?: outputs.GetWorkflowServiceItemInstancePermissionResource[];
    readonly resourcelifecycleStatus?: string;
    readonly results: outputs.GetWorkflowServiceItemInstanceResult[];
    readonly serviceItemDefinition?: outputs.GetWorkflowServiceItemInstanceServiceItemDefinition;
    readonly sharedScope?: string;
    readonly status?: string;
    readonly tags?: outputs.GetWorkflowServiceItemInstanceTag[];
    readonly user?: outputs.GetWorkflowServiceItemInstanceUser;
    readonly userIdOrEmail?: string;
    readonly versionContext?: outputs.GetWorkflowServiceItemInstanceVersionContext;
}
export function getWorkflowServiceItemInstanceOutput(args?: GetWorkflowServiceItemInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkflowServiceItemInstanceResult> {
    return pulumi.output(args).apply((a: any) => getWorkflowServiceItemInstance(a, opts))
}

/**
 * A collection of arguments for invoking getWorkflowServiceItemInstance.
 */
export interface GetWorkflowServiceItemInstanceOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetWorkflowServiceItemInstanceAncestorArgs>[]>;
    catalogServiceRequests?: pulumi.Input<pulumi.Input<inputs.GetWorkflowServiceItemInstanceCatalogServiceRequestArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    idp?: pulumi.Input<inputs.GetWorkflowServiceItemInstanceIdpArgs>;
    idpReference?: pulumi.Input<inputs.GetWorkflowServiceItemInstanceIdpReferenceArgs>;
    label?: pulumi.Input<string>;
    lastStatus?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetWorkflowServiceItemInstanceOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetWorkflowServiceItemInstanceParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetWorkflowServiceItemInstancePermissionResourceArgs>[]>;
    resourcelifecycleStatus?: pulumi.Input<string>;
    serviceItemDefinition?: pulumi.Input<inputs.GetWorkflowServiceItemInstanceServiceItemDefinitionArgs>;
    sharedScope?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetWorkflowServiceItemInstanceTagArgs>[]>;
    user?: pulumi.Input<inputs.GetWorkflowServiceItemInstanceUserArgs>;
    userIdOrEmail?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetWorkflowServiceItemInstanceVersionContextArgs>;
}
