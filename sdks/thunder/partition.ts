// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Partition extends pulumi.CustomResource {
    /**
     * Get an existing Partition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PartitionState, opts?: pulumi.CustomResourceOptions): Partition {
        return new Partition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/partition:Partition';

    /**
     * Returns true if the given object is an instance of Partition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Partition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Partition.__pulumiType;
    }

    /**
     * 'adc': Application type ADC; 'cgnv6': Application type CGNv6;
     */
    public readonly applicationType!: pulumi.Output<string | undefined>;
    /**
     * Specify unique Partition id
     */
    public readonly id1!: pulumi.Output<number | undefined>;
    /**
     * Object partition name
     */
    public readonly partitionName!: pulumi.Output<string>;
    public readonly sharedVlan!: pulumi.Output<outputs.PartitionSharedVlan | undefined>;
    public readonly template!: pulumi.Output<outputs.PartitionTemplate | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Partition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PartitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PartitionArgs | PartitionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PartitionState | undefined;
            resourceInputs["applicationType"] = state ? state.applicationType : undefined;
            resourceInputs["id1"] = state ? state.id1 : undefined;
            resourceInputs["partitionName"] = state ? state.partitionName : undefined;
            resourceInputs["sharedVlan"] = state ? state.sharedVlan : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as PartitionArgs | undefined;
            if ((!args || args.partitionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partitionName'");
            }
            resourceInputs["applicationType"] = args ? args.applicationType : undefined;
            resourceInputs["id1"] = args ? args.id1 : undefined;
            resourceInputs["partitionName"] = args ? args.partitionName : undefined;
            resourceInputs["sharedVlan"] = args ? args.sharedVlan : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Partition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Partition resources.
 */
export interface PartitionState {
    /**
     * 'adc': Application type ADC; 'cgnv6': Application type CGNv6;
     */
    applicationType?: pulumi.Input<string>;
    /**
     * Specify unique Partition id
     */
    id1?: pulumi.Input<number>;
    /**
     * Object partition name
     */
    partitionName?: pulumi.Input<string>;
    sharedVlan?: pulumi.Input<inputs.PartitionSharedVlan>;
    template?: pulumi.Input<inputs.PartitionTemplate>;
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
 * The set of arguments for constructing a Partition resource.
 */
export interface PartitionArgs {
    /**
     * 'adc': Application type ADC; 'cgnv6': Application type CGNv6;
     */
    applicationType?: pulumi.Input<string>;
    /**
     * Specify unique Partition id
     */
    id1?: pulumi.Input<number>;
    /**
     * Object partition name
     */
    partitionName: pulumi.Input<string>;
    sharedVlan?: pulumi.Input<inputs.PartitionSharedVlan>;
    template?: pulumi.Input<inputs.PartitionTemplate>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
