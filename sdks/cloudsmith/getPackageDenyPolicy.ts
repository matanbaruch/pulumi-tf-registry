// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPackageDenyPolicy(args: GetPackageDenyPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPackageDenyPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cloudsmith:index/getPackageDenyPolicy:getPackageDenyPolicy", {
        "description": args.description,
        "enabled": args.enabled,
        "id": args.id,
        "name": args.name,
        "namespace": args.namespace,
        "packageQuery": args.packageQuery,
        "slugPerm": args.slugPerm,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPackageDenyPolicy.
 */
export interface GetPackageDenyPolicyArgs {
    description?: string;
    enabled?: boolean;
    id?: string;
    name?: string;
    namespace: string;
    packageQuery?: string;
    slugPerm: string;
}

/**
 * A collection of values returned by getPackageDenyPolicy.
 */
export interface GetPackageDenyPolicyResult {
    readonly description?: string;
    readonly enabled?: boolean;
    readonly id: string;
    readonly name?: string;
    readonly namespace: string;
    readonly packageQuery?: string;
    readonly slugPerm: string;
}
export function getPackageDenyPolicyOutput(args: GetPackageDenyPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPackageDenyPolicyResult> {
    return pulumi.output(args).apply((a: any) => getPackageDenyPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getPackageDenyPolicy.
 */
export interface GetPackageDenyPolicyOutputArgs {
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
    packageQuery?: pulumi.Input<string>;
    slugPerm: pulumi.Input<string>;
}
