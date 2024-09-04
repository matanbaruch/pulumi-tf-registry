// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IncidentRole extends pulumi.CustomResource {
    /**
     * Get an existing IncidentRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IncidentRoleState, opts?: pulumi.CustomResourceOptions): IncidentRole {
        return new IncidentRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'incident:index/incidentRole:IncidentRole';

    /**
     * Returns true if the given object is an instance of IncidentRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IncidentRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IncidentRole.__pulumiType;
    }

    /**
     * Describes the purpose of the role
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.
     */
    public readonly instructions!: pulumi.Output<string>;
    /**
     * Human readable name of the incident role
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Short human readable name for Slack. Note that this will be empty for the 'reporter' role.
     */
    public readonly shortform!: pulumi.Output<string>;

    /**
     * Create a IncidentRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IncidentRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IncidentRoleArgs | IncidentRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IncidentRoleState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["instructions"] = state ? state.instructions : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["shortform"] = state ? state.shortform : undefined;
        } else {
            const args = argsOrState as IncidentRoleArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.instructions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instructions'");
            }
            if ((!args || args.shortform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shortform'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["instructions"] = args ? args.instructions : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["shortform"] = args ? args.shortform : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IncidentRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IncidentRole resources.
 */
export interface IncidentRoleState {
    /**
     * Describes the purpose of the role
     */
    description?: pulumi.Input<string>;
    /**
     * Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.
     */
    instructions?: pulumi.Input<string>;
    /**
     * Human readable name of the incident role
     */
    name?: pulumi.Input<string>;
    /**
     * Short human readable name for Slack. Note that this will be empty for the 'reporter' role.
     */
    shortform?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IncidentRole resource.
 */
export interface IncidentRoleArgs {
    /**
     * Describes the purpose of the role
     */
    description: pulumi.Input<string>;
    /**
     * Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.
     */
    instructions: pulumi.Input<string>;
    /**
     * Human readable name of the incident role
     */
    name?: pulumi.Input<string>;
    /**
     * Short human readable name for Slack. Note that this will be empty for the 'reporter' role.
     */
    shortform: pulumi.Input<string>;
}
