// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OrganizationsAccount extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationsAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationsAccountState, opts?: pulumi.CustomResourceOptions): OrganizationsAccount {
        return new OrganizationsAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/organizationsAccount:OrganizationsAccount';

    /**
     * Returns true if the given object is an instance of OrganizationsAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationsAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationsAccount.__pulumiType;
    }

    /**
     * If the account was created successfully, the unique identifier (ID) of the new account.
     */
    public /*out*/ readonly accountId!: pulumi.Output<string>;
    /**
     * The friendly name of the member account.
     */
    public readonly accountName!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the account.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The email address of the owner to assign to the new member account.
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * The method by which the account joined the organization.
     */
    public /*out*/ readonly joinedMethod!: pulumi.Output<string>;
    /**
     * The date the account became a part of the organization.
     */
    public /*out*/ readonly joinedTimestamp!: pulumi.Output<string>;
    /**
     * List of parent nodes for the member account. Currently only one parent at a time is supported. Default is root.
     */
    public readonly parentIds!: pulumi.Output<string[]>;
    /**
     * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. Default name is
     * OrganizationAccountAccessRole if not specified.
     */
    public readonly roleName!: pulumi.Output<string>;
    /**
     * The status of the account in the organization.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a
     * tag key and a value.
     */
    public readonly tags!: pulumi.Output<outputs.OrganizationsAccountTag[]>;

    /**
     * Create a OrganizationsAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationsAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationsAccountArgs | OrganizationsAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationsAccountState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["accountName"] = state ? state.accountName : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["joinedMethod"] = state ? state.joinedMethod : undefined;
            resourceInputs["joinedTimestamp"] = state ? state.joinedTimestamp : undefined;
            resourceInputs["parentIds"] = state ? state.parentIds : undefined;
            resourceInputs["roleName"] = state ? state.roleName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as OrganizationsAccountArgs | undefined;
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["parentIds"] = args ? args.parentIds : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["joinedMethod"] = undefined /*out*/;
            resourceInputs["joinedTimestamp"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationsAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationsAccount resources.
 */
export interface OrganizationsAccountState {
    /**
     * If the account was created successfully, the unique identifier (ID) of the new account.
     */
    accountId?: pulumi.Input<string>;
    /**
     * The friendly name of the member account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the account.
     */
    arn?: pulumi.Input<string>;
    /**
     * The email address of the owner to assign to the new member account.
     */
    email?: pulumi.Input<string>;
    /**
     * The method by which the account joined the organization.
     */
    joinedMethod?: pulumi.Input<string>;
    /**
     * The date the account became a part of the organization.
     */
    joinedTimestamp?: pulumi.Input<string>;
    /**
     * List of parent nodes for the member account. Currently only one parent at a time is supported. Default is root.
     */
    parentIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. Default name is
     * OrganizationAccountAccessRole if not specified.
     */
    roleName?: pulumi.Input<string>;
    /**
     * The status of the account in the organization.
     */
    status?: pulumi.Input<string>;
    /**
     * A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a
     * tag key and a value.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.OrganizationsAccountTag>[]>;
}

/**
 * The set of arguments for constructing a OrganizationsAccount resource.
 */
export interface OrganizationsAccountArgs {
    /**
     * The friendly name of the member account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The email address of the owner to assign to the new member account.
     */
    email: pulumi.Input<string>;
    /**
     * List of parent nodes for the member account. Currently only one parent at a time is supported. Default is root.
     */
    parentIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. Default name is
     * OrganizationAccountAccessRole if not specified.
     */
    roleName?: pulumi.Input<string>;
    /**
     * A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a
     * tag key and a value.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.OrganizationsAccountTag>[]>;
}
