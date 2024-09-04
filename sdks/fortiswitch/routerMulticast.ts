// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterMulticast extends pulumi.CustomResource {
    /**
     * Get an existing RouterMulticast resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterMulticastState, opts?: pulumi.CustomResourceOptions): RouterMulticast {
        return new RouterMulticast(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/routerMulticast:RouterMulticast';

    /**
     * Returns true if the given object is an instance of RouterMulticast.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterMulticast {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterMulticast.__pulumiType;
    }

    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly interfaces!: pulumi.Output<outputs.RouterMulticastInterface[] | undefined>;
    public readonly multicastRouting!: pulumi.Output<string>;

    /**
     * Create a RouterMulticast resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterMulticastArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterMulticastArgs | RouterMulticastState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterMulticastState | undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["multicastRouting"] = state ? state.multicastRouting : undefined;
        } else {
            const args = argsOrState as RouterMulticastArgs | undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["multicastRouting"] = args ? args.multicastRouting : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterMulticast.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterMulticast resources.
 */
export interface RouterMulticastState {
    dynamicSortSubtable?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.RouterMulticastInterface>[]>;
    multicastRouting?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterMulticast resource.
 */
export interface RouterMulticastArgs {
    dynamicSortSubtable?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.RouterMulticastInterface>[]>;
    multicastRouting?: pulumi.Input<string>;
}
