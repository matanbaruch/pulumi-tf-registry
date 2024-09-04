// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTenantTemplateDeployment(args: GetTenantTemplateDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetTenantTemplateDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getTenantTemplateDeployment:getTenantTemplateDeployment", {
        "id": args.id,
        "name": args.name,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTenantTemplateDeployment.
 */
export interface GetTenantTemplateDeploymentArgs {
    id?: string;
    name: string;
    timeouts?: inputs.GetTenantTemplateDeploymentTimeouts;
}

/**
 * A collection of values returned by getTenantTemplateDeployment.
 */
export interface GetTenantTemplateDeploymentResult {
    readonly id: string;
    readonly name: string;
    readonly outputContent: string;
    readonly timeouts?: outputs.GetTenantTemplateDeploymentTimeouts;
}
export function getTenantTemplateDeploymentOutput(args: GetTenantTemplateDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTenantTemplateDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getTenantTemplateDeployment(a, opts))
}

/**
 * A collection of arguments for invoking getTenantTemplateDeployment.
 */
export interface GetTenantTemplateDeploymentOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetTenantTemplateDeploymentTimeoutsArgs>;
}
