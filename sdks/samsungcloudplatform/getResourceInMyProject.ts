// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getResourceInMyProject(args: GetResourceInMyProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceInMyProjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getResourceInMyProject:getResourceInMyProject", {
        "id": args.id,
        "includeDeleted": args.includeDeleted,
        "projectId": args.projectId,
        "resourceId": args.resourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResourceInMyProject.
 */
export interface GetResourceInMyProjectArgs {
    id?: string;
    includeDeleted?: string;
    projectId: string;
    resourceId: string;
}

/**
 * A collection of values returned by getResourceInMyProject.
 */
export interface GetResourceInMyProjectResult {
    readonly accountName: string;
    readonly createdBy: string;
    readonly createdByEmail: string;
    readonly createdByName: string;
    readonly createdDt: string;
    readonly eventState: string;
    readonly id: string;
    readonly includeDeleted?: string;
    readonly modifiedBy: string;
    readonly modifiedByEmail: string;
    readonly modifiedByName: string;
    readonly modifiedDt: string;
    readonly partition: string;
    readonly projectId: string;
    readonly projectName: string;
    readonly region: string;
    readonly resourceId: string;
    readonly resourceName: string;
    readonly resourceSrn: string;
    readonly resourceState: string;
    readonly resourceType: string;
    readonly serviceType: string;
    readonly tags: outputs.GetResourceInMyProjectTag[];
    readonly zone: string;
}
export function getResourceInMyProjectOutput(args: GetResourceInMyProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceInMyProjectResult> {
    return pulumi.output(args).apply((a: any) => getResourceInMyProject(a, opts))
}

/**
 * A collection of arguments for invoking getResourceInMyProject.
 */
export interface GetResourceInMyProjectOutputArgs {
    id?: pulumi.Input<string>;
    includeDeleted?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    resourceId: pulumi.Input<string>;
}
