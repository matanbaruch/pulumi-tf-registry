// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVelocityContextProviders(args: GetVelocityContextProvidersArgs, opts?: pulumi.InvokeOptions): Promise<GetVelocityContextProvidersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getVelocityContextProviders:getVelocityContextProviders", {
        "filter": args.filter,
        "httpServletExtensionName": args.httpServletExtensionName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVelocityContextProviders.
 */
export interface GetVelocityContextProvidersArgs {
    filter?: string;
    httpServletExtensionName: string;
}

/**
 * A collection of values returned by getVelocityContextProviders.
 */
export interface GetVelocityContextProvidersResult {
    readonly filter?: string;
    readonly httpServletExtensionName: string;
    readonly id: string;
    readonly objects: outputs.GetVelocityContextProvidersObject[];
}
export function getVelocityContextProvidersOutput(args: GetVelocityContextProvidersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVelocityContextProvidersResult> {
    return pulumi.output(args).apply((a: any) => getVelocityContextProviders(a, opts))
}

/**
 * A collection of arguments for invoking getVelocityContextProviders.
 */
export interface GetVelocityContextProvidersOutputArgs {
    filter?: pulumi.Input<string>;
    httpServletExtensionName: pulumi.Input<string>;
}
