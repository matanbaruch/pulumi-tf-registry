// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCustomerKey(args: GetCustomerKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomerKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("astra:index/getCustomerKey:getCustomerKey", {
        "cloudProvider": args.cloudProvider,
        "id": args.id,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCustomerKey.
 */
export interface GetCustomerKeyArgs {
    cloudProvider: string;
    id?: string;
    region: string;
}

/**
 * A collection of values returned by getCustomerKey.
 */
export interface GetCustomerKeyResult {
    readonly cloudProvider: string;
    readonly id: string;
    readonly keyId: string;
    readonly organizationId: string;
    readonly region: string;
}
export function getCustomerKeyOutput(args: GetCustomerKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomerKeyResult> {
    return pulumi.output(args).apply((a: any) => getCustomerKey(a, opts))
}

/**
 * A collection of arguments for invoking getCustomerKey.
 */
export interface GetCustomerKeyOutputArgs {
    cloudProvider: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region: pulumi.Input<string>;
}
