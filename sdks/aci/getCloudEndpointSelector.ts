// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudEndpointSelector(args: GetCloudEndpointSelectorArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudEndpointSelectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getCloudEndpointSelector:getCloudEndpointSelector", {
        "annotation": args.annotation,
        "cloudEpgDn": args.cloudEpgDn,
        "description": args.description,
        "id": args.id,
        "matchExpression": args.matchExpression,
        "name": args.name,
        "nameAlias": args.nameAlias,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudEndpointSelector.
 */
export interface GetCloudEndpointSelectorArgs {
    annotation?: string;
    cloudEpgDn: string;
    description?: string;
    id?: string;
    matchExpression?: string;
    name: string;
    nameAlias?: string;
}

/**
 * A collection of values returned by getCloudEndpointSelector.
 */
export interface GetCloudEndpointSelectorResult {
    readonly annotation: string;
    readonly cloudEpgDn: string;
    readonly description: string;
    readonly id: string;
    readonly matchExpression: string;
    readonly name: string;
    readonly nameAlias: string;
}
export function getCloudEndpointSelectorOutput(args: GetCloudEndpointSelectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudEndpointSelectorResult> {
    return pulumi.output(args).apply((a: any) => getCloudEndpointSelector(a, opts))
}

/**
 * A collection of arguments for invoking getCloudEndpointSelector.
 */
export interface GetCloudEndpointSelectorOutputArgs {
    annotation?: pulumi.Input<string>;
    cloudEpgDn: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    matchExpression?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
