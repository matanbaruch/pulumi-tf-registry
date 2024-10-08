// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterBgpAddressFamilyIpv6Flowspec extends pulumi.CustomResource {
    /**
     * Get an existing RouterBgpAddressFamilyIpv6Flowspec resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterBgpAddressFamilyIpv6FlowspecState, opts?: pulumi.CustomResourceOptions): RouterBgpAddressFamilyIpv6Flowspec {
        return new RouterBgpAddressFamilyIpv6Flowspec(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/routerBgpAddressFamilyIpv6Flowspec:RouterBgpAddressFamilyIpv6Flowspec';

    /**
     * Returns true if the given object is an instance of RouterBgpAddressFamilyIpv6Flowspec.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterBgpAddressFamilyIpv6Flowspec {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterBgpAddressFamilyIpv6Flowspec.__pulumiType;
    }

    /**
     * AsNumber
     */
    public readonly asNumber!: pulumi.Output<string>;
    public readonly neighbor!: pulumi.Output<outputs.RouterBgpAddressFamilyIpv6FlowspecNeighbor | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a RouterBgpAddressFamilyIpv6Flowspec resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouterBgpAddressFamilyIpv6FlowspecArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterBgpAddressFamilyIpv6FlowspecArgs | RouterBgpAddressFamilyIpv6FlowspecState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterBgpAddressFamilyIpv6FlowspecState | undefined;
            resourceInputs["asNumber"] = state ? state.asNumber : undefined;
            resourceInputs["neighbor"] = state ? state.neighbor : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as RouterBgpAddressFamilyIpv6FlowspecArgs | undefined;
            if ((!args || args.asNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'asNumber'");
            }
            resourceInputs["asNumber"] = args ? args.asNumber : undefined;
            resourceInputs["neighbor"] = args ? args.neighbor : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterBgpAddressFamilyIpv6Flowspec.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterBgpAddressFamilyIpv6Flowspec resources.
 */
export interface RouterBgpAddressFamilyIpv6FlowspecState {
    /**
     * AsNumber
     */
    asNumber?: pulumi.Input<string>;
    neighbor?: pulumi.Input<inputs.RouterBgpAddressFamilyIpv6FlowspecNeighbor>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterBgpAddressFamilyIpv6Flowspec resource.
 */
export interface RouterBgpAddressFamilyIpv6FlowspecArgs {
    /**
     * AsNumber
     */
    asNumber: pulumi.Input<string>;
    neighbor?: pulumi.Input<inputs.RouterBgpAddressFamilyIpv6FlowspecNeighbor>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
