// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ChildOrganization extends pulumi.CustomResource {
    /**
     * Get an existing ChildOrganization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChildOrganizationState, opts?: pulumi.CustomResourceOptions): ChildOrganization {
        return new ChildOrganization(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'datadog:index/childOrganization:ChildOrganization';

    /**
     * Returns true if the given object is an instance of ChildOrganization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ChildOrganization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ChildOrganization.__pulumiType;
    }

    /**
     * Datadog API key.
     */
    public /*out*/ readonly apiKeys!: pulumi.Output<outputs.ChildOrganizationApiKey[]>;
    /**
     * An application key with its associated metadata.
     */
    public /*out*/ readonly applicationKeys!: pulumi.Output<outputs.ChildOrganizationApplicationKey[]>;
    /**
     * Description of the organization.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * Name for Child Organization after creation.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The `public_id` of the organization you are operating within.
     */
    public /*out*/ readonly publicId!: pulumi.Output<string>;
    /**
     * Organization settings
     */
    public /*out*/ readonly settings!: pulumi.Output<outputs.ChildOrganizationSetting[]>;
    /**
     * Information about a user
     */
    public /*out*/ readonly users!: pulumi.Output<outputs.ChildOrganizationUser[]>;

    /**
     * Create a ChildOrganization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ChildOrganizationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ChildOrganizationArgs | ChildOrganizationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ChildOrganizationState | undefined;
            resourceInputs["apiKeys"] = state ? state.apiKeys : undefined;
            resourceInputs["applicationKeys"] = state ? state.applicationKeys : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["publicId"] = state ? state.publicId : undefined;
            resourceInputs["settings"] = state ? state.settings : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
        } else {
            const args = argsOrState as ChildOrganizationArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["apiKeys"] = undefined /*out*/;
            resourceInputs["applicationKeys"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["publicId"] = undefined /*out*/;
            resourceInputs["settings"] = undefined /*out*/;
            resourceInputs["users"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ChildOrganization.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ChildOrganization resources.
 */
export interface ChildOrganizationState {
    /**
     * Datadog API key.
     */
    apiKeys?: pulumi.Input<pulumi.Input<inputs.ChildOrganizationApiKey>[]>;
    /**
     * An application key with its associated metadata.
     */
    applicationKeys?: pulumi.Input<pulumi.Input<inputs.ChildOrganizationApplicationKey>[]>;
    /**
     * Description of the organization.
     */
    description?: pulumi.Input<string>;
    /**
     * Name for Child Organization after creation.
     */
    name?: pulumi.Input<string>;
    /**
     * The `public_id` of the organization you are operating within.
     */
    publicId?: pulumi.Input<string>;
    /**
     * Organization settings
     */
    settings?: pulumi.Input<pulumi.Input<inputs.ChildOrganizationSetting>[]>;
    /**
     * Information about a user
     */
    users?: pulumi.Input<pulumi.Input<inputs.ChildOrganizationUser>[]>;
}

/**
 * The set of arguments for constructing a ChildOrganization resource.
 */
export interface ChildOrganizationArgs {
    /**
     * Name for Child Organization after creation.
     */
    name?: pulumi.Input<string>;
}
