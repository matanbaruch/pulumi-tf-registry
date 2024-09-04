// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPrivatelinkEndpointServiceDataFederationOnlineArchive(args: GetPrivatelinkEndpointServiceDataFederationOnlineArchiveArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivatelinkEndpointServiceDataFederationOnlineArchiveResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mongodbatlas:index/getPrivatelinkEndpointServiceDataFederationOnlineArchive:getPrivatelinkEndpointServiceDataFederationOnlineArchive", {
        "endpointId": args.endpointId,
        "id": args.id,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrivatelinkEndpointServiceDataFederationOnlineArchive.
 */
export interface GetPrivatelinkEndpointServiceDataFederationOnlineArchiveArgs {
    endpointId: string;
    id?: string;
    projectId: string;
}

/**
 * A collection of values returned by getPrivatelinkEndpointServiceDataFederationOnlineArchive.
 */
export interface GetPrivatelinkEndpointServiceDataFederationOnlineArchiveResult {
    readonly comment: string;
    readonly customerEndpointDnsName: string;
    readonly endpointId: string;
    readonly id: string;
    readonly projectId: string;
    readonly providerName: string;
    readonly region: string;
    readonly type: string;
}
export function getPrivatelinkEndpointServiceDataFederationOnlineArchiveOutput(args: GetPrivatelinkEndpointServiceDataFederationOnlineArchiveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivatelinkEndpointServiceDataFederationOnlineArchiveResult> {
    return pulumi.output(args).apply((a: any) => getPrivatelinkEndpointServiceDataFederationOnlineArchive(a, opts))
}

/**
 * A collection of arguments for invoking getPrivatelinkEndpointServiceDataFederationOnlineArchive.
 */
export interface GetPrivatelinkEndpointServiceDataFederationOnlineArchiveOutputArgs {
    endpointId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
