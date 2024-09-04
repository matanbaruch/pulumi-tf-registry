// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StaticResource extends pulumi.CustomResource {
    /**
     * Get an existing StaticResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StaticResourceState, opts?: pulumi.CustomResourceOptions): StaticResource {
        return new StaticResource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rafay:index/staticResource:StaticResource';

    /**
     * Returns true if the given object is an instance of StaticResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StaticResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StaticResource.__pulumiType;
    }

    /**
     * Metadata of the resource
     */
    public readonly metadata!: pulumi.Output<outputs.StaticResourceMetadata | undefined>;
    /**
     * Specification of the resource
     */
    public readonly spec!: pulumi.Output<outputs.StaticResourceSpec | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.StaticResourceTimeouts | undefined>;

    /**
     * Create a StaticResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: StaticResourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StaticResourceArgs | StaticResourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StaticResourceState | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as StaticResourceArgs | undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StaticResource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StaticResource resources.
 */
export interface StaticResourceState {
    /**
     * Metadata of the resource
     */
    metadata?: pulumi.Input<inputs.StaticResourceMetadata>;
    /**
     * Specification of the resource
     */
    spec?: pulumi.Input<inputs.StaticResourceSpec>;
    timeouts?: pulumi.Input<inputs.StaticResourceTimeouts>;
}

/**
 * The set of arguments for constructing a StaticResource resource.
 */
export interface StaticResourceArgs {
    /**
     * Metadata of the resource
     */
    metadata?: pulumi.Input<inputs.StaticResourceMetadata>;
    /**
     * Specification of the resource
     */
    spec?: pulumi.Input<inputs.StaticResourceSpec>;
    timeouts?: pulumi.Input<inputs.StaticResourceTimeouts>;
}
