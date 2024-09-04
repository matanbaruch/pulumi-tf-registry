// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getInterServerAuthenticationInfo(args: GetInterServerAuthenticationInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetInterServerAuthenticationInfoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getInterServerAuthenticationInfo:getInterServerAuthenticationInfo", {
        "name": args.name,
        "serverInstanceListenerName": args.serverInstanceListenerName,
        "serverInstanceName": args.serverInstanceName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInterServerAuthenticationInfo.
 */
export interface GetInterServerAuthenticationInfoArgs {
    name: string;
    serverInstanceListenerName: string;
    serverInstanceName: string;
}

/**
 * A collection of values returned by getInterServerAuthenticationInfo.
 */
export interface GetInterServerAuthenticationInfoResult {
    readonly authenticationType: string;
    readonly bindDn: string;
    readonly id: string;
    readonly name: string;
    readonly password: string;
    readonly purposes: string[];
    readonly serverInstanceListenerName: string;
    readonly serverInstanceName: string;
    readonly type: string;
    readonly username: string;
}
export function getInterServerAuthenticationInfoOutput(args: GetInterServerAuthenticationInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInterServerAuthenticationInfoResult> {
    return pulumi.output(args).apply((a: any) => getInterServerAuthenticationInfo(a, opts))
}

/**
 * A collection of arguments for invoking getInterServerAuthenticationInfo.
 */
export interface GetInterServerAuthenticationInfoOutputArgs {
    name: pulumi.Input<string>;
    serverInstanceListenerName: pulumi.Input<string>;
    serverInstanceName: pulumi.Input<string>;
}
