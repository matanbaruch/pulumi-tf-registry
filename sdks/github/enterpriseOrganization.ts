// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class EnterpriseOrganization extends pulumi.CustomResource {
    /**
     * Get an existing EnterpriseOrganization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnterpriseOrganizationState, opts?: pulumi.CustomResourceOptions): EnterpriseOrganization {
        return new EnterpriseOrganization(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/enterpriseOrganization:EnterpriseOrganization';

    /**
     * Returns true if the given object is an instance of EnterpriseOrganization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnterpriseOrganization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnterpriseOrganization.__pulumiType;
    }

    /**
     * List of organization owner usernames.
     */
    public readonly adminLogins!: pulumi.Output<string[]>;
    /**
     * The billing email address.
     */
    public readonly billingEmail!: pulumi.Output<string>;
    /**
     * The database ID of the organization.
     */
    public /*out*/ readonly databaseId!: pulumi.Output<number>;
    /**
     * The description of the organization.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the organization.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The ID of the enterprise.
     */
    public readonly enterpriseId!: pulumi.Output<string>;
    /**
     * The name of the organization.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a EnterpriseOrganization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnterpriseOrganizationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnterpriseOrganizationArgs | EnterpriseOrganizationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnterpriseOrganizationState | undefined;
            resourceInputs["adminLogins"] = state ? state.adminLogins : undefined;
            resourceInputs["billingEmail"] = state ? state.billingEmail : undefined;
            resourceInputs["databaseId"] = state ? state.databaseId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enterpriseId"] = state ? state.enterpriseId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as EnterpriseOrganizationArgs | undefined;
            if ((!args || args.adminLogins === undefined) && !opts.urn) {
                throw new Error("Missing required property 'adminLogins'");
            }
            if ((!args || args.billingEmail === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingEmail'");
            }
            if ((!args || args.enterpriseId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enterpriseId'");
            }
            resourceInputs["adminLogins"] = args ? args.adminLogins : undefined;
            resourceInputs["billingEmail"] = args ? args.billingEmail : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enterpriseId"] = args ? args.enterpriseId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["databaseId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EnterpriseOrganization.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EnterpriseOrganization resources.
 */
export interface EnterpriseOrganizationState {
    /**
     * List of organization owner usernames.
     */
    adminLogins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The billing email address.
     */
    billingEmail?: pulumi.Input<string>;
    /**
     * The database ID of the organization.
     */
    databaseId?: pulumi.Input<number>;
    /**
     * The description of the organization.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the organization.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The ID of the enterprise.
     */
    enterpriseId?: pulumi.Input<string>;
    /**
     * The name of the organization.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EnterpriseOrganization resource.
 */
export interface EnterpriseOrganizationArgs {
    /**
     * List of organization owner usernames.
     */
    adminLogins: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The billing email address.
     */
    billingEmail: pulumi.Input<string>;
    /**
     * The description of the organization.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the organization.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The ID of the enterprise.
     */
    enterpriseId: pulumi.Input<string>;
    /**
     * The name of the organization.
     */
    name?: pulumi.Input<string>;
}
