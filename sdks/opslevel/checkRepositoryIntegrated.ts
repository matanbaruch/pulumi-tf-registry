// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CheckRepositoryIntegrated extends pulumi.CustomResource {
    /**
     * Get an existing CheckRepositoryIntegrated resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CheckRepositoryIntegratedState, opts?: pulumi.CustomResourceOptions): CheckRepositoryIntegrated {
        return new CheckRepositoryIntegrated(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opslevel:index/checkRepositoryIntegrated:CheckRepositoryIntegrated';

    /**
     * Returns true if the given object is an instance of CheckRepositoryIntegrated.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CheckRepositoryIntegrated {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CheckRepositoryIntegrated.__pulumiType;
    }

    /**
     * The id of the category the check belongs to.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * The description the check.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * The date when the check will be automatically enabled. If you use this field you should add both 'enabled' and
     * 'enable_on' to the lifecycle ignore_changes settings. See example in opslevel.CheckManual for proper configuration.
     */
    public readonly enableOn!: pulumi.Output<string | undefined>;
    /**
     * Whether the check is enabled or not. Do not use this field in tandem with 'enable_on'.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The id of the filter of the check.
     */
    public readonly filter!: pulumi.Output<string | undefined>;
    /**
     * The id of the level the check belongs to.
     */
    public readonly level!: pulumi.Output<string>;
    /**
     * The display name of the check.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Additional information to display to the service owner about the check.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * The id of the team that owns the check.
     */
    public readonly owner!: pulumi.Output<string | undefined>;

    /**
     * Create a CheckRepositoryIntegrated resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CheckRepositoryIntegratedArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CheckRepositoryIntegratedArgs | CheckRepositoryIntegratedState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CheckRepositoryIntegratedState | undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enableOn"] = state ? state.enableOn : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["level"] = state ? state.level : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
        } else {
            const args = argsOrState as CheckRepositoryIntegratedArgs | undefined;
            if ((!args || args.category === undefined) && !opts.urn) {
                throw new Error("Missing required property 'category'");
            }
            if ((!args || args.level === undefined) && !opts.urn) {
                throw new Error("Missing required property 'level'");
            }
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["enableOn"] = args ? args.enableOn : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["level"] = args ? args.level : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["description"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CheckRepositoryIntegrated.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CheckRepositoryIntegrated resources.
 */
export interface CheckRepositoryIntegratedState {
    /**
     * The id of the category the check belongs to.
     */
    category?: pulumi.Input<string>;
    /**
     * The description the check.
     */
    description?: pulumi.Input<string>;
    /**
     * The date when the check will be automatically enabled. If you use this field you should add both 'enabled' and
     * 'enable_on' to the lifecycle ignore_changes settings. See example in opslevel.CheckManual for proper configuration.
     */
    enableOn?: pulumi.Input<string>;
    /**
     * Whether the check is enabled or not. Do not use this field in tandem with 'enable_on'.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The id of the filter of the check.
     */
    filter?: pulumi.Input<string>;
    /**
     * The id of the level the check belongs to.
     */
    level?: pulumi.Input<string>;
    /**
     * The display name of the check.
     */
    name?: pulumi.Input<string>;
    /**
     * Additional information to display to the service owner about the check.
     */
    notes?: pulumi.Input<string>;
    /**
     * The id of the team that owns the check.
     */
    owner?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CheckRepositoryIntegrated resource.
 */
export interface CheckRepositoryIntegratedArgs {
    /**
     * The id of the category the check belongs to.
     */
    category: pulumi.Input<string>;
    /**
     * The date when the check will be automatically enabled. If you use this field you should add both 'enabled' and
     * 'enable_on' to the lifecycle ignore_changes settings. See example in opslevel.CheckManual for proper configuration.
     */
    enableOn?: pulumi.Input<string>;
    /**
     * Whether the check is enabled or not. Do not use this field in tandem with 'enable_on'.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The id of the filter of the check.
     */
    filter?: pulumi.Input<string>;
    /**
     * The id of the level the check belongs to.
     */
    level: pulumi.Input<string>;
    /**
     * The display name of the check.
     */
    name?: pulumi.Input<string>;
    /**
     * Additional information to display to the service owner about the check.
     */
    notes?: pulumi.Input<string>;
    /**
     * The id of the team that owns the check.
     */
    owner?: pulumi.Input<string>;
}
