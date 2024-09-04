// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouterOspfChildNetwork extends pulumi.CustomResource {
    /**
     * Get an existing RouterOspfChildNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterOspfChildNetworkState, opts?: pulumi.CustomResourceOptions): RouterOspfChildNetwork {
        return new RouterOspfChildNetwork(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/routerOspfChildNetwork:RouterOspfChildNetwork';

    /**
     * Returns true if the given object is an instance of RouterOspfChildNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterOspfChildNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterOspfChildNetwork.__pulumiType;
    }

    public readonly areaId!: pulumi.Output<string>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly prefix!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a RouterOspfChildNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouterOspfChildNetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterOspfChildNetworkArgs | RouterOspfChildNetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterOspfChildNetworkState | undefined;
            resourceInputs["areaId"] = state ? state.areaId : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["prefix"] = state ? state.prefix : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as RouterOspfChildNetworkArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["areaId"] = args ? args.areaId : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterOspfChildNetwork.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterOspfChildNetwork resources.
 */
export interface RouterOspfChildNetworkState {
    areaId?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    prefix?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterOspfChildNetwork resource.
 */
export interface RouterOspfChildNetworkArgs {
    areaId?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    prefix?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
