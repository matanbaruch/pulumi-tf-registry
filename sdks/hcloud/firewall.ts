// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Firewall extends pulumi.CustomResource {
    /**
     * Get an existing Firewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallState, opts?: pulumi.CustomResourceOptions): Firewall {
        return new Firewall(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hcloud:index/firewall:Firewall';

    /**
     * Returns true if the given object is an instance of Firewall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Firewall {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Firewall.__pulumiType;
    }

    public readonly applyTos!: pulumi.Output<outputs.FirewallApplyTo[] | undefined>;
    public readonly labels!: pulumi.Output<{[key: string]: string}>;
    public readonly name!: pulumi.Output<string>;
    public readonly rules!: pulumi.Output<outputs.FirewallRule[] | undefined>;

    /**
     * Create a Firewall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirewallArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallArgs | FirewallState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallState | undefined;
            resourceInputs["applyTos"] = state ? state.applyTos : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
        } else {
            const args = argsOrState as FirewallArgs | undefined;
            resourceInputs["applyTos"] = args ? args.applyTos : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Firewall.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Firewall resources.
 */
export interface FirewallState {
    applyTos?: pulumi.Input<pulumi.Input<inputs.FirewallApplyTo>[]>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.FirewallRule>[]>;
}

/**
 * The set of arguments for constructing a Firewall resource.
 */
export interface FirewallArgs {
    applyTos?: pulumi.Input<pulumi.Input<inputs.FirewallApplyTo>[]>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.FirewallRule>[]>;
}
