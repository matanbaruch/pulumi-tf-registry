// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IdpSpConnection extends pulumi.CustomResource {
    /**
     * Get an existing IdpSpConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdpSpConnectionState, opts?: pulumi.CustomResourceOptions): IdpSpConnection {
        return new IdpSpConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/idpSpConnection:IdpSpConnection';

    /**
     * Returns true if the given object is an instance of IdpSpConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdpSpConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdpSpConnection.__pulumiType;
    }

    /**
     * Specifies whether the connection is active and ready to process incoming requests. The default value is false.
     */
    public readonly active!: pulumi.Output<boolean>;
    /**
     * Additional allowed entities or issuers configuration. Currently only used in OIDC IdP (RP) connection.
     */
    public readonly additionalAllowedEntitiesConfiguration!: pulumi.Output<outputs.IdpSpConnectionAdditionalAllowedEntitiesConfiguration | undefined>;
    /**
     * The application icon url.
     */
    public readonly applicationIconUrl!: pulumi.Output<string | undefined>;
    /**
     * The application name.
     */
    public readonly applicationName!: pulumi.Output<string | undefined>;
    /**
     * The attribute query profile supports SPs in requesting user attributes.
     */
    public readonly attributeQuery!: pulumi.Output<outputs.IdpSpConnectionAttributeQuery | undefined>;
    /**
     * The fully-qualified hostname and port on which your partner's federation deployment runs.
     */
    public readonly baseUrl!: pulumi.Output<string | undefined>;
    /**
     * The persistent, unique ID for the connection. It can be any combination of [a-zA-Z0-9._-].
     */
    public readonly connectionId!: pulumi.Output<string>;
    /**
     * The connection target type. This field is intended for bulk import/export usage. Changing its value may result in
     * unexpected behavior.
     */
    public readonly connectionTargetType!: pulumi.Output<string>;
    /**
     * Contact information.
     */
    public readonly contactInfo!: pulumi.Output<outputs.IdpSpConnectionContactInfo | undefined>;
    /**
     * The time at which the connection was created. This property is read only and is ignored on PUT and POST requests.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The certificates and settings for encryption, signing, and signature verification.
     */
    public readonly credentials!: pulumi.Output<outputs.IdpSpConnectionCredentials | undefined>;
    /**
     * The default alternate entity ID that identifies the local server to this partner. It is required when virtualEntityIds
     * is not empty and must be included in that list.
     */
    public readonly defaultVirtualEntityId!: pulumi.Output<string | undefined>;
    /**
     * The partner's entity ID (connection ID) or issuer value (for OIDC Connections).
     */
    public readonly entityId!: pulumi.Output<string>;
    /**
     * Extended Properties allows to store additional information for IdP/SP Connections. The names of these extended
     * properties should be defined in /extendedProperties.
     */
    public readonly extendedProperties!: pulumi.Output<{[key: string]: outputs.IdpSpConnectionExtendedProperties} | undefined>;
    /**
     * The license connection group. If your PingFederate license is based on connection groups, each connection must be
     * assigned to a group before it can be used.
     */
    public readonly licenseConnectionGroup!: pulumi.Output<string | undefined>;
    /**
     * The level of transaction logging applicable for this connection. Default is STANDARD.
     */
    public readonly loggingMode!: pulumi.Output<string>;
    /**
     * Configuration settings to enable automatic reload of partner's metadata.
     */
    public readonly metadataReloadSettings!: pulumi.Output<outputs.IdpSpConnectionMetadataReloadSettings | undefined>;
    /**
     * The connection name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Outbound Provisioning allows an IdP to create and maintain user accounts at standards-based partner sites using SCIM as
     * well as select-proprietary provisioning partner sites that are protocol-enabled.
     */
    public readonly outboundProvision!: pulumi.Output<outputs.IdpSpConnectionOutboundProvision | undefined>;
    /**
     * The SAML settings used to enable secure browser-based SSO to resources at your partner's site.
     */
    public readonly spBrowserSso!: pulumi.Output<outputs.IdpSpConnectionSpBrowserSso | undefined>;
    /**
     * The type of this connection.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of alternate entity IDs that identifies the local server to this partner.
     */
    public readonly virtualEntityIds!: pulumi.Output<string[]>;
    /**
     * Ws-Trust STS provides security-token validation and creation to extend SSO access to identity-enabled Web Services
     */
    public readonly wsTrust!: pulumi.Output<outputs.IdpSpConnectionWsTrust | undefined>;

    /**
     * Create a IdpSpConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdpSpConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdpSpConnectionArgs | IdpSpConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdpSpConnectionState | undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["additionalAllowedEntitiesConfiguration"] = state ? state.additionalAllowedEntitiesConfiguration : undefined;
            resourceInputs["applicationIconUrl"] = state ? state.applicationIconUrl : undefined;
            resourceInputs["applicationName"] = state ? state.applicationName : undefined;
            resourceInputs["attributeQuery"] = state ? state.attributeQuery : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["connectionId"] = state ? state.connectionId : undefined;
            resourceInputs["connectionTargetType"] = state ? state.connectionTargetType : undefined;
            resourceInputs["contactInfo"] = state ? state.contactInfo : undefined;
            resourceInputs["creationDate"] = state ? state.creationDate : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["defaultVirtualEntityId"] = state ? state.defaultVirtualEntityId : undefined;
            resourceInputs["entityId"] = state ? state.entityId : undefined;
            resourceInputs["extendedProperties"] = state ? state.extendedProperties : undefined;
            resourceInputs["licenseConnectionGroup"] = state ? state.licenseConnectionGroup : undefined;
            resourceInputs["loggingMode"] = state ? state.loggingMode : undefined;
            resourceInputs["metadataReloadSettings"] = state ? state.metadataReloadSettings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outboundProvision"] = state ? state.outboundProvision : undefined;
            resourceInputs["spBrowserSso"] = state ? state.spBrowserSso : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["virtualEntityIds"] = state ? state.virtualEntityIds : undefined;
            resourceInputs["wsTrust"] = state ? state.wsTrust : undefined;
        } else {
            const args = argsOrState as IdpSpConnectionArgs | undefined;
            if ((!args || args.connectionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionId'");
            }
            if ((!args || args.entityId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entityId'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["additionalAllowedEntitiesConfiguration"] = args ? args.additionalAllowedEntitiesConfiguration : undefined;
            resourceInputs["applicationIconUrl"] = args ? args.applicationIconUrl : undefined;
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["attributeQuery"] = args ? args.attributeQuery : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["connectionId"] = args ? args.connectionId : undefined;
            resourceInputs["connectionTargetType"] = args ? args.connectionTargetType : undefined;
            resourceInputs["contactInfo"] = args ? args.contactInfo : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["defaultVirtualEntityId"] = args ? args.defaultVirtualEntityId : undefined;
            resourceInputs["entityId"] = args ? args.entityId : undefined;
            resourceInputs["extendedProperties"] = args ? args.extendedProperties : undefined;
            resourceInputs["licenseConnectionGroup"] = args ? args.licenseConnectionGroup : undefined;
            resourceInputs["loggingMode"] = args ? args.loggingMode : undefined;
            resourceInputs["metadataReloadSettings"] = args ? args.metadataReloadSettings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outboundProvision"] = args ? args.outboundProvision : undefined;
            resourceInputs["spBrowserSso"] = args ? args.spBrowserSso : undefined;
            resourceInputs["virtualEntityIds"] = args ? args.virtualEntityIds : undefined;
            resourceInputs["wsTrust"] = args ? args.wsTrust : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdpSpConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdpSpConnection resources.
 */
