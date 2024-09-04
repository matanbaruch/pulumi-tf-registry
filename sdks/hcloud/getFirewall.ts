// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFirewall(args?: GetFirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hcloud:index/getFirewall:getFirewall", {
        "applyTos": args.applyTos,
        "id": args.id,
        "labels": args.labels,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "rules": args.rules,
        "withSelector": args.withSelector,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewall.
 */
export interface GetFirewallArgs {
    applyTos?: inputs.GetFirewallApplyTo[];
    id?: number;
    labels?: {[key: string]: string};
    mostRecent?: boolean;
    name?: string;
    rules?: inputs.GetFirewallRule[];
    withSelector?: string;
}

/**
 * A collection of values returned by getFirewall.
 */
export interface GetFirewallResult {
    readonly applyTos?: outputs.GetFirewallApplyTo[];
    readonly id?: number;
    readonly labels?: {[key: string]: string};
    readonly mostRecent?: boolean;
    readonly name: string;
    readonly rules?: outputs.GetFirewallRule[];
    readonly withSelector?: string;
}
export function getFirewallOutput(args?: GetFirewallOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallResult> {
    return pulumi.output(args).apply((a: any) => getFirewall(a, opts))
}

/**
 * A collection of arguments for invoking getFirewall.
 */
export interface GetFirewallOutputArgs {
    applyTos?: pulumi.Input<pulumi.Input<inputs.GetFirewallApplyToArgs>[]>;
    id?: pulumi.Input<number>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    mostRecent?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.GetFirewallRuleArgs>[]>;
    withSelector?: pulumi.Input<string>;
}
