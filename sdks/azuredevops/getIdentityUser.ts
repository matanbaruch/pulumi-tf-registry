// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityUser(args: GetIdentityUserArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azuredevops:index/getIdentityUser:getIdentityUser", {
        "id": args.id,
        "name": args.name,
        "searchFilter": args.searchFilter,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityUser.
 */
export interface GetIdentityUserArgs {
    id?: string;
    name: string;
    searchFilter?: string;
    timeouts?: inputs.GetIdentityUserTimeouts;
}

/**
 * A collection of values returned by getIdentityUser.
 */
export interface GetIdentityUserResult {
    readonly descriptor: string;
    readonly id: string;
    readonly name: string;
    readonly searchFilter?: string;
    readonly timeouts?: outputs.GetIdentityUserTimeouts;
}
export function getIdentityUserOutput(args: GetIdentityUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityUserResult> {
    return pulumi.output(args).apply((a: any) => getIdentityUser(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityUser.
 */
export interface GetIdentityUserOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    searchFilter?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetIdentityUserTimeoutsArgs>;
}
