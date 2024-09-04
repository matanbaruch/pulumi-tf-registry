// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsIdentityProvider(args: GetIdentityDomainsIdentityProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsIdentityProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsIdentityProvider:getIdentityDomainsIdentityProvider", {
        "attributeSets": args.attributeSets,
        "attributes": args.attributes,
        "authorization": args.authorization,
        "idcsEndpoint": args.idcsEndpoint,
        "identityProviderId": args.identityProviderId,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsIdentityProvider.
 */
export interface GetIdentityDomainsIdentityProviderArgs {
    attributeSets?: string[];
    attributes?: string;
    authorization?: string;
    idcsEndpoint: string;
    identityProviderId: string;
    resourceTypeSchemaVersion?: string;
}

/**
 * A collection of values returned by getIdentityDomainsIdentityProvider.
 */
export interface GetIdentityDomainsIdentityProviderResult {
    readonly assertionAttribute: string;
    readonly attributeSets?: string[];
    readonly attributes?: string;
    readonly authnRequestBinding: string;
    readonly authorization?: string;
    readonly compartmentOcid: string;
    readonly correlationPolicies: outputs.GetIdentityDomainsIdentityProviderCorrelationPolicy[];
    readonly deleteInProgress: boolean;
    readonly description: string;
    readonly domainOcid: string;
    readonly enabled: boolean;
    readonly encryptionCertificate: string;
    readonly externalId: string;
    readonly iconUrl: string;
    readonly id: string;
    readonly idcsCreatedBies: outputs.GetIdentityDomainsIdentityProviderIdcsCreatedBy[];
    readonly idcsEndpoint: string;
    readonly idcsLastModifiedBies: outputs.GetIdentityDomainsIdentityProviderIdcsLastModifiedBy[];
    readonly idcsLastUpgradedInRelease: string;
    readonly idcsPreventedOperations: string[];
    readonly identityProviderId: string;
    readonly idpSsoUrl: string;
    readonly includeSigningCertInSignature: boolean;
    readonly jitUserProvAssignedGroups: outputs.GetIdentityDomainsIdentityProviderJitUserProvAssignedGroup[];
    readonly jitUserProvAttributeUpdateEnabled: boolean;
    readonly jitUserProvAttributes: outputs.GetIdentityDomainsIdentityProviderJitUserProvAttribute[];
    readonly jitUserProvCreateUserEnabled: boolean;
    readonly jitUserProvEnabled: boolean;
    readonly jitUserProvGroupAssertionAttributeEnabled: boolean;
    readonly jitUserProvGroupAssignmentMethod: string;
    readonly jitUserProvGroupMappingMode: string;
    readonly jitUserProvGroupMappings: outputs.GetIdentityDomainsIdentityProviderJitUserProvGroupMapping[];
    readonly jitUserProvGroupSamlAttributeName: string;
    readonly jitUserProvGroupStaticListEnabled: boolean;
    readonly jitUserProvIgnoreErrorOnAbsentGroups: boolean;
    readonly lastNotificationSentTime: string;
    readonly logoutBinding: string;
    readonly logoutEnabled: boolean;
    readonly logoutRequestUrl: string;
    readonly logoutResponseUrl: string;
    readonly metadata: string;
    readonly metas: outputs.GetIdentityDomainsIdentityProviderMeta[];
    readonly nameIdFormat: string;
    readonly ocid: string;
    readonly partnerName: string;
    readonly partnerProviderId: string;
    readonly requestedAuthenticationContexts: string[];
    readonly requireForceAuthn: boolean;
    readonly requiresEncryptedAssertion: boolean;
    readonly resourceTypeSchemaVersion?: string;
    readonly samlHoKrequired: boolean;
    readonly schemas: string[];
    readonly serviceInstanceIdentifier: string;
    readonly shownOnLoginPage: boolean;
    readonly signatureHashAlgorithm: string;
    readonly signingCertificate: string;
    readonly succinctId: string;
    readonly tags: outputs.GetIdentityDomainsIdentityProviderTag[];
    readonly tenancyOcid: string;
    readonly tenantProviderId: string;
    readonly type: string;
    readonly urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviders: outputs.GetIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider[];
    readonly urnietfparamsscimschemasoracleidcsextensionx509identityProviders: outputs.GetIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509identityProvider[];
    readonly userMappingMethod: string;
    readonly userMappingStoreAttribute: string;
}
export function getIdentityDomainsIdentityProviderOutput(args: GetIdentityDomainsIdentityProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsIdentityProviderResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsIdentityProvider(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsIdentityProvider.
 */
export interface GetIdentityDomainsIdentityProviderOutputArgs {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    identityProviderId: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
}
