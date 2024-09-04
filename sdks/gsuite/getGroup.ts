// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGroup(args: GetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gsuite:index/getGroup:getGroup", {
        "email": args.email,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGroup.
 */
export interface GetGroupArgs {
    email: string;
    id?: string;
}

/**
 * A collection of values returned by getGroup.
 */
export interface GetGroupResult {
    readonly adminCreated: boolean;
    readonly aliases: string[];
    readonly description: string;
    readonly directMembersCount: number;
    readonly email: string;
    readonly id: string;
    readonly members: outputs.GetGroupMember[];
    readonly name: string;
    readonly nonEditableAliases: string[];
}
export function getGroupOutput(args: GetGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGroupResult> {
    return pulumi.output(args).apply((a: any) => getGroup(a, opts))
}

/**
 * A collection of arguments for invoking getGroup.
 */
export interface GetGroupOutputArgs {
    email: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
