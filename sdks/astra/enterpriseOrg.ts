// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class EnterpriseOrg extends pulumi.CustomResource {
    /**
     * Get an existing EnterpriseOrg resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnterpriseOrgState, opts?: pulumi.CustomResourceOptions): EnterpriseOrg {
        return new EnterpriseOrg(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'astra:index/enterpriseOrg:EnterpriseOrg';

    /**
     * Returns true if the given object is an instance of EnterpriseOrg.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnterpriseOrg {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnterpriseOrg.__pulumiType;
    }

    /**
     * UUID of the Astra user that will be the admin of the organization
     */
    public readonly adminUserId!: pulumi.Output<string>;
    /**
     * The timestamp when the organization was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Organization email address
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * UUID of the Enterprise under which the organization is created
     */
    public /*out*/ readonly enterpriseId!: pulumi.Output<string>;
    /**
     * The timestamp when the organization was last modified.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * Organization name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The group ID (UUID) of the organization.
     */
    public /*out*/ readonly organizationGroupId!: pulumi.Output<string>;
    /**
     * The Astra organization ID (UUID) for the created Enterprise organization.
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The type of the organization.
     */
    public /*out*/ readonly organizationType!: pulumi.Output<string>;

    /**
     * Create a EnterpriseOrg resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnterpriseOrgArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnterpriseOrgArgs | EnterpriseOrgState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnterpriseOrgState | undefined;
            resourceInputs["adminUserId"] = state ? state.adminUserId : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["enterpriseId"] = state ? state.enterpriseId : undefined;
            resourceInputs["lastModified"] = state ? state.lastModified : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationGroupId"] = state ? state.organizationGroupId : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["organizationType"] = state ? state.organizationType : undefined;
        } else {
            const args = argsOrState as EnterpriseOrgArgs | undefined;
            if ((!args || args.adminUserId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'adminUserId'");
            }
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            resourceInputs["adminUserId"] = args ? args.adminUserId : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["enterpriseId"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["organizationGroupId"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["organizationType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EnterpriseOrg.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EnterpriseOrg resources.
 */
export interface EnterpriseOrgState {
    /**
     * UUID of the Astra user that will be the admin of the organization
     */
    adminUserId?: pulumi.Input<string>;
    /**
     * The timestamp when the organization was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Organization email address
     */
    email?: pulumi.Input<string>;
    /**
     * UUID of the Enterprise under which the organization is created
     */
    enterpriseId?: pulumi.Input<string>;
    /**
     * The timestamp when the organization was last modified.
     */
    lastModified?: pulumi.Input<string>;
    /**
     * Organization name
     */
    name?: pulumi.Input<string>;
    /**
     * The group ID (UUID) of the organization.
     */
    organizationGroupId?: pulumi.Input<string>;
    /**
     * The Astra organization ID (UUID) for the created Enterprise organization.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The type of the organization.
     */
    organizationType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EnterpriseOrg resource.
 */
export interface EnterpriseOrgArgs {
    /**
     * UUID of the Astra user that will be the admin of the organization
     */
    adminUserId: pulumi.Input<string>;
    /**
     * Organization email address
     */
    email: pulumi.Input<string>;
    /**
     * Organization name
     */
    name?: pulumi.Input<string>;
}
