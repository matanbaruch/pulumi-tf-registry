// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagementAgentManagementAgentImages(args: GetManagementAgentManagementAgentImagesArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementAgentManagementAgentImagesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getManagementAgentManagementAgentImages:getManagementAgentManagementAgentImages", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "installType": args.installType,
        "name": args.name,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementAgentManagementAgentImages.
 */
export interface GetManagementAgentManagementAgentImagesArgs {
    compartmentId: string;
    filters?: inputs.GetManagementAgentManagementAgentImagesFilter[];
    id?: string;
    installType?: string;
    name?: string;
    state?: string;
}

/**
 * A collection of values returned by getManagementAgentManagementAgentImages.
 */
export interface GetManagementAgentManagementAgentImagesResult {
    readonly compartmentId: string;
    readonly filters?: outputs.GetManagementAgentManagementAgentImagesFilter[];
    readonly id: string;
    readonly installType?: string;
    readonly managementAgentImages: outputs.GetManagementAgentManagementAgentImagesManagementAgentImage[];
    readonly name?: string;
    readonly state?: string;
}
export function getManagementAgentManagementAgentImagesOutput(args: GetManagementAgentManagementAgentImagesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementAgentManagementAgentImagesResult> {
    return pulumi.output(args).apply((a: any) => getManagementAgentManagementAgentImages(a, opts))
}

/**
 * A collection of arguments for invoking getManagementAgentManagementAgentImages.
 */
export interface GetManagementAgentManagementAgentImagesOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetManagementAgentManagementAgentImagesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    installType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
