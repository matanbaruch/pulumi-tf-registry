// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPaymentcryptographyAlias(args: GetPaymentcryptographyAliasArgs, opts?: pulumi.InvokeOptions): Promise<GetPaymentcryptographyAliasResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getPaymentcryptographyAlias:getPaymentcryptographyAlias", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPaymentcryptographyAlias.
 */
export interface GetPaymentcryptographyAliasArgs {
    id: string;
}

/**
 * A collection of values returned by getPaymentcryptographyAlias.
 */
export interface GetPaymentcryptographyAliasResult {
    readonly aliasName: string;
    readonly id: string;
    readonly keyArn: string;
}
export function getPaymentcryptographyAliasOutput(args: GetPaymentcryptographyAliasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPaymentcryptographyAliasResult> {
    return pulumi.output(args).apply((a: any) => getPaymentcryptographyAlias(a, opts))
}

/**
 * A collection of arguments for invoking getPaymentcryptographyAlias.
 */
export interface GetPaymentcryptographyAliasOutputArgs {
    id: pulumi.Input<string>;
}
