// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ContainerRegistry extends pulumi.CustomResource {
    /**
     * Get an existing ContainerRegistry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerRegistryState, opts?: pulumi.CustomResourceOptions): ContainerRegistry {
        return new ContainerRegistry(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/containerRegistry:ContainerRegistry';

    /**
     * Returns true if the given object is an instance of ContainerRegistry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerRegistry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerRegistry.__pulumiType;
    }

    /**
     * Typically set without protocol. Leave empty to use default configuration
     */
    public readonly containerRegistry!: pulumi.Output<string | undefined>;

    /**
     * Create a ContainerRegistry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ContainerRegistryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerRegistryArgs | ContainerRegistryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerRegistryState | undefined;
            resourceInputs["containerRegistry"] = state ? state.containerRegistry : undefined;
        } else {
            const args = argsOrState as ContainerRegistryArgs | undefined;
            resourceInputs["containerRegistry"] = args ? args.containerRegistry : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContainerRegistry.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContainerRegistry resources.
 */
export interface ContainerRegistryState {
    /**
     * Typically set without protocol. Leave empty to use default configuration
     */
    containerRegistry?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ContainerRegistry resource.
 */
export interface ContainerRegistryArgs {
    /**
     * Typically set without protocol. Leave empty to use default configuration
     */
    containerRegistry?: pulumi.Input<string>;
}