export interface IdpSpConnectionState {
    /**
     * Specifies whether the connection is active and ready to process incoming requests. The default value is false.
     */
    active?: pulumi.Input<boolean>;
    /**
     * Additional allowed entities or issuers configuration. Currently only used in OIDC IdP (RP) connection.
     */
    additionalAllowedEntitiesConfiguration?: pulumi.Input<inputs.IdpSpConnectionAdditionalAllowedEntitiesConfiguration>;
    /**
     * The application icon url.
     */
    applicationIconUrl?: pulumi.Input<string>;
    /**
     * The application name.
     */
    applicationName?: pulumi.Input<string>;
    /**
     * The attribute query profile supports SPs in requesting user attributes.
     */
    attributeQuery?: pulumi.Input<inputs.IdpSpConnectionAttributeQuery>;
    /**
     * The fully-qualified hostname and port on which your partner's federation deployment runs.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * The persistent, unique ID for the connection. It can be any combination of [a-zA-Z0-9._-].
     */
    connectionId?: pulumi.Input<string>;
    /**
     * The connection target type. This field is intended for bulk import/export usage. Changing its value may result in
     * unexpected behavior.
     */
    connectionTargetType?: pulumi.Input<string>;
    /**
     * Contact information.
     */
    contactInfo?: pulumi.Input<inputs.IdpSpConnectionContactInfo>;
    /**
     * The time at which the connection was created. This property is read only and is ignored on PUT and POST requests.
     */
    creationDate?: pulumi.Input<string>;
    /**
     * The certificates and settings for encryption, signing, and signature verification.
     */
    credentials?: pulumi.Input<inputs.IdpSpConnectionCredentials>;
    /**
     * The default alternate entity ID that identifies the local server to this partner. It is required when virtualEntityIds
     * is not empty and must be included in that list.
     */
    defaultVirtualEntityId?: pulumi.Input<string>;
    /**
     * The partner's entity ID (connection ID) or issuer value (for OIDC Connections).
     */
    entityId?: pulumi.Input<string>;
    /**
     * Extended Properties allows to store additional information for IdP/SP Connections. The names of these extended
     * properties should be defined in /extendedProperties.
     */
    extendedProperties?: pulumi.Input<{[key: string]: pulumi.Input<inputs.IdpSpConnectionExtendedProperties>}>;
    /**
     * The license connection group. If your PingFederate license is based on connection groups, each connection must be
     * assigned to a group before it can be used.
     */
    licenseConnectionGroup?: pulumi.Input<string>;
    /**
     * The level of transaction logging applicable for this connection. Default is STANDARD.
     */
    loggingMode?: pulumi.Input<string>;
    /**
     * Configuration settings to enable automatic reload of partner's metadata.
     */
    metadataReloadSettings?: pulumi.Input<inputs.IdpSpConnectionMetadataReloadSettings>;
    /**
     * The connection name.
     */
    name?: pulumi.Input<string>;
    /**
     * Outbound Provisioning allows an IdP to create and maintain user accounts at standards-based partner sites using SCIM as
     * well as select-proprietary provisioning partner sites that are protocol-enabled.
     */
    outboundProvision?: pulumi.Input<inputs.IdpSpConnectionOutboundProvision>;
    /**
     * The SAML settings used to enable secure browser-based SSO to resources at your partner's site.
     */
    spBrowserSso?: pulumi.Input<inputs.IdpSpConnectionSpBrowserSso>;
    /**
     * The type of this connection.
     */
    type?: pulumi.Input<string>;
    /**
     * List of alternate entity IDs that identifies the local server to this partner.
     */
    virtualEntityIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Ws-Trust STS provides security-token validation and creation to extend SSO access to identity-enabled Web Services
     */
    wsTrust?: pulumi.Input<inputs.IdpSpConnectionWsTrust>;
}

