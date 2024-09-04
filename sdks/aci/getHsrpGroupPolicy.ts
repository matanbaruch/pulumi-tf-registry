// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getHsrpGroupPolicy(args: GetHsrpGroupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetHsrpGroupPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getHsrpGroupPolicy:getHsrpGroupPolicy", {
        "annotation": args.annotation,
        "ctrl": args.ctrl,
        "description": args.description,
        "helloIntvl": args.helloIntvl,
        "holdIntvl": args.holdIntvl,
        "hsrpGroupPolicyType": args.hsrpGroupPolicyType,
        "id": args.id,
        "key": args.key,
        "name": args.name,
        "nameAlias": args.nameAlias,
        "preemptDelayMin": args.preemptDelayMin,
        "preemptDelayReload": args.preemptDelayReload,
        "preemptDelaySync": args.preemptDelaySync,
        "prio": args.prio,
        "tenantDn": args.tenantDn,
        "timeout": args.timeout,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHsrpGroupPolicy.
 */
export interface GetHsrpGroupPolicyArgs {
    annotation?: string;
    ctrl?: string;
    description?: string;
    helloIntvl?: string;
    holdIntvl?: string;
    hsrpGroupPolicyType?: string;
    id?: string;
    key?: string;
    name: string;
    nameAlias?: string;
    preemptDelayMin?: string;
    preemptDelayReload?: string;
    preemptDelaySync?: string;
    prio?: string;
    tenantDn: string;
    timeout?: string;
}

/**
 * A collection of values returned by getHsrpGroupPolicy.
 */
export interface GetHsrpGroupPolicyResult {
    readonly annotation: string;
    readonly ctrl: string;
    readonly description: string;
    readonly helloIntvl: string;
    readonly holdIntvl: string;
    readonly hsrpGroupPolicyType: string;
    readonly id: string;
    readonly key: string;
    readonly name: string;
    readonly nameAlias: string;
    readonly preemptDelayMin: string;
    readonly preemptDelayReload: string;
    readonly preemptDelaySync: string;
    readonly prio: string;
    readonly tenantDn: string;
    readonly timeout: string;
}
export function getHsrpGroupPolicyOutput(args: GetHsrpGroupPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHsrpGroupPolicyResult> {
    return pulumi.output(args).apply((a: any) => getHsrpGroupPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getHsrpGroupPolicy.
 */
export interface GetHsrpGroupPolicyOutputArgs {
    annotation?: pulumi.Input<string>;
    ctrl?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    helloIntvl?: pulumi.Input<string>;
    holdIntvl?: pulumi.Input<string>;
    hsrpGroupPolicyType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    key?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    preemptDelayMin?: pulumi.Input<string>;
    preemptDelayReload?: pulumi.Input<string>;
    preemptDelaySync?: pulumi.Input<string>;
    prio?: pulumi.Input<string>;
    tenantDn: pulumi.Input<string>;
    timeout?: pulumi.Input<string>;
}
