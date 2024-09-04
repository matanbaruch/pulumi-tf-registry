// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoadBalanceProfileChildServerResponseHeaderInsert extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalanceProfileChildServerResponseHeaderInsert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalanceProfileChildServerResponseHeaderInsertState, opts?: pulumi.CustomResourceOptions): LoadBalanceProfileChildServerResponseHeaderInsert {
        return new LoadBalanceProfileChildServerResponseHeaderInsert(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/loadBalanceProfileChildServerResponseHeaderInsert:LoadBalanceProfileChildServerResponseHeaderInsert';

    /**
     * Returns true if the given object is an instance of LoadBalanceProfileChildServerResponseHeaderInsert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalanceProfileChildServerResponseHeaderInsert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalanceProfileChildServerResponseHeaderInsert.__pulumiType;
    }

    public readonly mkey!: pulumi.Output<string>;
    public readonly pkey!: pulumi.Output<string>;
    public readonly string!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a LoadBalanceProfileChildServerResponseHeaderInsert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalanceProfileChildServerResponseHeaderInsertArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalanceProfileChildServerResponseHeaderInsertArgs | LoadBalanceProfileChildServerResponseHeaderInsertState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadBalanceProfileChildServerResponseHeaderInsertState | undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["pkey"] = state ? state.pkey : undefined;
            resourceInputs["string"] = state ? state.string : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as LoadBalanceProfileChildServerResponseHeaderInsertArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            if ((!args || args.pkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pkey'");
            }
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["pkey"] = args ? args.pkey : undefined;
            resourceInputs["string"] = args ? args.string : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoadBalanceProfileChildServerResponseHeaderInsert.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoadBalanceProfileChildServerResponseHeaderInsert resources.
 */
export interface LoadBalanceProfileChildServerResponseHeaderInsertState {
    mkey?: pulumi.Input<string>;
    pkey?: pulumi.Input<string>;
    string?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadBalanceProfileChildServerResponseHeaderInsert resource.
 */
export interface LoadBalanceProfileChildServerResponseHeaderInsertArgs {
    mkey: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    string?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
