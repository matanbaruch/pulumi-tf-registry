// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getResourcemanagerPrivateEndpoint(args: GetResourcemanagerPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetResourcemanagerPrivateEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getResourcemanagerPrivateEndpoint:getResourcemanagerPrivateEndpoint", {
        "privateEndpointId": args.privateEndpointId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResourcemanagerPrivateEndpoint.
 */
export interface GetResourcemanagerPrivateEndpointArgs {
    privateEndpointId: string;
}

/**
 * A collection of values returned by getResourcemanagerPrivateEndpoint.
 */
export interface GetResourcemanagerPrivateEndpointResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly dnsZones: string[];
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isUsedWithConfigurationSourceProvider: boolean;
    readonly nsgIdLists: string[];
    readonly privateEndpointId: string;
    readonly sourceIps: string[];
    readonly state: string;
    readonly subnetId: string;
    readonly timeCreated: string;
    readonly vcnId: string;
}
export function getResourcemanagerPrivateEndpointOutput(args: GetResourcemanagerPrivateEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourcemanagerPrivateEndpointResult> {
    return pulumi.output(args).apply((a: any) => getResourcemanagerPrivateEndpoint(a, opts))
}

/**
 * A collection of arguments for invoking getResourcemanagerPrivateEndpoint.
 */
export interface GetResourcemanagerPrivateEndpointOutputArgs {
    privateEndpointId: pulumi.Input<string>;
}
