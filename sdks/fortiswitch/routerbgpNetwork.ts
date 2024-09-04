// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouterbgpNetwork extends pulumi.CustomResource {
    /**
     * Get an existing RouterbgpNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterbgpNetworkState, opts?: pulumi.CustomResourceOptions): RouterbgpNetwork {
        return new RouterbgpNetwork(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/routerbgpNetwork:RouterbgpNetwork';

    /**
     * Returns true if the given object is an instance of RouterbgpNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterbgpNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterbgpNetwork.__pulumiType;
    }

    public readonly backdoor!: pulumi.Output<string>;
    public readonly fswid!: pulumi.Output<number>;
    public readonly prefix!: pulumi.Output<string>;
    public readonly routeMap!: pulumi.Output<string>;

    /**
     * Create a RouterbgpNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterbgpNetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterbgpNetworkArgs | RouterbgpNetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterbgpNetworkState | undefined;
            resourceInputs["backdoor"] = state ? state.backdoor : undefined;
            resourceInputs["fswid"] = state ? state.fswid : undefined;
            resourceInputs["prefix"] = state ? state.prefix : undefined;
            resourceInputs["routeMap"] = state ? state.routeMap : undefined;
        } else {
            const args = argsOrState as RouterbgpNetworkArgs | undefined;
            resourceInputs["backdoor"] = args ? args.backdoor : undefined;
            resourceInputs["fswid"] = args ? args.fswid : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["routeMap"] = args ? args.routeMap : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterbgpNetwork.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterbgpNetwork resources.
 */
export interface RouterbgpNetworkState {
    backdoor?: pulumi.Input<string>;
    fswid?: pulumi.Input<number>;
    prefix?: pulumi.Input<string>;
    routeMap?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterbgpNetwork resource.
 */
export interface RouterbgpNetworkArgs {
    backdoor?: pulumi.Input<string>;
    fswid?: pulumi.Input<number>;
    prefix?: pulumi.Input<string>;
    routeMap?: pulumi.Input<string>;
}
