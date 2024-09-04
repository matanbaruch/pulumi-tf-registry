// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApicApplication(args?: GetApicApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApicApplicationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getApicApplication:getApicApplication", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "tenant": args.tenant,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApicApplication.
 */
export interface GetApicApplicationArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetApicApplicationAncestor[];
    classId?: string;
    createTime?: string;
    dn?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetApicApplicationParent;
    permissionResources?: inputs.GetApicApplicationPermissionResource[];
    registeredDevice?: inputs.GetApicApplicationRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetApicApplicationTag[];
    tenant?: inputs.GetApicApplicationTenant;
    versionContext?: inputs.GetApicApplicationVersionContext;
}

/**
 * A collection of values returned by getApicApplication.
 */
export interface GetApicApplicationResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetApicApplicationAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetApicApplicationParent;
    readonly permissionResources?: outputs.GetApicApplicationPermissionResource[];
    readonly registeredDevice?: outputs.GetApicApplicationRegisteredDevice;
    readonly results: outputs.GetApicApplicationResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetApicApplicationTag[];
    readonly tenant?: outputs.GetApicApplicationTenant;
    readonly versionContext?: outputs.GetApicApplicationVersionContext;
}
export function getApicApplicationOutput(args?: GetApicApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApicApplicationResult> {
    return pulumi.output(args).apply((a: any) => getApicApplication(a, opts))
}

/**
 * A collection of arguments for invoking getApicApplication.
 */
export interface GetApicApplicationOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetApicApplicationAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetApicApplicationParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetApicApplicationPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetApicApplicationRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetApicApplicationTagArgs>[]>;
    tenant?: pulumi.Input<inputs.GetApicApplicationTenantArgs>;
    versionContext?: pulumi.Input<inputs.GetApicApplicationVersionContextArgs>;
}
