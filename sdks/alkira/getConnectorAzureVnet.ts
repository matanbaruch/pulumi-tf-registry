// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getConnectorAzureVnet(args: GetConnectorAzureVnetArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorAzureVnetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alkira:index/getConnectorAzureVnet:getConnectorAzureVnet", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConnectorAzureVnet.
 */
export interface GetConnectorAzureVnetArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getConnectorAzureVnet.
 */
export interface GetConnectorAzureVnetResult {
    readonly id: string;
    readonly implicitGroupId: number;
    readonly name: string;
}
export function getConnectorAzureVnetOutput(args: GetConnectorAzureVnetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectorAzureVnetResult> {
    return pulumi.output(args).apply((a: any) => getConnectorAzureVnet(a, opts))
}

/**
 * A collection of arguments for invoking getConnectorAzureVnet.
 */
export interface GetConnectorAzureVnetOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
