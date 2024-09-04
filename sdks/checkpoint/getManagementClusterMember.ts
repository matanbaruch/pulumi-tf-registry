// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagementClusterMember(args: GetManagementClusterMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementClusterMemberResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementClusterMember:getManagementClusterMember", {
        "id": args.id,
        "limitInterfaces": args.limitInterfaces,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementClusterMember.
 */
export interface GetManagementClusterMemberArgs {
    id?: string;
    limitInterfaces?: string;
    uid: string;
}

/**
 * A collection of values returned by getManagementClusterMember.
 */
export interface GetManagementClusterMemberResult {
    readonly clusterUid: string;
    readonly id: string;
    readonly interfaces: outputs.GetManagementClusterMemberInterface[];
    readonly ipAddress: string;
    readonly ipv6Address: string;
    readonly limitInterfaces?: string;
    readonly name: string;
    readonly natSettings: {[key: string]: string};
    readonly priority: number;
    readonly sicMessage: string;
    readonly sicState: string;
    readonly type: string;
    readonly uid: string;
}
export function getManagementClusterMemberOutput(args: GetManagementClusterMemberOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementClusterMemberResult> {
    return pulumi.output(args).apply((a: any) => getManagementClusterMember(a, opts))
}

/**
 * A collection of arguments for invoking getManagementClusterMember.
 */
export interface GetManagementClusterMemberOutputArgs {
    id?: pulumi.Input<string>;
    limitInterfaces?: pulumi.Input<string>;
    uid: pulumi.Input<string>;
}
