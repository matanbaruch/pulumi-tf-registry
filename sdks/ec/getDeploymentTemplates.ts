// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDeploymentTemplates(args: GetDeploymentTemplatesArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentTemplatesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ec:index/getDeploymentTemplates:getDeploymentTemplates", {
        "id": args.id,
        "region": args.region,
        "showDeprecated": args.showDeprecated,
        "stackVersion": args.stackVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDeploymentTemplates.
 */
export interface GetDeploymentTemplatesArgs {
    id?: string;
    region: string;
    showDeprecated?: boolean;
    stackVersion?: string;
}

/**
 * A collection of values returned by getDeploymentTemplates.
 */
export interface GetDeploymentTemplatesResult {
    readonly id?: string;
    readonly region: string;
    readonly showDeprecated?: boolean;
    readonly stackVersion?: string;
    readonly templates: outputs.GetDeploymentTemplatesTemplate[];
}
export function getDeploymentTemplatesOutput(args: GetDeploymentTemplatesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentTemplatesResult> {
    return pulumi.output(args).apply((a: any) => getDeploymentTemplates(a, opts))
}

/**
 * A collection of arguments for invoking getDeploymentTemplates.
 */
export interface GetDeploymentTemplatesOutputArgs {
    id?: pulumi.Input<string>;
    region: pulumi.Input<string>;
    showDeprecated?: pulumi.Input<boolean>;
    stackVersion?: pulumi.Input<string>;
}
