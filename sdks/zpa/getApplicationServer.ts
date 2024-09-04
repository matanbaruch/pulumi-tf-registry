// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getApplicationServer(args?: GetApplicationServerArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationServerResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zpa:index/getApplicationServer:getApplicationServer", {
        "id": args.id,
        "microtenantId": args.microtenantId,
        "microtenantName": args.microtenantName,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApplicationServer.
 */
export interface GetApplicationServerArgs {
    id?: string;
    microtenantId?: string;
    microtenantName?: string;
    name?: string;
}

/**
 * A collection of values returned by getApplicationServer.
 */
export interface GetApplicationServerResult {
    readonly address: string;
    readonly appServerGroupIds: string[];
    readonly configSpace: string;
    readonly creationTime: string;
    readonly description: string;
    readonly enabled: boolean;
    readonly id?: string;
    readonly microtenantId?: string;
    readonly microtenantName?: string;
    readonly modifiedTime: string;
    readonly modifiedby: string;
    readonly name?: string;
}
export function getApplicationServerOutput(args?: GetApplicationServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationServerResult> {
    return pulumi.output(args).apply((a: any) => getApplicationServer(a, opts))
}

/**
 * A collection of arguments for invoking getApplicationServer.
 */
export interface GetApplicationServerOutputArgs {
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    microtenantName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
