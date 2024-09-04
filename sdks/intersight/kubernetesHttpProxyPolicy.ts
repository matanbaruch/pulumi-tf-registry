// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KubernetesHttpProxyPolicy extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesHttpProxyPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesHttpProxyPolicyState, opts?: pulumi.CustomResourceOptions): KubernetesHttpProxyPolicy {
        return new KubernetesHttpProxyPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/kubernetesHttpProxyPolicy:KubernetesHttpProxyPolicy';

    /**
     * Returns true if the given object is an instance of KubernetesHttpProxyPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesHttpProxyPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesHttpProxyPolicy.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.KubernetesHttpProxyPolicyAncestor[]>;
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
     * Description of the policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The DomainGroup ID for this managed object.
     */
    public readonly domainGroupMoid!: pulumi.Output<string>;
    /**
     * The proxy configuration for HTTP communication.
     */
    public readonly httpProxies!: pulumi.Output<outputs.KubernetesHttpProxyPolicyHttpProxy[]>;
    /**
     * The proxy configuration for HTTPS communication.
     */
    public readonly httpsProxies!: pulumi.Output<outputs.KubernetesHttpProxyPolicyHttpsProxy[]>;
    /**
     * The time when this managed object was last modified.
     */
    public readonly modTime!: pulumi.Output<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    public readonly moid!: pulumi.Output<string>;
    /**
     * Name of the concrete policy.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly noProxies!: pulumi.Output<string[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    public readonly objectType!: pulumi.Output<string | undefined>;
    /**
     * A reference to a organizationOrganization resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly organizations!: pulumi.Output<outputs.KubernetesHttpProxyPolicyOrganization[]>;
    public readonly owners!: pulumi.Output<string[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.KubernetesHttpProxyPolicyParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.KubernetesHttpProxyPolicyPermissionResource[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.KubernetesHttpProxyPolicyTag[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.KubernetesHttpProxyPolicyVersionContext[]>;

    /**
     * Create a KubernetesHttpProxyPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: KubernetesHttpProxyPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesHttpProxyPolicyArgs | KubernetesHttpProxyPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KubernetesHttpProxyPolicyState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["httpProxies"] = state ? state.httpProxies : undefined;
            resourceInputs["httpsProxies"] = state ? state.httpsProxies : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["noProxies"] = state ? state.noProxies : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["organizations"] = state ? state.organizations : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as KubernetesHttpProxyPolicyArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["httpProxies"] = args ? args.httpProxies : undefined;
            resourceInputs["httpsProxies"] = args ? args.httpsProxies : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["noProxies"] = args ? args.noProxies : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["organizations"] = args ? args.organizations : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KubernetesHttpProxyPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KubernetesHttpProxyPolicy resources.
 */
export interface KubernetesHttpProxyPolicyState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyAncestor>[]>;
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
     * Description of the policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The proxy configuration for HTTP communication.
     */
    httpProxies?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyHttpProxy>[]>;
    /**
     * The proxy configuration for HTTPS communication.
     */
    httpsProxies?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyHttpsProxy>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name of the concrete policy.
     */
    name?: pulumi.Input<string>;
    noProxies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    /**
     * A reference to a organizationOrganization resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    organizations?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyOrganization>[]>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyPermissionResource>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyVersionContext>[]>;
}

/**
 * The set of arguments for constructing a KubernetesHttpProxyPolicy resource.
 */
export interface KubernetesHttpProxyPolicyArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyAncestor>[]>;
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
     * Description of the policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The proxy configuration for HTTP communication.
     */
    httpProxies?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyHttpProxy>[]>;
    /**
     * The proxy configuration for HTTPS communication.
     */
    httpsProxies?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyHttpsProxy>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name of the concrete policy.
     */
    name?: pulumi.Input<string>;
    noProxies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    /**
     * A reference to a organizationOrganization resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    organizations?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyOrganization>[]>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyPermissionResource>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.KubernetesHttpProxyPolicyVersionContext>[]>;
}
