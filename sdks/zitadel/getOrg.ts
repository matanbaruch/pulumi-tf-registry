// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOrg(args: GetOrgArgs, opts?: pulumi.InvokeOptions): Promise<GetOrgResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zitadel:index/getOrg:getOrg", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrg.
 */
export interface GetOrgArgs {
    id: string;
}

/**
 * A collection of values returned by getOrg.
 */
export interface GetOrgResult {
    readonly id: string;
    readonly isDefault: boolean;
    readonly name: string;
    readonly primaryDomain: string;
    readonly state: string;
}
export function getOrgOutput(args: GetOrgOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrgResult> {
    return pulumi.output(args).apply((a: any) => getOrg(a, opts))
}

/**
 * A collection of arguments for invoking getOrg.
 */
export interface GetOrgOutputArgs {
    id: pulumi.Input<string>;
}
