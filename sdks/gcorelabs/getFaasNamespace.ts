// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFaasNamespace(args: GetFaasNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetFaasNamespaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gcorelabs:index/getFaasNamespace:getFaasNamespace", {
        "id": args.id,
        "name": args.name,
        "projectId": args.projectId,
        "projectName": args.projectName,
        "regionId": args.regionId,
        "regionName": args.regionName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFaasNamespace.
 */
export interface GetFaasNamespaceArgs {
    id?: string;
    name: string;
    projectId?: number;
    projectName?: string;
    regionId?: number;
    regionName?: string;
}

/**
 * A collection of values returned by getFaasNamespace.
 */
export interface GetFaasNamespaceResult {
    readonly createdAt: string;
    readonly description: string;
    readonly envs: {[key: string]: string};
    readonly id: string;
    readonly name: string;
    readonly projectId?: number;
    readonly projectName?: string;
    readonly regionId?: number;
    readonly regionName?: string;
    readonly status: string;
}
export function getFaasNamespaceOutput(args: GetFaasNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFaasNamespaceResult> {
    return pulumi.output(args).apply((a: any) => getFaasNamespace(a, opts))
}

/**
 * A collection of arguments for invoking getFaasNamespace.
 */
export interface GetFaasNamespaceOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
}
