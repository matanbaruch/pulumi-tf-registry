// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsNetworkPerimeter(args: GetIdentityDomainsNetworkPerimeterArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsNetworkPerimeterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsNetworkPerimeter:getIdentityDomainsNetworkPerimeter", {
        "attributeSets": args.attributeSets,
        "attributes": args.attributes,
        "authorization": args.authorization,
        "idcsEndpoint": args.idcsEndpoint,
        "networkPerimeterId": args.networkPerimeterId,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsNetworkPerimeter.
 */
export interface GetIdentityDomainsNetworkPerimeterArgs {
    attributeSets?: string[];
    attributes?: string;
    authorization?: string;
    idcsEndpoint: string;
    networkPerimeterId: string;
    resourceTypeSchemaVersion?: string;
}

/**
 * A collection of values returned by getIdentityDomainsNetworkPerimeter.
 */
export interface GetIdentityDomainsNetworkPerimeterResult {
    readonly attributeSets?: string[];
    readonly attributes?: string;
    readonly authorization?: string;
    readonly compartmentOcid: string;
    readonly deleteInProgress: boolean;
    readonly description: string;
    readonly domainOcid: string;
    readonly externalId: string;
    readonly id: string;
    readonly idcsCreatedBies: outputs.GetIdentityDomainsNetworkPerimeterIdcsCreatedBy[];
    readonly idcsEndpoint: string;
    readonly idcsLastModifiedBies: outputs.GetIdentityDomainsNetworkPerimeterIdcsLastModifiedBy[];
    readonly idcsLastUpgradedInRelease: string;
    readonly idcsPreventedOperations: string[];
    readonly ipAddresses: outputs.GetIdentityDomainsNetworkPerimeterIpAddress[];
    readonly metas: outputs.GetIdentityDomainsNetworkPerimeterMeta[];
    readonly name: string;
    readonly networkPerimeterId: string;
    readonly ocid: string;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly tags: outputs.GetIdentityDomainsNetworkPerimeterTag[];
    readonly tenancyOcid: string;
}
export function getIdentityDomainsNetworkPerimeterOutput(args: GetIdentityDomainsNetworkPerimeterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsNetworkPerimeterResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsNetworkPerimeter(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsNetworkPerimeter.
 */
export interface GetIdentityDomainsNetworkPerimeterOutputArgs {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    networkPerimeterId: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
}
