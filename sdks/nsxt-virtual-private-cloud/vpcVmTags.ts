// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcVmTags extends pulumi.CustomResource {
    /**
     * Get an existing VpcVmTags resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcVmTagsState, opts?: pulumi.CustomResourceOptions): VpcVmTags {
        return new VpcVmTags(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt-virtual-private-cloud:index/vpcVmTags:VpcVmTags';

    /**
     * Returns true if the given object is an instance of VpcVmTags.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcVmTags {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcVmTags.__pulumiType;
    }

    public readonly tags!: pulumi.Output<outputs.VpcVmTagsTag[] | undefined>;
    /**
     * External ID of the VM
     */
    public readonly virtualMachineId!: pulumi.Output<string>;

    /**
     * Create a VpcVmTags resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcVmTagsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcVmTagsArgs | VpcVmTagsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcVmTagsState | undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["virtualMachineId"] = state ? state.virtualMachineId : undefined;
        } else {
            const args = argsOrState as VpcVmTagsArgs | undefined;
            if ((!args || args.virtualMachineId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachineId'");
            }
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualMachineId"] = args ? args.virtualMachineId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcVmTags.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcVmTags resources.
 */
export interface VpcVmTagsState {
    tags?: pulumi.Input<pulumi.Input<inputs.VpcVmTagsTag>[]>;
    /**
     * External ID of the VM
     */
    virtualMachineId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcVmTags resource.
 */
export interface VpcVmTagsArgs {
    tags?: pulumi.Input<pulumi.Input<inputs.VpcVmTagsTag>[]>;
    /**
     * External ID of the VM
     */
    virtualMachineId: pulumi.Input<string>;
}
