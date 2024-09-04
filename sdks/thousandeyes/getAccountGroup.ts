// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAccountGroup(args: GetAccountGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thousandeyes:index/getAccountGroup:getAccountGroup", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAccountGroup.
 */
export interface GetAccountGroupArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getAccountGroup.
 */
export interface GetAccountGroupResult {
    readonly aid: number;
    readonly id: string;
    readonly name: string;
}
export function getAccountGroupOutput(args: GetAccountGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountGroupResult> {
    return pulumi.output(args).apply((a: any) => getAccountGroup(a, opts))
}

/**
 * A collection of arguments for invoking getAccountGroup.
 */
export interface GetAccountGroupOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
