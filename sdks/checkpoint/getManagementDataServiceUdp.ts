// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementDataServiceUdp(args?: GetManagementDataServiceUdpArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementDataServiceUdpResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementDataServiceUdp:getManagementDataServiceUdp", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementDataServiceUdp.
 */
export interface GetManagementDataServiceUdpArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementDataServiceUdp.
 */
export interface GetManagementDataServiceUdpResult {
    readonly acceptReplies: boolean;
    readonly aggressiveAging: {[key: string]: string};
    readonly color: string;
    readonly comments: string;
    readonly groups: string[];
    readonly id: string;
    readonly keepConnectionsOpenAfterPolicyInstallation: boolean;
    readonly matchByProtocolSignature: boolean;
    readonly matchForAny: boolean;
    readonly name?: string;
    readonly overrideDefaultSettings: boolean;
    readonly port: string;
    readonly protocol: string;
    readonly sessionTimeout: number;
    readonly sourcePort: string;
    readonly syncConnectionsOnCluster: boolean;
    readonly tags: string[];
    readonly uid?: string;
    readonly useDefaultSessionTimeout: boolean;
}
export function getManagementDataServiceUdpOutput(args?: GetManagementDataServiceUdpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementDataServiceUdpResult> {
    return pulumi.output(args).apply((a: any) => getManagementDataServiceUdp(a, opts))
}

/**
 * A collection of arguments for invoking getManagementDataServiceUdp.
 */
export interface GetManagementDataServiceUdpOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
