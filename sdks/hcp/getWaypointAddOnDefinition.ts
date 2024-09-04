// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWaypointAddOnDefinition(args?: GetWaypointAddOnDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetWaypointAddOnDefinitionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hcp:index/getWaypointAddOnDefinition:getWaypointAddOnDefinition", {
        "id": args.id,
        "name": args.name,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWaypointAddOnDefinition.
 */
export interface GetWaypointAddOnDefinitionArgs {
    id?: string;
    name?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getWaypointAddOnDefinition.
 */
export interface GetWaypointAddOnDefinitionResult {
    readonly description: string;
    readonly id: string;
    readonly labels: string[];
    readonly name: string;
    readonly organizationId: string;
    readonly projectId: string;
    readonly readmeMarkdownTemplate: string;
    readonly summary: string;
    readonly terraformCloudWorkspaceDetails: outputs.GetWaypointAddOnDefinitionTerraformCloudWorkspaceDetails;
    readonly terraformNoCodeModule: outputs.GetWaypointAddOnDefinitionTerraformNoCodeModule;
    readonly variableOptions: outputs.GetWaypointAddOnDefinitionVariableOption[];
}
export function getWaypointAddOnDefinitionOutput(args?: GetWaypointAddOnDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWaypointAddOnDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getWaypointAddOnDefinition(a, opts))
}

/**
 * A collection of arguments for invoking getWaypointAddOnDefinition.
 */
export interface GetWaypointAddOnDefinitionOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
