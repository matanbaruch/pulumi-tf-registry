// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFirewallAddrgrp(args: GetFirewallAddrgrpArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallAddrgrpResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getFirewallAddrgrp:getFirewallAddrgrp", {
        "id": args.id,
        "name": args.name,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallAddrgrp.
 */
export interface GetFirewallAddrgrpArgs {
    id?: string;
    name: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getFirewallAddrgrp.
 */
export interface GetFirewallAddrgrpResult {
    readonly allowRouting: string;
    readonly category: string;
    readonly color: number;
    readonly comment: string;
    readonly exclude: string;
    readonly excludeMembers: outputs.GetFirewallAddrgrpExcludeMember[];
    readonly fabricObject: string;
    readonly id: string;
    readonly members: outputs.GetFirewallAddrgrpMember[];
    readonly name: string;
    readonly taggings: outputs.GetFirewallAddrgrpTagging[];
    readonly type: string;
    readonly uuid: string;
    readonly vdomparam?: string;
    readonly visibility: string;
}
export function getFirewallAddrgrpOutput(args: GetFirewallAddrgrpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallAddrgrpResult> {
    return pulumi.output(args).apply((a: any) => getFirewallAddrgrp(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallAddrgrp.
 */
export interface GetFirewallAddrgrpOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
