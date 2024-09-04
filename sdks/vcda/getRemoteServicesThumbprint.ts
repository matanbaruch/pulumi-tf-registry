// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRemoteServicesThumbprint(args?: GetRemoteServicesThumbprintArgs, opts?: pulumi.InvokeOptions): Promise<GetRemoteServicesThumbprintResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcda:index/getRemoteServicesThumbprint:getRemoteServicesThumbprint", {
        "address": args.address,
        "id": args.id,
        "pemFile": args.pemFile,
        "port": args.port,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRemoteServicesThumbprint.
 */
export interface GetRemoteServicesThumbprintArgs {
    address?: string;
    id?: string;
    pemFile?: string;
    port?: string;
}

/**
 * A collection of values returned by getRemoteServicesThumbprint.
 */
export interface GetRemoteServicesThumbprintResult {
    readonly address?: string;
    readonly id: string;
    readonly pemFile?: string;
    readonly port?: string;
}
export function getRemoteServicesThumbprintOutput(args?: GetRemoteServicesThumbprintOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRemoteServicesThumbprintResult> {
    return pulumi.output(args).apply((a: any) => getRemoteServicesThumbprint(a, opts))
}

/**
 * A collection of arguments for invoking getRemoteServicesThumbprint.
 */
export interface GetRemoteServicesThumbprintOutputArgs {
    address?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    pemFile?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
}
