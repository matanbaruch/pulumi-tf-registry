// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WantempSystemVirtualwanlinkNeighbor extends pulumi.CustomResource {
    /**
     * Get an existing WantempSystemVirtualwanlinkNeighbor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WantempSystemVirtualwanlinkNeighborState, opts?: pulumi.CustomResourceOptions): WantempSystemVirtualwanlinkNeighbor {
        return new WantempSystemVirtualwanlinkNeighbor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/wantempSystemVirtualwanlinkNeighbor:WantempSystemVirtualwanlinkNeighbor';

    /**
     * Returns true if the given object is an instance of WantempSystemVirtualwanlinkNeighbor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WantempSystemVirtualwanlinkNeighbor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WantempSystemVirtualwanlinkNeighbor.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly healthCheck!: pulumi.Output<string | undefined>;
    public readonly ip!: pulumi.Output<string | undefined>;
    public readonly member!: pulumi.Output<string | undefined>;
    public readonly role!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly slaId!: pulumi.Output<number | undefined>;
    public readonly wanprof!: pulumi.Output<string>;

    /**
     * Create a WantempSystemVirtualwanlinkNeighbor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WantempSystemVirtualwanlinkNeighborArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WantempSystemVirtualwanlinkNeighborArgs | WantempSystemVirtualwanlinkNeighborState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WantempSystemVirtualwanlinkNeighborState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["healthCheck"] = state ? state.healthCheck : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["member"] = state ? state.member : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["slaId"] = state ? state.slaId : undefined;
            resourceInputs["wanprof"] = state ? state.wanprof : undefined;
        } else {
            const args = argsOrState as WantempSystemVirtualwanlinkNeighborArgs | undefined;
            if ((!args || args.wanprof === undefined) && !opts.urn) {
                throw new Error("Missing required property 'wanprof'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["healthCheck"] = args ? args.healthCheck : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["member"] = args ? args.member : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["slaId"] = args ? args.slaId : undefined;
            resourceInputs["wanprof"] = args ? args.wanprof : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WantempSystemVirtualwanlinkNeighbor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WantempSystemVirtualwanlinkNeighbor resources.
 */
export interface WantempSystemVirtualwanlinkNeighborState {
    adom?: pulumi.Input<string>;
    healthCheck?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    member?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    slaId?: pulumi.Input<number>;
    wanprof?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WantempSystemVirtualwanlinkNeighbor resource.
 */
export interface WantempSystemVirtualwanlinkNeighborArgs {
    adom?: pulumi.Input<string>;
    healthCheck?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    member?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    slaId?: pulumi.Input<number>;
    wanprof: pulumi.Input<string>;
}
