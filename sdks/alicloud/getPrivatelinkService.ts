// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPrivatelinkService(args?: GetPrivatelinkServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivatelinkServiceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getPrivatelinkService:getPrivatelinkService", {
        "enable": args.enable,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrivatelinkService.
 */
export interface GetPrivatelinkServiceArgs {
    enable?: string;
    id?: string;
}

/**
 * A collection of values returned by getPrivatelinkService.
 */
export interface GetPrivatelinkServiceResult {
    readonly enable?: string;
    readonly id: string;
    readonly status: string;
}
export function getPrivatelinkServiceOutput(args?: GetPrivatelinkServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivatelinkServiceResult> {
    return pulumi.output(args).apply((a: any) => getPrivatelinkService(a, opts))
}

/**
 * A collection of arguments for invoking getPrivatelinkService.
 */
export interface GetPrivatelinkServiceOutputArgs {
    enable?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
