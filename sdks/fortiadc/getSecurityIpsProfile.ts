// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecurityIpsProfile(args: GetSecurityIpsProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityIpsProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSecurityIpsProfile:getSecurityIpsProfile", {
        "id": args.id,
        "ipsProfileName": args.ipsProfileName,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityIpsProfile.
 */
export interface GetSecurityIpsProfileArgs {
    id?: string;
    ipsProfileName: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSecurityIpsProfile.
 */
export interface GetSecurityIpsProfileResult {
    readonly comments: string;
    readonly id: string;
    readonly ipsProfileName: string;
    readonly vdom?: string;
}
export function getSecurityIpsProfileOutput(args: GetSecurityIpsProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityIpsProfileResult> {
    return pulumi.output(args).apply((a: any) => getSecurityIpsProfile(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityIpsProfile.
 */
export interface GetSecurityIpsProfileOutputArgs {
    id?: pulumi.Input<string>;
    ipsProfileName: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
