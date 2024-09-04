// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FilterglobalFilterpolicyBinding extends pulumi.CustomResource {
    /**
     * Get an existing FilterglobalFilterpolicyBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FilterglobalFilterpolicyBindingState, opts?: pulumi.CustomResourceOptions): FilterglobalFilterpolicyBinding {
        return new FilterglobalFilterpolicyBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/filterglobalFilterpolicyBinding:FilterglobalFilterpolicyBinding';

    /**
     * Returns true if the given object is an instance of FilterglobalFilterpolicyBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FilterglobalFilterpolicyBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FilterglobalFilterpolicyBinding.__pulumiType;
    }

    public readonly policyname!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly state!: pulumi.Output<string>;

    /**
     * Create a FilterglobalFilterpolicyBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FilterglobalFilterpolicyBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FilterglobalFilterpolicyBindingArgs | FilterglobalFilterpolicyBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FilterglobalFilterpolicyBindingState | undefined;
            resourceInputs["policyname"] = state ? state.policyname : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
        } else {
            const args = argsOrState as FilterglobalFilterpolicyBindingArgs | undefined;
            if ((!args || args.policyname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyname'");
            }
            resourceInputs["policyname"] = args ? args.policyname : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FilterglobalFilterpolicyBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FilterglobalFilterpolicyBinding resources.
 */
export interface FilterglobalFilterpolicyBindingState {
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FilterglobalFilterpolicyBinding resource.
 */
export interface FilterglobalFilterpolicyBindingArgs {
    policyname: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
}
