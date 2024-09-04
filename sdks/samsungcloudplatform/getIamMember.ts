// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamMember(args: GetIamMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetIamMemberResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getIamMember:getIamMember", {
        "id": args.id,
        "userId": args.userId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamMember.
 */
export interface GetIamMemberArgs {
    id?: string;
    userId: string;
}

/**
 * A collection of values returned by getIamMember.
 */
export interface GetIamMemberResult {
    readonly companyName: string;
    readonly createdBy: string;
    readonly createdByEmail: string;
    readonly createdByName: string;
    readonly createdDt: string;
    readonly email: string;
    readonly id: string;
    readonly lastAccessDt: string;
    readonly modifiedBy: string;
    readonly modifiedByEmail: string;
    readonly modifiedByName: string;
    readonly modifiedDt: string;
    readonly organizationId: string;
    readonly positionName: string;
    readonly registeredBy: string;
    readonly registeredDt: string;
    readonly tags: outputs.GetIamMemberTag[];
    readonly userGroupCount: number;
    readonly userId: string;
    readonly userName: string;
    readonly userPasswordReuseLimitCount: string;
    readonly userSrn: string;
}
export function getIamMemberOutput(args: GetIamMemberOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamMemberResult> {
    return pulumi.output(args).apply((a: any) => getIamMember(a, opts))
}

/**
 * A collection of arguments for invoking getIamMember.
 */
export interface GetIamMemberOutputArgs {
    id?: pulumi.Input<string>;
    userId: pulumi.Input<string>;
}
