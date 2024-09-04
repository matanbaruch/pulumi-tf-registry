// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getExpressConnectVirtualBorderRouters(args?: GetExpressConnectVirtualBorderRoutersArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressConnectVirtualBorderRoutersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getExpressConnectVirtualBorderRouters:getExpressConnectVirtualBorderRouters", {
        "filters": args.filters,
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getExpressConnectVirtualBorderRouters.
 */
export interface GetExpressConnectVirtualBorderRoutersArgs {
    filters?: inputs.GetExpressConnectVirtualBorderRoutersFilter[];
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    status?: string;
}

/**
 * A collection of values returned by getExpressConnectVirtualBorderRouters.
 */
export interface GetExpressConnectVirtualBorderRoutersResult {
    readonly filters?: outputs.GetExpressConnectVirtualBorderRoutersFilter[];
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly routers: outputs.GetExpressConnectVirtualBorderRoutersRouter[];
    readonly status?: string;
}
export function getExpressConnectVirtualBorderRoutersOutput(args?: GetExpressConnectVirtualBorderRoutersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExpressConnectVirtualBorderRoutersResult> {
    return pulumi.output(args).apply((a: any) => getExpressConnectVirtualBorderRouters(a, opts))
}

/**
 * A collection of arguments for invoking getExpressConnectVirtualBorderRouters.
 */
export interface GetExpressConnectVirtualBorderRoutersOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetExpressConnectVirtualBorderRoutersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
