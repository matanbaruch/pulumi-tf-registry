// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementDataApplicationSiteGroup(args?: GetManagementDataApplicationSiteGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementDataApplicationSiteGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementDataApplicationSiteGroup:getManagementDataApplicationSiteGroup", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementDataApplicationSiteGroup.
 */
export interface GetManagementDataApplicationSiteGroupArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementDataApplicationSiteGroup.
 */
export interface GetManagementDataApplicationSiteGroupResult {
    readonly color: string;
    readonly comments: string;
    readonly groups: string[];
    readonly id: string;
    readonly members: string[];
    readonly name?: string;
    readonly tags: string[];
    readonly uid?: string;
}
export function getManagementDataApplicationSiteGroupOutput(args?: GetManagementDataApplicationSiteGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementDataApplicationSiteGroupResult> {
    return pulumi.output(args).apply((a: any) => getManagementDataApplicationSiteGroup(a, opts))
}

/**
 * A collection of arguments for invoking getManagementDataApplicationSiteGroup.
 */
export interface GetManagementDataApplicationSiteGroupOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
