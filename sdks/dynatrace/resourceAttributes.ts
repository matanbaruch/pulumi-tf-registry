// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ResourceAttributes extends pulumi.CustomResource {
    /**
     * Get an existing ResourceAttributes resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourceAttributesState, opts?: pulumi.CustomResourceOptions): ResourceAttributes {
        return new ResourceAttributes(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/resourceAttributes:ResourceAttributes';

    /**
     * Returns true if the given object is an instance of ResourceAttributes.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourceAttributes {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourceAttributes.__pulumiType;
    }

    /**
     * Attribute key allow-list
     */
    public readonly keys!: pulumi.Output<outputs.ResourceAttributesKeys | undefined>;

    /**
     * Create a ResourceAttributes resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ResourceAttributesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResourceAttributesArgs | ResourceAttributesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ResourceAttributesState | undefined;
            resourceInputs["keys"] = state ? state.keys : undefined;
        } else {
            const args = argsOrState as ResourceAttributesArgs | undefined;
            resourceInputs["keys"] = args ? args.keys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ResourceAttributes.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ResourceAttributes resources.
 */
export interface ResourceAttributesState {
    /**
     * Attribute key allow-list
     */
    keys?: pulumi.Input<inputs.ResourceAttributesKeys>;
}

/**
 * The set of arguments for constructing a ResourceAttributes resource.
 */
export interface ResourceAttributesArgs {
    /**
     * Attribute key allow-list
     */
    keys?: pulumi.Input<inputs.ResourceAttributesKeys>;
}
