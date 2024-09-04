// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("newrelic:index/getApplication:getApplication", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApplication.
 */
export interface GetApplicationArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getApplication.
 */
export interface GetApplicationResult {
    readonly hostIds: number[];
    readonly id: string;
    readonly instanceIds: number[];
    readonly name: string;
}
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationResult> {
    return pulumi.output(args).apply((a: any) => getApplication(a, opts))
}

/**
 * A collection of arguments for invoking getApplication.
 */
export interface GetApplicationOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
