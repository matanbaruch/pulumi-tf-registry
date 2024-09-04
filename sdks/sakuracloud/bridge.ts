// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Bridge extends pulumi.CustomResource {
    /**
     * Get an existing Bridge resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BridgeState, opts?: pulumi.CustomResourceOptions): Bridge {
        return new Bridge(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sakuracloud:index/bridge:Bridge';

    /**
     * Returns true if the given object is an instance of Bridge.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Bridge {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Bridge.__pulumiType;
    }

    /**
     * The description of the Bridge. The length of this value must be in the range [`1`-`512`]
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the Bridge. The length of this value must be in the range [`1`-`64`]
     */
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BridgeTimeouts | undefined>;
    /**
     * The name of zone that the Bridge will be created (e.g. `is1a`, `tk1a`)
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a Bridge resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BridgeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BridgeArgs | BridgeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BridgeState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as BridgeArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Bridge.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Bridge resources.
 */
export interface BridgeState {
    /**
     * The description of the Bridge. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Bridge. The length of this value must be in the range [`1`-`64`]
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BridgeTimeouts>;
    /**
     * The name of zone that the Bridge will be created (e.g. `is1a`, `tk1a`)
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Bridge resource.
 */
export interface BridgeArgs {
    /**
     * The description of the Bridge. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Bridge. The length of this value must be in the range [`1`-`64`]
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BridgeTimeouts>;
    /**
     * The name of zone that the Bridge will be created (e.g. `is1a`, `tk1a`)
     */
    zone?: pulumi.Input<string>;
}
