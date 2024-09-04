// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVpcDomainPolicy(args: GetVpcDomainPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcDomainPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getVpcDomainPolicy:getVpcDomainPolicy", {
        "annotation": args.annotation,
        "deadIntvl": args.deadIntvl,
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcDomainPolicy.
 */
export interface GetVpcDomainPolicyArgs {
    annotation?: string;
    deadIntvl?: string;
    description?: string;
    id?: string;
    name: string;
    nameAlias?: string;
}

/**
 * A collection of values returned by getVpcDomainPolicy.
 */
export interface GetVpcDomainPolicyResult {
    readonly annotation: string;
    readonly deadIntvl: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
}
export function getVpcDomainPolicyOutput(args: GetVpcDomainPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcDomainPolicyResult> {
    return pulumi.output(args).apply((a: any) => getVpcDomainPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getVpcDomainPolicy.
 */
export interface GetVpcDomainPolicyOutputArgs {
    annotation?: pulumi.Input<string>;
    deadIntvl?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
