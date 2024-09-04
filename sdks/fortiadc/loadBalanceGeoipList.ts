// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoadBalanceGeoipList extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalanceGeoipList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalanceGeoipListState, opts?: pulumi.CustomResourceOptions): LoadBalanceGeoipList {
        return new LoadBalanceGeoipList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/loadBalanceGeoipList:LoadBalanceGeoipList';

    /**
     * Returns true if the given object is an instance of LoadBalanceGeoipList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalanceGeoipList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalanceGeoipList.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly log!: pulumi.Output<string>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly severity!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a LoadBalanceGeoipList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalanceGeoipListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalanceGeoipListArgs | LoadBalanceGeoipListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadBalanceGeoipListState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["log"] = state ? state.log : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["severity"] = state ? state.severity : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as LoadBalanceGeoipListArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["log"] = args ? args.log : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoadBalanceGeoipList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoadBalanceGeoipList resources.
 */
export interface LoadBalanceGeoipListState {
    action?: pulumi.Input<string>;
    log?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadBalanceGeoipList resource.
 */
export interface LoadBalanceGeoipListArgs {
    action?: pulumi.Input<string>;
    log?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
