// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AsAttachment extends pulumi.CustomResource {
    /**
     * Get an existing AsAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AsAttachmentState, opts?: pulumi.CustomResourceOptions): AsAttachment {
        return new AsAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/asAttachment:AsAttachment';

    /**
     * Returns true if the given object is an instance of AsAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AsAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AsAttachment.__pulumiType;
    }

    /**
     * ID list of CVM instances to be attached to the scaling group.
     */
    public readonly instanceIds!: pulumi.Output<string[]>;
    /**
     * ID of a scaling group.
     */
    public readonly scalingGroupId!: pulumi.Output<string>;

    /**
     * Create a AsAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AsAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AsAttachmentArgs | AsAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AsAttachmentState | undefined;
            resourceInputs["instanceIds"] = state ? state.instanceIds : undefined;
            resourceInputs["scalingGroupId"] = state ? state.scalingGroupId : undefined;
        } else {
            const args = argsOrState as AsAttachmentArgs | undefined;
            if ((!args || args.instanceIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceIds'");
            }
            if ((!args || args.scalingGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scalingGroupId'");
            }
            resourceInputs["instanceIds"] = args ? args.instanceIds : undefined;
            resourceInputs["scalingGroupId"] = args ? args.scalingGroupId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AsAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AsAttachment resources.
 */
export interface AsAttachmentState {
    /**
     * ID list of CVM instances to be attached to the scaling group.
     */
    instanceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of a scaling group.
     */
    scalingGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AsAttachment resource.
 */
export interface AsAttachmentArgs {
    /**
     * ID list of CVM instances to be attached to the scaling group.
     */
    instanceIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of a scaling group.
     */
    scalingGroupId: pulumi.Input<string>;
}
