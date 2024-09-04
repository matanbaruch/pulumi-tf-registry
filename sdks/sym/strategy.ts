// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Strategy extends pulumi.CustomResource {
    /**
     * Get an existing Strategy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StrategyState, opts?: pulumi.CustomResourceOptions): Strategy {
        return new Strategy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sym:index/strategy:Strategy';

    /**
     * Returns true if the given object is an instance of Strategy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Strategy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Strategy.__pulumiType;
    }

    /**
     * Relative path to the implementation written in python if this is a custom strategy.
     */
    public readonly implementation!: pulumi.Output<string | undefined>;
    /**
     * The ID of the `sym.Integration` associated with this Strategy.
     */
    public readonly integrationId!: pulumi.Output<string | undefined>;
    /**
     * An optional label for this Strategy.
     */
    public readonly label!: pulumi.Output<string | undefined>;
    /**
     * A unique identifier for this Strategy.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A map of settings specific to this type of Strategy.
     */
    public readonly settings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A list of IDs for targets associated with this Strategy.
     */
    public readonly targets!: pulumi.Output<string[]>;
    /**
     * The type of the Strategy.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Strategy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StrategyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StrategyArgs | StrategyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StrategyState | undefined;
            resourceInputs["implementation"] = state ? state.implementation : undefined;
            resourceInputs["integrationId"] = state ? state.integrationId : undefined;
            resourceInputs["label"] = state ? state.label : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["settings"] = state ? state.settings : undefined;
            resourceInputs["targets"] = state ? state.targets : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as StrategyArgs | undefined;
            if ((!args || args.targets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targets'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["implementation"] = args ? args.implementation : undefined;
            resourceInputs["integrationId"] = args ? args.integrationId : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["targets"] = args ? args.targets : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Strategy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Strategy resources.
 */
export interface StrategyState {
    /**
     * Relative path to the implementation written in python if this is a custom strategy.
     */
    implementation?: pulumi.Input<string>;
    /**
     * The ID of the `sym.Integration` associated with this Strategy.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * An optional label for this Strategy.
     */
    label?: pulumi.Input<string>;
    /**
     * A unique identifier for this Strategy.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of settings specific to this type of Strategy.
     */
    settings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of IDs for targets associated with this Strategy.
     */
    targets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the Strategy.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Strategy resource.
 */
export interface StrategyArgs {
    /**
     * Relative path to the implementation written in python if this is a custom strategy.
     */
    implementation?: pulumi.Input<string>;
    /**
     * The ID of the `sym.Integration` associated with this Strategy.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * An optional label for this Strategy.
     */
    label?: pulumi.Input<string>;
    /**
     * A unique identifier for this Strategy.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of settings specific to this type of Strategy.
     */
    settings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of IDs for targets associated with this Strategy.
     */
    targets: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the Strategy.
     */
    type: pulumi.Input<string>;
}
