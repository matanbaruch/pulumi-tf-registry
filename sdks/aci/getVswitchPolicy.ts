// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVswitchPolicy(args: GetVswitchPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetVswitchPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getVswitchPolicy:getVswitchPolicy", {
        "annotation": args.annotation,
        "description": args.description,
        "id": args.id,
        "nameAlias": args.nameAlias,
        "vmmDomainDn": args.vmmDomainDn,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVswitchPolicy.
 */
export interface GetVswitchPolicyArgs {
    annotation?: string;
    description?: string;
    id?: string;
    nameAlias?: string;
    vmmDomainDn: string;
}

/**
 * A collection of values returned by getVswitchPolicy.
 */
export interface GetVswitchPolicyResult {
    readonly annotation: string;
    readonly description: string;
    readonly id: string;
    readonly nameAlias: string;
    readonly vmmDomainDn: string;
}
export function getVswitchPolicyOutput(args: GetVswitchPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVswitchPolicyResult> {
    return pulumi.output(args).apply((a: any) => getVswitchPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getVswitchPolicy.
 */
export interface GetVswitchPolicyOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    vmmDomainDn: pulumi.Input<string>;
}
