// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPlatformSlo(args: GetPlatformSloArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformSloResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformSlo:getPlatformSlo", {
        "id": args.id,
        "identifier": args.identifier,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformSlo.
 */
export interface GetPlatformSloArgs {
    id?: string;
    identifier: string;
    orgId: string;
    projectId: string;
}

/**
 * A collection of values returned by getPlatformSlo.
 */
export interface GetPlatformSloResult {
    readonly id: string;
    readonly identifier: string;
    readonly orgId: string;
    readonly projectId: string;
}
export function getPlatformSloOutput(args: GetPlatformSloOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformSloResult> {
    return pulumi.output(args).apply((a: any) => getPlatformSlo(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformSlo.
 */
export interface GetPlatformSloOutputArgs {
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    orgId: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
