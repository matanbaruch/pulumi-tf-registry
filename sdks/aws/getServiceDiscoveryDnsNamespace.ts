// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getServiceDiscoveryDnsNamespace(args: GetServiceDiscoveryDnsNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceDiscoveryDnsNamespaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getServiceDiscoveryDnsNamespace:getServiceDiscoveryDnsNamespace", {
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceDiscoveryDnsNamespace.
 */
export interface GetServiceDiscoveryDnsNamespaceArgs {
    id?: string;
    name: string;
    tags?: {[key: string]: string};
    type: string;
}

/**
 * A collection of values returned by getServiceDiscoveryDnsNamespace.
 */
export interface GetServiceDiscoveryDnsNamespaceResult {
    readonly arn: string;
    readonly description: string;
    readonly hostedZone: string;
    readonly id: string;
    readonly name: string;
    readonly tags: {[key: string]: string};
    readonly type: string;
}
export function getServiceDiscoveryDnsNamespaceOutput(args: GetServiceDiscoveryDnsNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceDiscoveryDnsNamespaceResult> {
    return pulumi.output(args).apply((a: any) => getServiceDiscoveryDnsNamespace(a, opts))
}

/**
 * A collection of arguments for invoking getServiceDiscoveryDnsNamespace.
 */
export interface GetServiceDiscoveryDnsNamespaceOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}
