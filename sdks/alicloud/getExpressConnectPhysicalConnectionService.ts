// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getExpressConnectPhysicalConnectionService(args?: GetExpressConnectPhysicalConnectionServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressConnectPhysicalConnectionServiceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getExpressConnectPhysicalConnectionService:getExpressConnectPhysicalConnectionService", {
        "enable": args.enable,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getExpressConnectPhysicalConnectionService.
 */
export interface GetExpressConnectPhysicalConnectionServiceArgs {
    enable?: string;
    id?: string;
}

/**
 * A collection of values returned by getExpressConnectPhysicalConnectionService.
 */
export interface GetExpressConnectPhysicalConnectionServiceResult {
    readonly enable?: string;
    readonly id: string;
    readonly status: string;
}
export function getExpressConnectPhysicalConnectionServiceOutput(args?: GetExpressConnectPhysicalConnectionServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExpressConnectPhysicalConnectionServiceResult> {
    return pulumi.output(args).apply((a: any) => getExpressConnectPhysicalConnectionService(a, opts))
}

/**
 * A collection of arguments for invoking getExpressConnectPhysicalConnectionService.
 */
export interface GetExpressConnectPhysicalConnectionServiceOutputArgs {
    enable?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
