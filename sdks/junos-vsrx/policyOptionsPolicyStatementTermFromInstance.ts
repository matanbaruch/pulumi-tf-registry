// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PolicyOptionsPolicyStatementTermFromInstance extends pulumi.CustomResource {
    /**
     * Get an existing PolicyOptionsPolicyStatementTermFromInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyOptionsPolicyStatementTermFromInstanceState, opts?: pulumi.CustomResourceOptions): PolicyOptionsPolicyStatementTermFromInstance {
        return new PolicyOptionsPolicyStatementTermFromInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'junos-vsrx:index/policyOptionsPolicyStatementTermFromInstance:PolicyOptionsPolicyStatementTermFromInstance';

    /**
     * Returns true if the given object is an instance of PolicyOptionsPolicyStatementTermFromInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyOptionsPolicyStatementTermFromInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyOptionsPolicyStatementTermFromInstance.__pulumiType;
    }

    /**
     * xpath is: config.Groups.V_policy__statement.V_term.V_from. Routing protocol instance
     */
    public readonly instance!: pulumi.Output<string | undefined>;
    /**
     * xpath is: config.Groups.V_policy__statement
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * xpath is: config.Groups.V_policy__statement.V_term
     */
    public readonly name1!: pulumi.Output<string | undefined>;
    public readonly resourceName!: pulumi.Output<string>;

    /**
     * Create a PolicyOptionsPolicyStatementTermFromInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyOptionsPolicyStatementTermFromInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyOptionsPolicyStatementTermFromInstanceArgs | PolicyOptionsPolicyStatementTermFromInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyOptionsPolicyStatementTermFromInstanceState | undefined;
            resourceInputs["instance"] = state ? state.instance : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["name1"] = state ? state.name1 : undefined;
            resourceInputs["resourceName"] = state ? state.resourceName : undefined;
        } else {
            const args = argsOrState as PolicyOptionsPolicyStatementTermFromInstanceArgs | undefined;
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["instance"] = args ? args.instance : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["name1"] = args ? args.name1 : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyOptionsPolicyStatementTermFromInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyOptionsPolicyStatementTermFromInstance resources.
 */
export interface PolicyOptionsPolicyStatementTermFromInstanceState {
    /**
     * xpath is: config.Groups.V_policy__statement.V_term.V_from. Routing protocol instance
     */
    instance?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy__statement
     */
    name?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy__statement.V_term
     */
    name1?: pulumi.Input<string>;
    resourceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicyOptionsPolicyStatementTermFromInstance resource.
 */
export interface PolicyOptionsPolicyStatementTermFromInstanceArgs {
    /**
     * xpath is: config.Groups.V_policy__statement.V_term.V_from. Routing protocol instance
     */
    instance?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy__statement
     */
    name?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy__statement.V_term
     */
    name1?: pulumi.Input<string>;
    resourceName: pulumi.Input<string>;
}
