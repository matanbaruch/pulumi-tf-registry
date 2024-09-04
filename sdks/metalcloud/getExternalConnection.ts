// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getExternalConnection(args: GetExternalConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetExternalConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("metalcloud:index/getExternalConnection:getExternalConnection", {
        "datacenterName": args.datacenterName,
        "externalConnectionDescription": args.externalConnectionDescription,
        "externalConnectionHidden": args.externalConnectionHidden,
        "externalConnectionId": args.externalConnectionId,
        "externalConnectionLabel": args.externalConnectionLabel,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getExternalConnection.
 */
export interface GetExternalConnectionArgs {
    datacenterName: string;
    externalConnectionDescription?: string;
    externalConnectionHidden?: boolean;
    externalConnectionId?: number;
    externalConnectionLabel: string;
    id?: string;
}

/**
 * A collection of values returned by getExternalConnection.
 */
export interface GetExternalConnectionResult {
    readonly datacenterName: string;
    readonly externalConnectionDescription?: string;
    readonly externalConnectionHidden?: boolean;
    readonly externalConnectionId: number;
    readonly externalConnectionLabel: string;
    readonly id: string;
}
export function getExternalConnectionOutput(args: GetExternalConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExternalConnectionResult> {
    return pulumi.output(args).apply((a: any) => getExternalConnection(a, opts))
}

/**
 * A collection of arguments for invoking getExternalConnection.
 */
export interface GetExternalConnectionOutputArgs {
    datacenterName: pulumi.Input<string>;
    externalConnectionDescription?: pulumi.Input<string>;
    externalConnectionHidden?: pulumi.Input<boolean>;
    externalConnectionId?: pulumi.Input<number>;
    externalConnectionLabel: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
