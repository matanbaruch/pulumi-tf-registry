// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallNetworkservicedynamic extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallNetworkservicedynamic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallNetworkservicedynamicState, opts?: pulumi.CustomResourceOptions): ObjectFirewallNetworkservicedynamic {
        return new ObjectFirewallNetworkservicedynamic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallNetworkservicedynamic:ObjectFirewallNetworkservicedynamic';

    /**
     * Returns true if the given object is an instance of ObjectFirewallNetworkservicedynamic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallNetworkservicedynamic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallNetworkservicedynamic.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly filter!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly sdn!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectFirewallNetworkservicedynamic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectFirewallNetworkservicedynamicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallNetworkservicedynamicArgs | ObjectFirewallNetworkservicedynamicState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallNetworkservicedynamicState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["sdn"] = state ? state.sdn : undefined;
        } else {
            const args = argsOrState as ObjectFirewallNetworkservicedynamicArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["sdn"] = args ? args.sdn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallNetworkservicedynamic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallNetworkservicedynamic resources.
 */
export interface ObjectFirewallNetworkservicedynamicState {
    adom?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sdn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallNetworkservicedynamic resource.
 */
export interface ObjectFirewallNetworkservicedynamicArgs {
    adom?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sdn?: pulumi.Input<string>;
}
