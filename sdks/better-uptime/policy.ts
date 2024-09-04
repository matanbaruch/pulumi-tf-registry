// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyState, opts?: pulumi.CustomResourceOptions): Policy {
        return new Policy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'better-uptime:index/policy:Policy';

    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Policy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Policy.__pulumiType;
    }

    /**
     * Incident token that can be used for manually reporting incidents.
     */
    public /*out*/ readonly incidentToken!: pulumi.Output<string>;
    /**
     * The name of this Policy.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Set this attribute if you want to add this policy to a policy group.
     */
    public readonly policyGroupId!: pulumi.Output<number>;
    /**
     * How many times should the entire policy be repeated if no one acknowledges the incident.
     */
    public readonly repeatCount!: pulumi.Output<number>;
    /**
     * How long in seconds to wait before each repetition.
     */
    public readonly repeatDelay!: pulumi.Output<number>;
    /**
     * An array of escalation policy steps
     */
    public readonly steps!: pulumi.Output<outputs.PolicyStep[]>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    public readonly teamName!: pulumi.Output<string | undefined>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyArgs | PolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyState | undefined;
            resourceInputs["incidentToken"] = state ? state.incidentToken : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policyGroupId"] = state ? state.policyGroupId : undefined;
            resourceInputs["repeatCount"] = state ? state.repeatCount : undefined;
            resourceInputs["repeatDelay"] = state ? state.repeatDelay : undefined;
            resourceInputs["steps"] = state ? state.steps : undefined;
            resourceInputs["teamName"] = state ? state.teamName : undefined;
        } else {
            const args = argsOrState as PolicyArgs | undefined;
            if ((!args || args.steps === undefined) && !opts.urn) {
                throw new Error("Missing required property 'steps'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policyGroupId"] = args ? args.policyGroupId : undefined;
            resourceInputs["repeatCount"] = args ? args.repeatCount : undefined;
            resourceInputs["repeatDelay"] = args ? args.repeatDelay : undefined;
            resourceInputs["steps"] = args ? args.steps : undefined;
            resourceInputs["teamName"] = args ? args.teamName : undefined;
            resourceInputs["incidentToken"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Policy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * Incident token that can be used for manually reporting incidents.
     */
    incidentToken?: pulumi.Input<string>;
    /**
     * The name of this Policy.
     */
    name?: pulumi.Input<string>;
    /**
     * Set this attribute if you want to add this policy to a policy group.
     */
    policyGroupId?: pulumi.Input<number>;
    /**
     * How many times should the entire policy be repeated if no one acknowledges the incident.
     */
    repeatCount?: pulumi.Input<number>;
    /**
     * How long in seconds to wait before each repetition.
     */
    repeatDelay?: pulumi.Input<number>;
    /**
     * An array of escalation policy steps
     */
    steps?: pulumi.Input<pulumi.Input<inputs.PolicyStep>[]>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    teamName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * The name of this Policy.
     */
    name?: pulumi.Input<string>;
    /**
     * Set this attribute if you want to add this policy to a policy group.
     */
    policyGroupId?: pulumi.Input<number>;
    /**
     * How many times should the entire policy be repeated if no one acknowledges the incident.
     */
    repeatCount?: pulumi.Input<number>;
    /**
     * How long in seconds to wait before each repetition.
     */
    repeatDelay?: pulumi.Input<number>;
    /**
     * An array of escalation policy steps
     */
    steps: pulumi.Input<pulumi.Input<inputs.PolicyStep>[]>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    teamName?: pulumi.Input<string>;
}
