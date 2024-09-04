// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FreeformResourceGroupGenerator extends pulumi.CustomResource {
    /**
     * Get an existing FreeformResourceGroupGenerator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FreeformResourceGroupGeneratorState, opts?: pulumi.CustomResourceOptions): FreeformResourceGroupGenerator {
        return new FreeformResourceGroupGenerator(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'apstra:index/freeformResourceGroupGenerator:FreeformResourceGroupGenerator';

    /**
     * Returns true if the given object is an instance of FreeformResourceGroupGenerator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FreeformResourceGroupGenerator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FreeformResourceGroupGenerator.__pulumiType;
    }

    /**
     * Apstra Blueprint ID.
     */
    public readonly blueprintId!: pulumi.Output<string>;
    /**
     * Resource Group the Group Generator belongs to. Omit to create at the `root` level.
     */
    public readonly groupId!: pulumi.Output<string | undefined>;
    /**
     * Freeform Group Generator name as shown in the Web UI.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Scope is a graph query which selects target nodes for which Group Generators should be generated. Example:
     * `node('system', name='target', label=aeq('*prod*'))`
     */
    public readonly scope!: pulumi.Output<string>;

    /**
     * Create a FreeformResourceGroupGenerator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FreeformResourceGroupGeneratorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FreeformResourceGroupGeneratorArgs | FreeformResourceGroupGeneratorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FreeformResourceGroupGeneratorState | undefined;
            resourceInputs["blueprintId"] = state ? state.blueprintId : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as FreeformResourceGroupGeneratorArgs | undefined;
            if ((!args || args.blueprintId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blueprintId'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["blueprintId"] = args ? args.blueprintId : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FreeformResourceGroupGenerator.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FreeformResourceGroupGenerator resources.
 */
export interface FreeformResourceGroupGeneratorState {
    /**
     * Apstra Blueprint ID.
     */
    blueprintId?: pulumi.Input<string>;
    /**
     * Resource Group the Group Generator belongs to. Omit to create at the `root` level.
     */
    groupId?: pulumi.Input<string>;
    /**
     * Freeform Group Generator name as shown in the Web UI.
     */
    name?: pulumi.Input<string>;
    /**
     * Scope is a graph query which selects target nodes for which Group Generators should be generated. Example:
     * `node('system', name='target', label=aeq('*prod*'))`
     */
    scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FreeformResourceGroupGenerator resource.
 */
export interface FreeformResourceGroupGeneratorArgs {
    /**
     * Apstra Blueprint ID.
     */
    blueprintId: pulumi.Input<string>;
    /**
     * Resource Group the Group Generator belongs to. Omit to create at the `root` level.
     */
    groupId?: pulumi.Input<string>;
    /**
     * Freeform Group Generator name as shown in the Web UI.
     */
    name?: pulumi.Input<string>;
    /**
     * Scope is a graph query which selects target nodes for which Group Generators should be generated. Example:
     * `node('system', name='target', label=aeq('*prod*'))`
     */
    scope: pulumi.Input<string>;
}
