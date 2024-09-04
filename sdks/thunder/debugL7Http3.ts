// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DebugL7Http3 extends pulumi.CustomResource {
    /**
     * Get an existing DebugL7Http3 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DebugL7Http3State, opts?: pulumi.CustomResourceOptions): DebugL7Http3 {
        return new DebugL7Http3(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/debugL7Http3:DebugL7Http3';

    /**
     * Returns true if the given object is an instance of DebugL7Http3.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DebugL7Http3 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DebugL7Http3.__pulumiType;
    }

    /**
     * Debug level (Level 1-5)
     */
    public readonly level!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DebugL7Http3 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DebugL7Http3Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DebugL7Http3Args | DebugL7Http3State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DebugL7Http3State | undefined;
            resourceInputs["level"] = state ? state.level : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DebugL7Http3Args | undefined;
            resourceInputs["level"] = args ? args.level : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DebugL7Http3.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DebugL7Http3 resources.
 */
export interface DebugL7Http3State {
    /**
     * Debug level (Level 1-5)
     */
    level?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DebugL7Http3 resource.
 */
export interface DebugL7Http3Args {
    /**
     * Debug level (Level 1-5)
     */
    level?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
