// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IamDomainNameInfo extends pulumi.CustomResource {
    /**
     * Get an existing IamDomainNameInfo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamDomainNameInfoState, opts?: pulumi.CustomResourceOptions): IamDomainNameInfo {
        return new IamDomainNameInfo(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/iamDomainNameInfo:IamDomainNameInfo';

    /**
     * Returns true if the given object is an instance of IamDomainNameInfo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamDomainNameInfo {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamDomainNameInfo.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly accounts!: pulumi.Output<outputs.IamDomainNameInfoAccount[]>;
    /**
     * Regenerate TXT record and validate TXT record. * `generate` - Generate TXT record for domain name ownership validation.
     * * `verify` - Verify TXT record for domain name ownership validation.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.IamDomainNameInfoAncestor[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    public readonly classId!: pulumi.Output<string | undefined>;
    /**
     * The time when this managed object was created.
     */
    public readonly createTime!: pulumi.Output<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    public readonly domainGroupMoid!: pulumi.Output<string>;
    /**
     * Email domain name. When a user enters an email during login in the Intersight home page, the IdP is picked by matching
     * this domain name with the email domain name for authentication.
     */
    public readonly domainName!: pulumi.Output<string | undefined>;
    /**
     * Reason for the failure during verification.
     */
    public readonly failureDetails!: pulumi.Output<outputs.IamDomainNameInfoFailureDetail[]>;
    /**
     * The time when this managed object was last modified.
     */
    public readonly modTime!: pulumi.Output<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    public readonly moid!: pulumi.Output<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    public readonly objectType!: pulumi.Output<string | undefined>;
    public readonly owners!: pulumi.Output<string[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.IamDomainNameInfoParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.IamDomainNameInfoPermissionResource[]>;
    /**
     * Expiration time of TXT Record.
     */
    public readonly recordExpiryTime!: pulumi.Output<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    /**
     * Status of Domain Ownership Verification. * `Pending` - Domain verification is pending. * `Failed` - Domain verification
     * failed. Re-generate token and verify. * `Verified` - Domain verification succeeded. * `Expired` - TXT Record for Domain
     * verification expired.
     */
    public readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.IamDomainNameInfoTag[]>;
    /**
     * Resource record used to verify Domain Ownership. Users need to verify the domain by adding the TXT Record in their DNS
     * Host.
     */
    public readonly txtRecord!: pulumi.Output<string>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.IamDomainNameInfoVersionContext[]>;

    /**
     * Create a IamDomainNameInfo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IamDomainNameInfoArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamDomainNameInfoArgs | IamDomainNameInfoState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamDomainNameInfoState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["accounts"] = state ? state.accounts : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["failureDetails"] = state ? state.failureDetails : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["recordExpiryTime"] = state ? state.recordExpiryTime : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["txtRecord"] = state ? state.txtRecord : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as IamDomainNameInfoArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["accounts"] = args ? args.accounts : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["failureDetails"] = args ? args.failureDetails : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["recordExpiryTime"] = args ? args.recordExpiryTime : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["txtRecord"] = args ? args.txtRecord : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamDomainNameInfo.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamDomainNameInfo resources.
 */
export interface IamDomainNameInfoState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    accounts?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoAccount>[]>;
    /**
     * Regenerate TXT record and validate TXT record. * `generate` - Generate TXT record for domain name ownership validation.
     * * `verify` - Verify TXT record for domain name ownership validation.
     */
    action?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoAncestor>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * Email domain name. When a user enters an email during login in the Intersight home page, the IdP is picked by matching
     * this domain name with the email domain name for authentication.
     */
    domainName?: pulumi.Input<string>;
    /**
     * Reason for the failure during verification.
     */
    failureDetails?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoFailureDetail>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoPermissionResource>[]>;
    /**
     * Expiration time of TXT Record.
     */
    recordExpiryTime?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * Status of Domain Ownership Verification. * `Pending` - Domain verification is pending. * `Failed` - Domain verification
     * failed. Re-generate token and verify. * `Verified` - Domain verification succeeded. * `Expired` - TXT Record for Domain
     * verification expired.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoTag>[]>;
    /**
     * Resource record used to verify Domain Ownership. Users need to verify the domain by adding the TXT Record in their DNS
     * Host.
     */
    txtRecord?: pulumi.Input<string>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoVersionContext>[]>;
}

/**
 * The set of arguments for constructing a IamDomainNameInfo resource.
 */
export interface IamDomainNameInfoArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    accounts?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoAccount>[]>;
    /**
     * Regenerate TXT record and validate TXT record. * `generate` - Generate TXT record for domain name ownership validation.
     * * `verify` - Verify TXT record for domain name ownership validation.
     */
    action?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoAncestor>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * Email domain name. When a user enters an email during login in the Intersight home page, the IdP is picked by matching
     * this domain name with the email domain name for authentication.
     */
    domainName?: pulumi.Input<string>;
    /**
     * Reason for the failure during verification.
     */
    failureDetails?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoFailureDetail>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoPermissionResource>[]>;
    /**
     * Expiration time of TXT Record.
     */
    recordExpiryTime?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * Status of Domain Ownership Verification. * `Pending` - Domain verification is pending. * `Failed` - Domain verification
     * failed. Re-generate token and verify. * `Verified` - Domain verification succeeded. * `Expired` - TXT Record for Domain
     * verification expired.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoTag>[]>;
    /**
     * Resource record used to verify Domain Ownership. Users need to verify the domain by adding the TXT Record in their DNS
     * Host.
     */
    txtRecord?: pulumi.Input<string>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.IamDomainNameInfoVersionContext>[]>;
}
