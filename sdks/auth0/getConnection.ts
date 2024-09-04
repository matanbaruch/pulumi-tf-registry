// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getConnection(args?: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("auth0:index/getConnection:getConnection", {
        "connectionId": args.connectionId,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionArgs {
    connectionId?: string;
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getConnection.
 */
export interface GetConnectionResult {
    readonly connectionId?: string;
    readonly displayName: string;
    readonly enabledClients: string[];
    readonly id: string;
    readonly isDomainConnection: boolean;
    readonly metadata: {[key: string]: string};
    readonly name?: string;
    readonly options: outputs.GetConnectionOption[];
    readonly realms: string[];
    readonly showAsButton: boolean;
    readonly strategy: string;
}
export function getConnectionOutput(args?: GetConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectionResult> {
    return pulumi.output(args).apply((a: any) => getConnection(a, opts))
}

/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionOutputArgs {
    connectionId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
