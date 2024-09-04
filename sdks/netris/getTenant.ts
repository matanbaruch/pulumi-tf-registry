// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTenant(args: GetTenantArgs, opts?: pulumi.InvokeOptions): Promise<GetTenantResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netris:index/getTenant:getTenant", {
        "description": args.description,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTenant.
 */
export interface GetTenantArgs {
    description?: string;
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getTenant.
 */
export interface GetTenantResult {
    readonly description?: string;
    readonly id: string;
    readonly name: string;
}
export function getTenantOutput(args: GetTenantOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTenantResult> {
    return pulumi.output(args).apply((a: any) => getTenant(a, opts))
}

/**
 * A collection of arguments for invoking getTenant.
 */
export interface GetTenantOutputArgs {
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
