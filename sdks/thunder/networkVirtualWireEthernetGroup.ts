// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkVirtualWireEthernetGroup extends pulumi.CustomResource {
    /**
     * Get an existing NetworkVirtualWireEthernetGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkVirtualWireEthernetGroupState, opts?: pulumi.CustomResourceOptions): NetworkVirtualWireEthernetGroup {
        return new NetworkVirtualWireEthernetGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/networkVirtualWireEthernetGroup:NetworkVirtualWireEthernetGroup';

    /**
     * Returns true if the given object is an instance of NetworkVirtualWireEthernetGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkVirtualWireEthernetGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkVirtualWireEthernetGroup.__pulumiType;
    }

    public readonly ethLists!: pulumi.Output<outputs.NetworkVirtualWireEthernetGroupEthList[] | undefined>;
    public readonly groupId!: pulumi.Output<number>;
    public readonly trunkLists!: pulumi.Output<outputs.NetworkVirtualWireEthernetGroupTrunkList[] | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a NetworkVirtualWireEthernetGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkVirtualWireEthernetGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkVirtualWireEthernetGroupArgs | NetworkVirtualWireEthernetGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkVirtualWireEthernetGroupState | undefined;
            resourceInputs["ethLists"] = state ? state.ethLists : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["trunkLists"] = state ? state.trunkLists : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as NetworkVirtualWireEthernetGroupArgs | undefined;
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            resourceInputs["ethLists"] = args ? args.ethLists : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["trunkLists"] = args ? args.trunkLists : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkVirtualWireEthernetGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkVirtualWireEthernetGroup resources.
 */
export interface NetworkVirtualWireEthernetGroupState {
    ethLists?: pulumi.Input<pulumi.Input<inputs.NetworkVirtualWireEthernetGroupEthList>[]>;
    groupId?: pulumi.Input<number>;
    trunkLists?: pulumi.Input<pulumi.Input<inputs.NetworkVirtualWireEthernetGroupTrunkList>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkVirtualWireEthernetGroup resource.
 */
export interface NetworkVirtualWireEthernetGroupArgs {
    ethLists?: pulumi.Input<pulumi.Input<inputs.NetworkVirtualWireEthernetGroupEthList>[]>;
    groupId: pulumi.Input<number>;
    trunkLists?: pulumi.Input<pulumi.Input<inputs.NetworkVirtualWireEthernetGroupTrunkList>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
