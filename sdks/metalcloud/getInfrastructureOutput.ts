// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getInfrastructureOutput(args: GetInfrastructureOutputArgs, opts?: pulumi.InvokeOptions): Promise<GetInfrastructureOutputResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("metalcloud:index/getInfrastructureOutput:getInfrastructureOutput", {
        "id": args.id,
        "infrastructureId": args.infrastructureId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInfrastructureOutput.
 */
export interface GetInfrastructureOutputArgs {
    id?: string;
    infrastructureId: number;
}

/**
 * A collection of values returned by getInfrastructureOutput.
 */
export interface GetInfrastructureOutputResult {
    readonly clusters: string;
    readonly drives: string;
    readonly id: string;
    readonly infrastructureId: number;
    readonly instances: string;
    readonly sharedDrives: string;
}
export function getInfrastructureOutputOutput(args: GetInfrastructureOutputOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInfrastructureOutputResult> {
    return pulumi.output(args).apply((a: any) => getInfrastructureOutput(a, opts))
}

/**
 * A collection of arguments for invoking getInfrastructureOutput.
 */
export interface GetInfrastructureOutputOutputArgs {
    id?: pulumi.Input<string>;
    infrastructureId: pulumi.Input<number>;
}
