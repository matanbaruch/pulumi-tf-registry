// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IamCertificateRequest extends pulumi.CustomResource {
    /**
     * Get an existing IamCertificateRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamCertificateRequestState, opts?: pulumi.CustomResourceOptions): IamCertificateRequest {
        return new IamCertificateRequest(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/iamCertificateRequest:IamCertificateRequest';

    /**
     * Returns true if the given object is an instance of IamCertificateRequest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamCertificateRequest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamCertificateRequest.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly accounts!: pulumi.Output<outputs.IamCertificateRequestAccount[]>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.IamCertificateRequestAncestor[]>;
    /**
     * A reference to a iamCertificate resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly certificates!: pulumi.Output<outputs.IamCertificateRequestCertificate[]>;
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
     * User input email address, an optional part of the subject of the certificate request.
     */
    public readonly emailAddress!: pulumi.Output<string | undefined>;
    /**
     * The time when this managed object was last modified.
     */
    public readonly modTime!: pulumi.Output<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    public readonly moid!: pulumi.Output<string>;
    /**
     * Name of the certificate request.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    public readonly objectType!: pulumi.Output<string | undefined>;
    public readonly owners!: pulumi.Output<string[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.IamCertificateRequestParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.IamCertificateRequestPermissionResource[]>;
    /**
     * A reference to a iamPrivateKeySpec resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly privateKeySpecs!: pulumi.Output<outputs.IamCertificateRequestPrivateKeySpec[]>;
    /**
     * Generated certificate signing request (CSR) in PEM format.
     */
    public readonly request!: pulumi.Output<string>;
    /**
     * Whether the user wants the generated CSR to be self-signed by the appliance.
     */
    public readonly selfSigned!: pulumi.Output<boolean | undefined>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    /**
     * The x.509 subject alternate name values of the certificate request.
     */
    public readonly subjectAlternateNames!: pulumi.Output<outputs.IamCertificateRequestSubjectAlternateName[]>;
    /**
     * The x.509 distinguished name of the subject of the certificate request.
     */
    public readonly subjects!: pulumi.Output<outputs.IamCertificateRequestSubject[]>;
    public readonly tags!: pulumi.Output<outputs.IamCertificateRequestTag[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.IamCertificateRequestVersionContext[]>;

    /**
     * Create a IamCertificateRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IamCertificateRequestArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamCertificateRequestArgs | IamCertificateRequestState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamCertificateRequestState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["accounts"] = state ? state.accounts : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["certificates"] = state ? state.certificates : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["emailAddress"] = state ? state.emailAddress : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["privateKeySpecs"] = state ? state.privateKeySpecs : undefined;
            resourceInputs["request"] = state ? state.request : undefined;
            resourceInputs["selfSigned"] = state ? state.selfSigned : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["subjectAlternateNames"] = state ? state.subjectAlternateNames : undefined;
            resourceInputs["subjects"] = state ? state.subjects : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as IamCertificateRequestArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["accounts"] = args ? args.accounts : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["certificates"] = args ? args.certificates : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["emailAddress"] = args ? args.emailAddress : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["privateKeySpecs"] = args ? args.privateKeySpecs : undefined;
            resourceInputs["request"] = args ? args.request : undefined;
            resourceInputs["selfSigned"] = args ? args.selfSigned : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["subjectAlternateNames"] = args ? args.subjectAlternateNames : undefined;
            resourceInputs["subjects"] = args ? args.subjects : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamCertificateRequest.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamCertificateRequest resources.
 */
export interface IamCertificateRequestState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    accounts?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestAccount>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestAncestor>[]>;
    /**
     * A reference to a iamCertificate resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    certificates?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestCertificate>[]>;
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
     * User input email address, an optional part of the subject of the certificate request.
     */
    emailAddress?: pulumi.Input<string>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name of the certificate request.
     */
    name?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestPermissionResource>[]>;
    /**
     * A reference to a iamPrivateKeySpec resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    privateKeySpecs?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestPrivateKeySpec>[]>;
    /**
     * Generated certificate signing request (CSR) in PEM format.
     */
    request?: pulumi.Input<string>;
    /**
     * Whether the user wants the generated CSR to be self-signed by the appliance.
     */
    selfSigned?: pulumi.Input<boolean>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * The x.509 subject alternate name values of the certificate request.
     */
    subjectAlternateNames?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestSubjectAlternateName>[]>;
    /**
     * The x.509 distinguished name of the subject of the certificate request.
     */
    subjects?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestSubject>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestVersionContext>[]>;
}

/**
 * The set of arguments for constructing a IamCertificateRequest resource.
 */
export interface IamCertificateRequestArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    accounts?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestAccount>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestAncestor>[]>;
    /**
     * A reference to a iamCertificate resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    certificates?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestCertificate>[]>;
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
     * User input email address, an optional part of the subject of the certificate request.
     */
    emailAddress?: pulumi.Input<string>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name of the certificate request.
     */
    name?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestPermissionResource>[]>;
    /**
     * A reference to a iamPrivateKeySpec resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    privateKeySpecs?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestPrivateKeySpec>[]>;
    /**
     * Generated certificate signing request (CSR) in PEM format.
     */
    request?: pulumi.Input<string>;
    /**
     * Whether the user wants the generated CSR to be self-signed by the appliance.
     */
    selfSigned?: pulumi.Input<boolean>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * The x.509 subject alternate name values of the certificate request.
     */
    subjectAlternateNames?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestSubjectAlternateName>[]>;
    /**
     * The x.509 distinguished name of the subject of the certificate request.
     */
    subjects?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestSubject>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.IamCertificateRequestVersionContext>[]>;
}
