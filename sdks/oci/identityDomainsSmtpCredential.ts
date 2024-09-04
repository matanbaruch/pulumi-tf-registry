// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IdentityDomainsSmtpCredential extends pulumi.CustomResource {
    /**
     * Get an existing IdentityDomainsSmtpCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityDomainsSmtpCredentialState, opts?: pulumi.CustomResourceOptions): IdentityDomainsSmtpCredential {
        return new IdentityDomainsSmtpCredential(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/identityDomainsSmtpCredential:IdentityDomainsSmtpCredential';

    /**
     * Returns true if the given object is an instance of IdentityDomainsSmtpCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityDomainsSmtpCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityDomainsSmtpCredential.__pulumiType;
    }

    public readonly attributeSets!: pulumi.Output<string[] | undefined>;
    public readonly attributes!: pulumi.Output<string | undefined>;
    public readonly authorization!: pulumi.Output<string | undefined>;
    public /*out*/ readonly compartmentOcid!: pulumi.Output<string>;
    public /*out*/ readonly deleteInProgress!: pulumi.Output<boolean>;
    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly domainOcid!: pulumi.Output<string>;
    public readonly expiresOn!: pulumi.Output<string>;
    public /*out*/ readonly idcsCreatedBies!: pulumi.Output<outputs.IdentityDomainsSmtpCredentialIdcsCreatedBy[]>;
    public readonly idcsEndpoint!: pulumi.Output<string>;
    public /*out*/ readonly idcsLastModifiedBies!: pulumi.Output<outputs.IdentityDomainsSmtpCredentialIdcsLastModifiedBy[]>;
    public /*out*/ readonly idcsLastUpgradedInRelease!: pulumi.Output<string>;
    public /*out*/ readonly idcsPreventedOperations!: pulumi.Output<string[]>;
    public /*out*/ readonly metas!: pulumi.Output<outputs.IdentityDomainsSmtpCredentialMeta[]>;
    public readonly ocid!: pulumi.Output<string>;
    public readonly resourceTypeSchemaVersion!: pulumi.Output<string | undefined>;
    public readonly schemas!: pulumi.Output<string[]>;
    public readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.IdentityDomainsSmtpCredentialTag[] | undefined>;
    public /*out*/ readonly tenancyOcid!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.IdentityDomainsSmtpCredentialTimeouts | undefined>;
    public readonly urnietfparamsscimschemasoracleidcsextensionselfChangeUser!: pulumi.Output<outputs.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser | undefined>;
    public readonly user!: pulumi.Output<outputs.IdentityDomainsSmtpCredentialUser | undefined>;
    public /*out*/ readonly userName!: pulumi.Output<string>;

    /**
     * Create a IdentityDomainsSmtpCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityDomainsSmtpCredentialArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityDomainsSmtpCredentialArgs | IdentityDomainsSmtpCredentialState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityDomainsSmtpCredentialState | undefined;
            resourceInputs["attributeSets"] = state ? state.attributeSets : undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["compartmentOcid"] = state ? state.compartmentOcid : undefined;
            resourceInputs["deleteInProgress"] = state ? state.deleteInProgress : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["domainOcid"] = state ? state.domainOcid : undefined;
            resourceInputs["expiresOn"] = state ? state.expiresOn : undefined;
            resourceInputs["idcsCreatedBies"] = state ? state.idcsCreatedBies : undefined;
            resourceInputs["idcsEndpoint"] = state ? state.idcsEndpoint : undefined;
            resourceInputs["idcsLastModifiedBies"] = state ? state.idcsLastModifiedBies : undefined;
            resourceInputs["idcsLastUpgradedInRelease"] = state ? state.idcsLastUpgradedInRelease : undefined;
            resourceInputs["idcsPreventedOperations"] = state ? state.idcsPreventedOperations : undefined;
            resourceInputs["metas"] = state ? state.metas : undefined;
            resourceInputs["ocid"] = state ? state.ocid : undefined;
            resourceInputs["resourceTypeSchemaVersion"] = state ? state.resourceTypeSchemaVersion : undefined;
            resourceInputs["schemas"] = state ? state.schemas : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tenancyOcid"] = state ? state.tenancyOcid : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["urnietfparamsscimschemasoracleidcsextensionselfChangeUser"] = state ? state.urnietfparamsscimschemasoracleidcsextensionselfChangeUser : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
        } else {
            const args = argsOrState as IdentityDomainsSmtpCredentialArgs | undefined;
            if ((!args || args.idcsEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'idcsEndpoint'");
            }
            if ((!args || args.schemas === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemas'");
            }
            resourceInputs["attributeSets"] = args ? args.attributeSets : undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["expiresOn"] = args ? args.expiresOn : undefined;
            resourceInputs["idcsEndpoint"] = args ? args.idcsEndpoint : undefined;
            resourceInputs["ocid"] = args ? args.ocid : undefined;
            resourceInputs["resourceTypeSchemaVersion"] = args ? args.resourceTypeSchemaVersion : undefined;
            resourceInputs["schemas"] = args ? args.schemas : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["urnietfparamsscimschemasoracleidcsextensionselfChangeUser"] = args ? args.urnietfparamsscimschemasoracleidcsextensionselfChangeUser : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["compartmentOcid"] = undefined /*out*/;
            resourceInputs["deleteInProgress"] = undefined /*out*/;
            resourceInputs["domainOcid"] = undefined /*out*/;
            resourceInputs["idcsCreatedBies"] = undefined /*out*/;
            resourceInputs["idcsLastModifiedBies"] = undefined /*out*/;
            resourceInputs["idcsLastUpgradedInRelease"] = undefined /*out*/;
            resourceInputs["idcsPreventedOperations"] = undefined /*out*/;
            resourceInputs["metas"] = undefined /*out*/;
            resourceInputs["tenancyOcid"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityDomainsSmtpCredential.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityDomainsSmtpCredential resources.
 */
export interface IdentityDomainsSmtpCredentialState {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    compartmentOcid?: pulumi.Input<string>;
    deleteInProgress?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    domainOcid?: pulumi.Input<string>;
    expiresOn?: pulumi.Input<string>;
    idcsCreatedBies?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSmtpCredentialIdcsCreatedBy>[]>;
    idcsEndpoint?: pulumi.Input<string>;
    idcsLastModifiedBies?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSmtpCredentialIdcsLastModifiedBy>[]>;
    idcsLastUpgradedInRelease?: pulumi.Input<string>;
    idcsPreventedOperations?: pulumi.Input<pulumi.Input<string>[]>;
    metas?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSmtpCredentialMeta>[]>;
    ocid?: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    schemas?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSmtpCredentialTag>[]>;
    tenancyOcid?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentityDomainsSmtpCredentialTimeouts>;
    urnietfparamsscimschemasoracleidcsextensionselfChangeUser?: pulumi.Input<inputs.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser>;
    user?: pulumi.Input<inputs.IdentityDomainsSmtpCredentialUser>;
    userName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdentityDomainsSmtpCredential resource.
 */
export interface IdentityDomainsSmtpCredentialArgs {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    expiresOn?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    ocid?: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    schemas: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IdentityDomainsSmtpCredentialTag>[]>;
    timeouts?: pulumi.Input<inputs.IdentityDomainsSmtpCredentialTimeouts>;
    urnietfparamsscimschemasoracleidcsextensionselfChangeUser?: pulumi.Input<inputs.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser>;
    user?: pulumi.Input<inputs.IdentityDomainsSmtpCredentialUser>;
}
