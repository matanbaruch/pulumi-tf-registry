// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWafregionalWebAcl(args: GetWafregionalWebAclArgs, opts?: pulumi.InvokeOptions): Promise<GetWafregionalWebAclResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getWafregionalWebAcl:getWafregionalWebAcl", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafregionalWebAcl.
 */
export interface GetWafregionalWebAclArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getWafregionalWebAcl.
 */
export interface GetWafregionalWebAclResult {
    readonly id: string;
    readonly name: string;
}
export function getWafregionalWebAclOutput(args: GetWafregionalWebAclOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafregionalWebAclResult> {
    return pulumi.output(args).apply((a: any) => getWafregionalWebAcl(a, opts))
}

/**
 * A collection of arguments for invoking getWafregionalWebAcl.
 */
export interface GetWafregionalWebAclOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
