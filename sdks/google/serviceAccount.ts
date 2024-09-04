// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceAccount extends pulumi.CustomResource {
    /**
     * Get an existing ServiceAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceAccountState, opts?: pulumi.CustomResourceOptions): ServiceAccount {
        return new ServiceAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/serviceAccount:ServiceAccount';

    /**
     * Returns true if the given object is an instance of ServiceAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceAccount.__pulumiType;
    }

    /**
     * The account id that is used to generate the service account email address and a stable unique id. It is unique within a
     * project, must be 6-30 characters long, and match the regular expression a-z to comply with RFC1035. Changing this forces
     * a new service account to be created.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * If set to true, skip service account creation if a service account with the same email already exists.
     */
    public readonly createIgnoreAlreadyExists!: pulumi.Output<boolean | undefined>;
    /**
     * A text description of the service account. Must be less than or equal to 256 UTF-8 bytes.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether the service account is disabled. Defaults to false
     */
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * The display name for the service account. Can be updated without creating a new resource.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The e-mail address of the service account. This value should be referenced from any google.getIamPolicy data sources
     * that would grant the service account privileges.
     */
    public /*out*/ readonly email!: pulumi.Output<string>;
    /**
     * The Identity of the service account in the form 'serviceAccount:{email}'. This value is often used to refer to the
     * service account in order to grant IAM permissions.
     */
    public /*out*/ readonly member!: pulumi.Output<string>;
    /**
     * The fully-qualified name of the service account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The ID of the project that the service account will be created in. Defaults to the provider project configuration.
     */
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceAccountTimeouts | undefined>;
    /**
     * The unique id of the service account.
     */
    public /*out*/ readonly uniqueId!: pulumi.Output<string>;

    /**
     * Create a ServiceAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceAccountArgs | ServiceAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceAccountState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["createIgnoreAlreadyExists"] = state ? state.createIgnoreAlreadyExists : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["member"] = state ? state.member : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uniqueId"] = state ? state.uniqueId : undefined;
        } else {
            const args = argsOrState as ServiceAccountArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["createIgnoreAlreadyExists"] = args ? args.createIgnoreAlreadyExists : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["email"] = undefined /*out*/;
            resourceInputs["member"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceAccount resources.
 */
export interface ServiceAccountState {
    /**
     * The account id that is used to generate the service account email address and a stable unique id. It is unique within a
     * project, must be 6-30 characters long, and match the regular expression a-z to comply with RFC1035. Changing this forces
     * a new service account to be created.
     */
    accountId?: pulumi.Input<string>;
    /**
     * If set to true, skip service account creation if a service account with the same email already exists.
     */
    createIgnoreAlreadyExists?: pulumi.Input<boolean>;
    /**
     * A text description of the service account. Must be less than or equal to 256 UTF-8 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether the service account is disabled. Defaults to false
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The display name for the service account. Can be updated without creating a new resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The e-mail address of the service account. This value should be referenced from any google.getIamPolicy data sources
     * that would grant the service account privileges.
     */
    email?: pulumi.Input<string>;
    /**
     * The Identity of the service account in the form 'serviceAccount:{email}'. This value is often used to refer to the
     * service account in order to grant IAM permissions.
     */
    member?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the service account.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the project that the service account will be created in. Defaults to the provider project configuration.
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceAccountTimeouts>;
    /**
     * The unique id of the service account.
     */
    uniqueId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServiceAccount resource.
 */
export interface ServiceAccountArgs {
    /**
     * The account id that is used to generate the service account email address and a stable unique id. It is unique within a
     * project, must be 6-30 characters long, and match the regular expression a-z to comply with RFC1035. Changing this forces
     * a new service account to be created.
     */
    accountId: pulumi.Input<string>;
    /**
     * If set to true, skip service account creation if a service account with the same email already exists.
     */
    createIgnoreAlreadyExists?: pulumi.Input<boolean>;
    /**
     * A text description of the service account. Must be less than or equal to 256 UTF-8 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether the service account is disabled. Defaults to false
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The display name for the service account. Can be updated without creating a new resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The ID of the project that the service account will be created in. Defaults to the provider project configuration.
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceAccountTimeouts>;
}
