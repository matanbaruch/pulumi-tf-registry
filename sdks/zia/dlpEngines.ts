// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DlpEngines extends pulumi.CustomResource {
    /**
     * Get an existing DlpEngines resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DlpEnginesState, opts?: pulumi.CustomResourceOptions): DlpEngines {
        return new DlpEngines(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zia:index/dlpEngines:DlpEngines';

    /**
     * Returns true if the given object is an instance of DlpEngines.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DlpEngines {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DlpEngines.__pulumiType;
    }

    /**
     * Indicates whether this is a custom DLP engine. If this value is set to true, the engine is custom.
     */
    public readonly customDlpEngine!: pulumi.Output<boolean | undefined>;
    /**
     * The DLP engine's description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The boolean logical operator in which various DLP dictionaries are combined within a DLP engine's expression.
     */
    public readonly engineExpression!: pulumi.Output<string | undefined>;
    public /*out*/ readonly engineId!: pulumi.Output<number>;
    /**
     * The DLP engine name as configured by the admin.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a DlpEngines resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DlpEnginesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DlpEnginesArgs | DlpEnginesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DlpEnginesState | undefined;
            resourceInputs["customDlpEngine"] = state ? state.customDlpEngine : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["engineExpression"] = state ? state.engineExpression : undefined;
            resourceInputs["engineId"] = state ? state.engineId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as DlpEnginesArgs | undefined;
            resourceInputs["customDlpEngine"] = args ? args.customDlpEngine : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["engineExpression"] = args ? args.engineExpression : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["engineId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DlpEngines.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DlpEngines resources.
 */
export interface DlpEnginesState {
    /**
     * Indicates whether this is a custom DLP engine. If this value is set to true, the engine is custom.
     */
    customDlpEngine?: pulumi.Input<boolean>;
    /**
     * The DLP engine's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The boolean logical operator in which various DLP dictionaries are combined within a DLP engine's expression.
     */
    engineExpression?: pulumi.Input<string>;
    engineId?: pulumi.Input<number>;
    /**
     * The DLP engine name as configured by the admin.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DlpEngines resource.
 */
export interface DlpEnginesArgs {
    /**
     * Indicates whether this is a custom DLP engine. If this value is set to true, the engine is custom.
     */
    customDlpEngine?: pulumi.Input<boolean>;
    /**
     * The DLP engine's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The boolean logical operator in which various DLP dictionaries are combined within a DLP engine's expression.
     */
    engineExpression?: pulumi.Input<string>;
    /**
     * The DLP engine name as configured by the admin.
     */
    name?: pulumi.Input<string>;
}
