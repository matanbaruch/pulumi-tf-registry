// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Population extends pulumi.CustomResource {
    /**
     * Get an existing Population resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PopulationState, opts?: pulumi.CustomResourceOptions): Population {
        return new Population(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/population:Population';

    /**
     * Returns true if the given object is an instance of Population.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Population {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Population.__pulumiType;
    }

    /**
     * A string that specifies a description to apply to the population.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The ID of the environment to create the population in. Must be a valid PingOne resource ID. This field is immutable and
     * will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * A string that specifies the name of the population.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A string that specifies the ID of a password policy to assign to the population. Must be a valid PingOne resource ID.
     */
    public readonly passwordPolicyId!: pulumi.Output<string | undefined>;

    /**
     * Create a Population resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PopulationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PopulationArgs | PopulationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PopulationState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passwordPolicyId"] = state ? state.passwordPolicyId : undefined;
        } else {
            const args = argsOrState as PopulationArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passwordPolicyId"] = args ? args.passwordPolicyId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Population.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Population resources.
 */
export interface PopulationState {
    /**
     * A string that specifies a description to apply to the population.
     */
    description?: pulumi.Input<string>;
    /**
     * The ID of the environment to create the population in. Must be a valid PingOne resource ID. This field is immutable and
     * will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * A string that specifies the name of the population.
     */
    name?: pulumi.Input<string>;
    /**
     * A string that specifies the ID of a password policy to assign to the population. Must be a valid PingOne resource ID.
     */
    passwordPolicyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Population resource.
 */
export interface PopulationArgs {
    /**
     * A string that specifies a description to apply to the population.
     */
    description?: pulumi.Input<string>;
    /**
     * The ID of the environment to create the population in. Must be a valid PingOne resource ID. This field is immutable and
     * will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * A string that specifies the name of the population.
     */
    name?: pulumi.Input<string>;
    /**
     * A string that specifies the ID of a password policy to assign to the population. Must be a valid PingOne resource ID.
     */
    passwordPolicyId?: pulumi.Input<string>;
}
