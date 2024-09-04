// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAuthorizationProduct(args: GetAuthorizationProductArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationProductResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getAuthorizationProduct:getAuthorizationProduct", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAuthorizationProduct.
 */
export interface GetAuthorizationProductArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getAuthorizationProduct.
 */
export interface GetAuthorizationProductResult {
    readonly id: string;
    readonly name: string;
}
export function getAuthorizationProductOutput(args: GetAuthorizationProductOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuthorizationProductResult> {
    return pulumi.output(args).apply((a: any) => getAuthorizationProduct(a, opts))
}

/**
 * A collection of arguments for invoking getAuthorizationProduct.
 */
export interface GetAuthorizationProductOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
