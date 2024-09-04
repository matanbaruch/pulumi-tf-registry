// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IdentityDomainsSocialIdentityProvider extends pulumi.CustomResource {
    /**
     * Get an existing IdentityDomainsSocialIdentityProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityDomainsSocialIdentityProviderState, opts?: pulumi.CustomResourceOptions): IdentityDomainsSocialIdentityProvider {
        return new IdentityDomainsSocialIdentityProvider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/identityDomainsSocialIdentityProvider:IdentityDomainsSocialIdentityProvider';

    /**
     * Returns true if the given object is an instance of IdentityDomainsSocialIdentityProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityDomainsSocialIdentityProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityDomainsSocialIdentityProvider.__pulumiType;
    }

    public readonly accessTokenUrl!: pulumi.Output<string>;
    public readonly accountLinkingEnabled!: pulumi.Output<boolean>;
    public readonly adminScopes!: pulumi.Output<string[]>;
    public readonly authorization!: pulumi.Output<string | undefined>;
    public readonly authzUrl!: pulumi.Output<string>;
    public readonly autoRedirectEnabled!: pulumi.Output<boolean>;
    public readonly clientCredentialInPayload!: pulumi.Output<boolean>;
    public readonly clockSkewInSeconds!: pulumi.Output<number>;
    public /*out*/ readonly compartmentOcid!: pulumi.Output<string>;
    public readonly consumerKey!: pulumi.Output<string>;
    public readonly consumerSecret!: pulumi.Output<string>;
    public /*out*/ readonly deleteInProgress!: pulumi.Output<boolean>;
    public readonly description!: pulumi.Output<string>;
    public readonly discoveryUrl!: pulumi.Output<string>;
    public /*out*/ readonly domainOcid!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean>;
    public readonly iconUrl!: pulumi.Output<string>;
    public readonly idAttribute!: pulumi.Output<string>;
    public /*out*/ readonly idcsCreatedBies!: pulumi.Output<outputs.IdentityDomainsSocialIdentityProviderIdcsCreatedBy[]>;
    public readonly idcsEndpoint!: pulumi.Output<string>;
    public /*out*/ readonly idcsLastModifiedBies!: pulumi.Output<outputs.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy[]>;
    public /*out*/ readonly idcsLastUpgradedInRelease!: pulumi.Output<string>;
    public /*out*/ readonly idcsPreventedOperations!: pulumi.Output<string[]>;
    public readonly jitProvAssignedGroups!: pulumi.Output<outputs.IdentityDomainsSocialIdentityProviderJitProvAssignedGroup[] | undefined>;
    public readonly jitProvGroupStaticListEnabled!: pulumi.Output<boolean>;
    public /*out*/ readonly metas!: pulumi.Output<outputs.IdentityDomainsSocialIdentityProviderMeta[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly ocid!: pulumi.Output<string>;
    public readonly profileUrl!: pulumi.Output<string>;
    public readonly redirectUrl!: pulumi.Output<string>;
    public readonly refreshTokenUrl!: pulumi.Output<string>;
    public readonly registrationEnabled!: pulumi.Output<boolean>;
    public readonly relayIdpParamMappings!: pulumi.Output<outputs.IdentityDomainsSocialIdentityProviderRelayIdpParamMapping[] | undefined>;
    public readonly resourceTypeSchemaVersion!: pulumi.Output<string | undefined>;
    public readonly schemas!: pulumi.Output<string[]>;
    public readonly scopes!: pulumi.Output<string[]>;
    public readonly serviceProviderName!: pulumi.Output<string>;
    public readonly showOnLogin!: pulumi.Output<boolean>;
    public readonly socialJitProvisioningEnabled!: pulumi.Output<boolean>;
    public readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.IdentityDomainsSocialIdentityProviderTag[] | undefined>;
    public /*out*/ readonly tenancyOcid!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.IdentityDomainsSocialIdentityProviderTimeouts | undefined>;

    /**
     * Create a IdentityDomainsSocialIdentityProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityDomainsSocialIdentityProviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityDomainsSocialIdentityProviderArgs | IdentityDomainsSocialIdentityProviderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityDomainsSocialIdentityProviderState | undefined;
            resourceInputs["accessTokenUrl"] = state ? state.accessTokenUrl : undefined;
            resourceInputs["accountLinkingEnabled"] = state ? state.accountLinkingEnabled : undefined;
            resourceInputs["adminScopes"] = state ? state.adminScopes : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["authzUrl"] = state ? state.authzUrl : undefined;
            resourceInputs["autoRedirectEnabled"] = state ? state.autoRedirectEnabled : undefined;
            resourceInputs["clientCredentialInPayload"] = state ? state.clientCredentialInPayload : undefined;
            resourceInputs["clockSkewInSeconds"] = state ? state.clockSkewInSeconds : undefined;
            resourceInputs["compartmentOcid"] = state ? state.compartmentOcid : undefined;
            resourceInputs["consumerKey"] = state ? state.consumerKey : undefined;
            resourceInputs["consumerSecret"] = state ? state.consumerSecret : undefined;
            resourceInputs["deleteInProgress"] = state ? state.deleteInProgress : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["discoveryUrl"] = state ? state.discoveryUrl : undefined;
            resourceInputs["domainOcid"] = state ? state.domainOcid : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["iconUrl"] = state ? state.iconUrl : undefined;
            resourceInputs["idAttribute"] = state ? state.idAttribute : undefined;
            resourceInputs["idcsCreatedBies"] = state ? state.idcsCreatedBies : undefined;
            resourceInputs["idcsEndpoint"] = state ? state.idcsEndpoint : undefined;
            resourceInputs["idcsLastModifiedBies"] = state ? state.idcsLastModifiedBies : undefined;
            resourceInputs["idcsLastUpgradedInRelease"] = state ? state.idcsLastUpgradedInRelease : undefined;
            resourceInputs["idcsPreventedOperations"] = state ? state.idcsPreventedOperations : undefined;
            resourceInputs["jitProvAssignedGroups"] = state ? state.jitProvAssignedGroups : undefined;
            resourceInputs["jitProvGroupStaticListEnabled"] = state ? state.jitProvGroupStaticListEnabled : undefined;
            resourceInputs["metas"] = state ? state.metas : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ocid"] = state ? state.ocid : undefined;
            resourceInputs["profileUrl"] = state ? state.profileUrl : undefined;
            resourceInputs["redirectUrl"] = state ? state.redirectUrl : undefined;
            resourceInputs["refreshTokenUrl"] = state ? state.refreshTokenUrl : undefined;
            resourceInputs["registrationEnabled"] = state ? state.registrationEnabled : undefined;
            resourceInputs["relayIdpParamMappings"] = state ? state.relayIdpParamMappings : undefined;
            resourceInputs["resourceTypeSchemaVersion"] = state ? state.resourceTypeSchemaVersion : undefined;
            resourceInputs["schemas"] = state ? state.schemas : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["serviceProviderName"] = state ? state.serviceProviderName : undefined;
            resourceInputs["showOnLogin"] = state ? state.showOnLogin : undefined;
            resourceInputs["socialJitProvisioningEnabled"] = state ? state.socialJitProvisioningEnabled : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tenancyOcid"] = state ? state.tenancyOcid : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IdentityDomainsSocialIdentityProviderArgs | undefined;
            if ((!args || args.accountLinkingEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountLinkingEnabled'");
            }
            if ((!args || args.consumerKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerKey'");
            }
            if ((!args || args.consumerSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerSecret'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.idcsEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'idcsEndpoint'");
            }
            if ((!args || args.registrationEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registrationEnabled'");
            }
            if ((!args || args.schemas === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemas'");
            }
            if ((!args || args.serviceProviderName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceProviderName'");
            }
            if ((!args || args.showOnLogin === undefined) && !opts.urn) {
                throw new Error("Missing required property 'showOnLogin'");
            }
            resourceInputs["accessTokenUrl"] = args ? args.accessTokenUrl : undefined;
            resourceInputs["accountLinkingEnabled"] = args ? args.accountLinkingEnabled : undefined;
            resourceInputs["adminScopes"] = args ? args.adminScopes : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["authzUrl"] = args ? args.authzUrl : undefined;
            resourceInputs["autoRedirectEnabled"] = args ? args.autoRedirectEnabled : undefined;
            resourceInputs["clientCredentialInPayload"] = args ? args.clientCredentialInPayload : undefined;
            resourceInputs["clockSkewInSeconds"] = args ? args.clockSkewInSeconds : undefined;
            resourceInputs["consumerKey"] = args ? args.consumerKey : undefined;
            resourceInputs["consumerSecret"] = args ? args.consumerSecret : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["discoveryUrl"] = args ? args.discoveryUrl : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["iconUrl"] = args ? args.iconUrl : undefined;
            resourceInputs["idAttribute"] = args ? args.idAttribute : undefined;
            resourceInputs["idcsEndpoint"] = args ? args.idcsEndpoint : undefined;
            resourceInputs["jitProvAssignedGroups"] = args ? args.jitProvAssignedGroups : undefined;
            resourceInputs["jitProvGroupStaticListEnabled"] = args ? args.jitProvGroupStaticListEnabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ocid"] = args ? args.ocid : undefined;
            resourceInputs["profileUrl"] = args ? args.profileUrl : undefined;
            resourceInputs["redirectUrl"] = args ? args.redirectUrl : undefined;
            resourceInputs["refreshTokenUrl"] = args ? args.refreshTokenUrl : undefined;
            resourceInputs["registrationEnabled"] = args ? args.registrationEnabled : undefined;
            resourceInputs["relayIdpParamMappings"] = args ? args.relayIdpParamMappings : undefined;
            resourceInputs["resourceTypeSchemaVersion"] = args ? args.resourceTypeSchemaVersion : undefined;
            resourceInputs["schemas"] = args ? args.schemas : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["serviceProviderName"] = args ? args.serviceProviderName : undefined;
            resourceInputs["showOnLogin"] = args ? args.showOnLogin : undefined;
            resourceInputs["socialJitProvisioningEnabled"] = args ? args.socialJitProvisioningEnabled : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["compartmentOcid"] = undefined /*out*/;
            resourceInputs["deleteInProgress"] = undefined /*out*/;
            resourceInputs["domainOcid"] = undefined /*out*/;
            resourceInputs["idcsCreatedBies"] = undefined /*out*/;
            resourceInputs["idcsLastModifiedBies"] = undefined /*out*/;
            resourceInputs["idcsLastUpgradedInRelease"] = undefined /*out*/;
            resourceInputs["idcsPreventedOperations"] = undefined /*out*/;
            resourceInputs["metas"] = undefined /*out*/;
            resourceInputs["tenancyOcid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityDomainsSocialIdentityProvider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityDomainsSocialIdentityProvider resources.
 */
export interface IdentityDomainsSocialIdentityProviderState {
    accessTokenUrl?: pulumi.Input<string>;
    accountLinkingEnabled?: pulumi.Input<boolean>;
    adminScopes?: pulumi.Input<pulumi.Input<string>[]>;
    authorization?: pulumi.Input<string>;
    authzUrl?: pulumi.Input<string>;
    autoRedirectEnabled?: pulumi.Input<boolean>;
    clientCredentialInPayload?: pulumi.Input<boolean>;
    clockSkewInSeconds?: pulumi.Input<number>;
    compartmentOcid?: pulumi.Input<string>;
    consumerKey?: pulumi.Input<string>;
    consumerSecret?: pulumi.Input<string>;
    deleteInProgress?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    discoveryUrl?: pulumi.Input<string>;
    domainOcid?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    iconUrl?: pulumi.Input<string>;
    idAttribute?: pulumi.Input<string>;
    idcsCreatedBies?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderIdcsCreatedBy>[]>;
    idcsEndpoint?: pulumi.Input<string>;
    idcsLastModifiedBies?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy>[]>;
    idcsLastUpgradedInRelease?: pulumi.Input<string>;
    idcsPreventedOperations?: pulumi.Input<pulumi.Input<string>[]>;
    jitProvAssignedGroups?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderJitProvAssignedGroup>[]>;
    jitProvGroupStaticListEnabled?: pulumi.Input<boolean>;
    metas?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderMeta>[]>;
    name?: pulumi.Input<string>;
    ocid?: pulumi.Input<string>;
    profileUrl?: pulumi.Input<string>;
    redirectUrl?: pulumi.Input<string>;
    refreshTokenUrl?: pulumi.Input<string>;
    registrationEnabled?: pulumi.Input<boolean>;
    relayIdpParamMappings?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderRelayIdpParamMapping>[]>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    schemas?: pulumi.Input<pulumi.Input<string>[]>;
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    serviceProviderName?: pulumi.Input<string>;
    showOnLogin?: pulumi.Input<boolean>;
    socialJitProvisioningEnabled?: pulumi.Input<boolean>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderTag>[]>;
    tenancyOcid?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderTimeouts>;
}

/**
 * The set of arguments for constructing a IdentityDomainsSocialIdentityProvider resource.
 */
export interface IdentityDomainsSocialIdentityProviderArgs {
    accessTokenUrl?: pulumi.Input<string>;
    accountLinkingEnabled: pulumi.Input<boolean>;
    adminScopes?: pulumi.Input<pulumi.Input<string>[]>;
    authorization?: pulumi.Input<string>;
    authzUrl?: pulumi.Input<string>;
    autoRedirectEnabled?: pulumi.Input<boolean>;
    clientCredentialInPayload?: pulumi.Input<boolean>;
    clockSkewInSeconds?: pulumi.Input<number>;
    consumerKey: pulumi.Input<string>;
    consumerSecret: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    discoveryUrl?: pulumi.Input<string>;
    enabled: pulumi.Input<boolean>;
    iconUrl?: pulumi.Input<string>;
    idAttribute?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    jitProvAssignedGroups?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderJitProvAssignedGroup>[]>;
    jitProvGroupStaticListEnabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    ocid?: pulumi.Input<string>;
    profileUrl?: pulumi.Input<string>;
    redirectUrl?: pulumi.Input<string>;
    refreshTokenUrl?: pulumi.Input<string>;
    registrationEnabled: pulumi.Input<boolean>;
    relayIdpParamMappings?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderRelayIdpParamMapping>[]>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    schemas: pulumi.Input<pulumi.Input<string>[]>;
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    serviceProviderName: pulumi.Input<string>;
    showOnLogin: pulumi.Input<boolean>;
    socialJitProvisioningEnabled?: pulumi.Input<boolean>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderTag>[]>;
    timeouts?: pulumi.Input<inputs.IdentityDomainsSocialIdentityProviderTimeouts>;
}
