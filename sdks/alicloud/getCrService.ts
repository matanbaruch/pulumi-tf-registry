// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCrService(args: GetCrServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetCrServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getCrService:getCrService", {
        "enable": args.enable,
        "id": args.id,
        "password": args.password,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCrService.
 */
export interface GetCrServiceArgs {
    enable?: string;
    id?: string;
    password: string;
}

/**
 * A collection of values returned by getCrService.
 */
export interface GetCrServiceResult {
    readonly enable?: string;
    readonly id: string;
    readonly password: string;
    readonly status: string;
}
export function getCrServiceOutput(args: GetCrServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCrServiceResult> {
    return pulumi.output(args).apply((a: any) => getCrService(a, opts))
}

/**
 * A collection of arguments for invoking getCrService.
 */
export interface GetCrServiceOutputArgs {
    enable?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    password: pulumi.Input<string>;
}
