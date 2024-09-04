// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PropertySet extends pulumi.CustomResource {
    /**
     * Get an existing PropertySet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PropertySetState, opts?: pulumi.CustomResourceOptions): PropertySet {
        return new PropertySet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'apstra:index/propertySet:PropertySet';

    /**
     * Returns true if the given object is an instance of PropertySet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PropertySet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PropertySet.__pulumiType;
    }

    /**
     * Set of blueprints that this Property Set might be associated with.
     */
    public /*out*/ readonly blueprints!: pulumi.Output<string[]>;
    /**
     * A map of values in the Property Set in JSON format
     */
    public readonly data!: pulumi.Output<string>;
    /**
     * Set of keys defined in the Property Set.
     */
    public /*out*/ readonly keys!: pulumi.Output<string[]>;
    /**
     * Name of the Property Set.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a PropertySet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PropertySetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PropertySetArgs | PropertySetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PropertySetState | undefined;
            resourceInputs["blueprints"] = state ? state.blueprints : undefined;
            resourceInputs["data"] = state ? state.data : undefined;
            resourceInputs["keys"] = state ? state.keys : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as PropertySetArgs | undefined;
            if ((!args || args.data === undefined) && !opts.urn) {
                throw new Error("Missing required property 'data'");
            }
            resourceInputs["data"] = args ? args.data : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["blueprints"] = undefined /*out*/;
            resourceInputs["keys"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PropertySet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PropertySet resources.
 */
export interface PropertySetState {
    /**
     * Set of blueprints that this Property Set might be associated with.
     */
    blueprints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A map of values in the Property Set in JSON format
     */
    data?: pulumi.Input<string>;
    /**
     * Set of keys defined in the Property Set.
     */
    keys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the Property Set.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PropertySet resource.
 */
export interface PropertySetArgs {
    /**
     * A map of values in the Property Set in JSON format
     */
    data: pulumi.Input<string>;
    /**
     * Name of the Property Set.
     */
    name?: pulumi.Input<string>;
}
