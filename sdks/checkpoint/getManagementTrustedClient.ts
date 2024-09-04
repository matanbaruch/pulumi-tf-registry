// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementTrustedClient(args?: GetManagementTrustedClientArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementTrustedClientResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementTrustedClient:getManagementTrustedClient", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementTrustedClient.
 */
export interface GetManagementTrustedClientArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementTrustedClient.
 */
export interface GetManagementTrustedClientResult {
    readonly color: string;
    readonly comments: string;
    readonly domainsAssignments: string[];
    readonly id: string;
    readonly ipv4Address: string;
    readonly ipv4AddressFirst: string;
    readonly ipv4AddressLast: string;
    readonly ipv6Address: string;
    readonly ipv6AddressFirst: string;
    readonly ipv6AddressLast: string;
    readonly maskLength4: number;
    readonly maskLength6: number;
    readonly multiDomainServerTrustedClient: boolean;
    readonly name?: string;
    readonly tags: string[];
    readonly type: string;
    readonly uid?: string;
    readonly wildCard: string;
}
export function getManagementTrustedClientOutput(args?: GetManagementTrustedClientOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementTrustedClientResult> {
    return pulumi.output(args).apply((a: any) => getManagementTrustedClient(a, opts))
}

/**
 * A collection of arguments for invoking getManagementTrustedClient.
 */
export interface GetManagementTrustedClientOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
