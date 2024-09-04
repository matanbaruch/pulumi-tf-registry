// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsCloudGateMapping(args: GetIdentityDomainsCloudGateMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsCloudGateMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsCloudGateMapping:getIdentityDomainsCloudGateMapping", {
        "attributeSets": args.attributeSets,
        "attributes": args.attributes,
        "authorization": args.authorization,
        "cloudGateMappingId": args.cloudGateMappingId,
        "idcsEndpoint": args.idcsEndpoint,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsCloudGateMapping.
 */
export interface GetIdentityDomainsCloudGateMappingArgs {
    attributeSets?: string[];
    attributes?: string;
    authorization?: string;
    cloudGateMappingId: string;
    idcsEndpoint: string;
    resourceTypeSchemaVersion?: string;
}

/**
 * A collection of values returned by getIdentityDomainsCloudGateMapping.
 */
export interface GetIdentityDomainsCloudGateMappingResult {
    readonly attributeSets?: string[];
    readonly attributes?: string;
    readonly authorization?: string;
    readonly cloudGateMappingId: string;
    readonly cloudGates: outputs.GetIdentityDomainsCloudGateMappingCloudGate[];
    readonly compartmentOcid: string;
    readonly deleteInProgress: boolean;
    readonly description: string;
    readonly domainOcid: string;
    readonly gatewayApps: outputs.GetIdentityDomainsCloudGateMappingGatewayApp[];
    readonly id: string;
    readonly idcsCreatedBies: outputs.GetIdentityDomainsCloudGateMappingIdcsCreatedBy[];
    readonly idcsEndpoint: string;
    readonly idcsLastModifiedBies: outputs.GetIdentityDomainsCloudGateMappingIdcsLastModifiedBy[];
    readonly idcsLastUpgradedInRelease: string;
    readonly idcsPreventedOperations: string[];
    readonly isOpcService: boolean;
    readonly metas: outputs.GetIdentityDomainsCloudGateMappingMeta[];
    readonly nginxSettings: string;
    readonly ocid: string;
    readonly policyName: string;
    readonly proxyPass: string;
    readonly resourcePrefix: string;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly servers: outputs.GetIdentityDomainsCloudGateMappingServer[];
    readonly tags: outputs.GetIdentityDomainsCloudGateMappingTag[];
    readonly tenancyOcid: string;
    readonly upstreamServerGroups: outputs.GetIdentityDomainsCloudGateMappingUpstreamServerGroup[];
}
export function getIdentityDomainsCloudGateMappingOutput(args: GetIdentityDomainsCloudGateMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsCloudGateMappingResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsCloudGateMapping(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsCloudGateMapping.
 */
export interface GetIdentityDomainsCloudGateMappingOutputArgs {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    cloudGateMappingId: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
}
