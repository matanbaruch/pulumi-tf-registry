// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsMyTrustedUserAgent(args: GetIdentityDomainsMyTrustedUserAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsMyTrustedUserAgentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsMyTrustedUserAgent:getIdentityDomainsMyTrustedUserAgent", {
        "attributeSets": args.attributeSets,
        "attributes": args.attributes,
        "authorization": args.authorization,
        "id": args.id,
        "idcsEndpoint": args.idcsEndpoint,
        "myTrustedUserAgentId": args.myTrustedUserAgentId,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsMyTrustedUserAgent.
 */
export interface GetIdentityDomainsMyTrustedUserAgentArgs {
    attributeSets?: string[];
    attributes?: string;
    authorization?: string;
    id?: string;
    idcsEndpoint: string;
    myTrustedUserAgentId: string;
    resourceTypeSchemaVersion?: string;
}

/**
 * A collection of values returned by getIdentityDomainsMyTrustedUserAgent.
 */
export interface GetIdentityDomainsMyTrustedUserAgentResult {
    readonly attributeSets?: string[];
    readonly attributes?: string;
    readonly authorization?: string;
    readonly compartmentOcid: string;
    readonly deleteInProgress: boolean;
    readonly domainOcid: string;
    readonly expiryTime: string;
    readonly id: string;
    readonly idcsCreatedBies: outputs.GetIdentityDomainsMyTrustedUserAgentIdcsCreatedBy[];
    readonly idcsEndpoint: string;
    readonly idcsLastModifiedBies: outputs.GetIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy[];
    readonly idcsLastUpgradedInRelease: string;
    readonly idcsPreventedOperations: string[];
    readonly lastUsedOn: string;
    readonly location: string;
    readonly metas: outputs.GetIdentityDomainsMyTrustedUserAgentMeta[];
    readonly myTrustedUserAgentId: string;
    readonly name: string;
    readonly ocid: string;
    readonly platform: string;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly tags: outputs.GetIdentityDomainsMyTrustedUserAgentTag[];
    readonly tenancyOcid: string;
    readonly tokenType: string;
    readonly trustToken: string;
    readonly trustedFactors: outputs.GetIdentityDomainsMyTrustedUserAgentTrustedFactor[];
    readonly users: outputs.GetIdentityDomainsMyTrustedUserAgentUser[];
}
export function getIdentityDomainsMyTrustedUserAgentOutput(args: GetIdentityDomainsMyTrustedUserAgentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsMyTrustedUserAgentResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsMyTrustedUserAgent(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsMyTrustedUserAgent.
 */
export interface GetIdentityDomainsMyTrustedUserAgentOutputArgs {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    myTrustedUserAgentId: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
}
