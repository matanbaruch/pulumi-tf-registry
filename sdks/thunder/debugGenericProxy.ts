// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DebugGenericProxy extends pulumi.CustomResource {
    /**
     * Get an existing DebugGenericProxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DebugGenericProxyState, opts?: pulumi.CustomResourceOptions): DebugGenericProxy {
        return new DebugGenericProxy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/debugGenericProxy:DebugGenericProxy';

    /**
     * Returns true if the given object is an instance of DebugGenericProxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DebugGenericProxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DebugGenericProxy.__pulumiType;
    }

    /**
     * Debug level (Level 1-4)
     */
    public readonly debugLevel!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DebugGenericProxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DebugGenericProxyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DebugGenericProxyArgs | DebugGenericProxyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DebugGenericProxyState | undefined;
            resourceInputs["debugLevel"] = state ? state.debugLevel : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DebugGenericProxyArgs | undefined;
            resourceInputs["debugLevel"] = args ? args.debugLevel : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DebugGenericProxy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DebugGenericProxy resources.
 */
export interface DebugGenericProxyState {
    /**
     * Debug level (Level 1-4)
     */
    debugLevel?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DebugGenericProxy resource.
 */
export interface DebugGenericProxyArgs {
    /**
     * Debug level (Level 1-4)
     */
    debugLevel?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
