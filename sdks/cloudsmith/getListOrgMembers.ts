// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getListOrgMembers(args: GetListOrgMembersArgs, opts?: pulumi.InvokeOptions): Promise<GetListOrgMembersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cloudsmith:index/getListOrgMembers:getListOrgMembers", {
        "id": args.id,
        "isActive": args.isActive,
        "namespace": args.namespace,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getListOrgMembers.
 */
export interface GetListOrgMembersArgs {
    id?: string;
    isActive?: boolean;
    namespace: string;
}

/**
 * A collection of values returned by getListOrgMembers.
 */
export interface GetListOrgMembersResult {
    readonly id: string;
    readonly isActive?: boolean;
    readonly members: outputs.GetListOrgMembersMember[];
    readonly namespace: string;
}
export function getListOrgMembersOutput(args: GetListOrgMembersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetListOrgMembersResult> {
    return pulumi.output(args).apply((a: any) => getListOrgMembers(a, opts))
}

/**
 * A collection of arguments for invoking getListOrgMembers.
 */
export interface GetListOrgMembersOutputArgs {
    id?: pulumi.Input<string>;
    isActive?: pulumi.Input<boolean>;
    namespace: pulumi.Input<string>;
}
