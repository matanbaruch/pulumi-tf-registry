// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAppsecSelectedHostnames(args: GetAppsecSelectedHostnamesArgs, opts?: pulumi.InvokeOptions): Promise<GetAppsecSelectedHostnamesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getAppsecSelectedHostnames:getAppsecSelectedHostnames", {
        "configId": args.configId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppsecSelectedHostnames.
 */
export interface GetAppsecSelectedHostnamesArgs {
    configId: number;
    id?: string;
}

/**
 * A collection of values returned by getAppsecSelectedHostnames.
 */
export interface GetAppsecSelectedHostnamesResult {
    readonly configId: number;
    readonly hostnames: string[];
    readonly hostnamesJson: string;
    readonly id: string;
    readonly outputText: string;
}
export function getAppsecSelectedHostnamesOutput(args: GetAppsecSelectedHostnamesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppsecSelectedHostnamesResult> {
    return pulumi.output(args).apply((a: any) => getAppsecSelectedHostnames(a, opts))
}

/**
 * A collection of arguments for invoking getAppsecSelectedHostnames.
 */
export interface GetAppsecSelectedHostnamesOutputArgs {
    configId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
}