/**
 * The set of arguments for constructing a IdpSpConnection resource.
 */
export interface IdpSpConnectionArgs {
    /**
     * Specifies whether the connection is active and ready to process incoming requests. The default value is false.
     */
    active?: pulumi.Input<boolean>;
    /**
     * Additional allowed entities or issuers configuration. Currently only used in OIDC IdP (RP) connection.
     */
    additionalAllowedEntitiesConfiguration?: pulumi.Input<inputs.IdpSpConnectionAdditionalAllowedEntitiesConfiguration>;
    /**
     * The application icon url.
     */
    applicationIconUrl?: pulumi.Input<string>;
    /**
     * The application name.
     */
    applicationName?: pulumi.Input<string>;
    /**
     * The attribute query profile supports SPs in requesting user attributes.
     */
    attributeQuery?: pulumi.Input<inputs.IdpSpConnectionAttributeQuery>;
    /**
     * The fully-qualified hostname and port on which your partner's federation deployment runs.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * The persistent, unique ID for the connection. It can be any combination of [a-zA-Z0-9._-].
     */
    connectionId: pulumi.Input<string>;
    /**
     * The connection target type. This field is intended for bulk import/export usage. Changing its value may result in
     * unexpected behavior.
     */
    connectionTargetType?: pulumi.Input<string>;
    /**
     * Contact information.
     */
    contactInfo?: pulumi.Input<inputs.IdpSpConnectionContactInfo>;
    /**
     * The certificates and settings for encryption, signing, and signature verification.
     */
    credentials?: pulumi.Input<inputs.IdpSpConnectionCredentials>;
    /**
     * The default alternate entity ID that identifies the local server to this partner. It is required when virtualEntityIds
     * is not empty and must be included in that list.
     */
    defaultVirtualEntityId?: pulumi.Input<string>;
    /**
     * The partner's entity ID (connection ID) or issuer value (for OIDC Connections).
     */
    entityId: pulumi.Input<string>;
    /**
     * Extended Properties allows to store additional information for IdP/SP Connections. The names of these extended
     * properties should be defined in /extendedProperties.
     */
    extendedProperties?: pulumi.Input<{[key: string]: pulumi.Input<inputs.IdpSpConnectionExtendedProperties>}>;
    /**
     * The license connection group. If your PingFederate license is based on connection groups, each connection must be
     * assigned to a group before it can be used.
     */
    licenseConnectionGroup?: pulumi.Input<string>;
    /**
     * The level of transaction logging applicable for this connection. Default is STANDARD.
     */
    loggingMode?: pulumi.Input<string>;
    /**
     * Configuration settings to enable automatic reload of partner's metadata.
     */
    metadataReloadSettings?: pulumi.Input<inputs.IdpSpConnectionMetadataReloadSettings>;
    /**
     * The connection name.
     */
    name?: pulumi.Input<string>;
    /**
     * Outbound Provisioning allows an IdP to create and maintain user accounts at standards-based partner sites using SCIM as
     * well as select-proprietary provisioning partner sites that are protocol-enabled.
     */
    outboundProvision?: pulumi.Input<inputs.IdpSpConnectionOutboundProvision>;
    /**
     * The SAML settings used to enable secure browser-based SSO to resources at your partner's site.
     */
    spBrowserSso?: pulumi.Input<inputs.IdpSpConnectionSpBrowserSso>;
    /**
     * List of alternate entity IDs that identifies the local server to this partner.
     */
    virtualEntityIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Ws-Trust STS provides security-token validation and creation to extend SSO access to identity-enabled Web Services
     */
    wsTrust?: pulumi.Input<inputs.IdpSpConnectionWsTrust>;
}
