// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServicecatalogServiceAction(args: GetServicecatalogServiceActionArgs, opts?: pulumi.InvokeOptions): Promise<GetServicecatalogServiceActionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getServicecatalogServiceAction:getServicecatalogServiceAction", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServicecatalogServiceAction.
 */
export interface GetServicecatalogServiceActionArgs {
    id: string;
}

/**
 * A collection of values returned by getServicecatalogServiceAction.
 */
export interface GetServicecatalogServiceActionResult {
    readonly acceptLanguage: string;
    readonly definitionType: string;
    readonly definitions: outputs.GetServicecatalogServiceActionDefinition[];
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly serviceActionId: string;
}
export function getServicecatalogServiceActionOutput(args: GetServicecatalogServiceActionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServicecatalogServiceActionResult> {
    return pulumi.output(args).apply((a: any) => getServicecatalogServiceAction(a, opts))
}

/**
 * A collection of arguments for invoking getServicecatalogServiceAction.
 */
export interface GetServicecatalogServiceActionOutputArgs {
    id: pulumi.Input<string>;
}
