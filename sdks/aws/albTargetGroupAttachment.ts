// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AlbTargetGroupAttachment extends pulumi.CustomResource {
    /**
     * Get an existing AlbTargetGroupAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlbTargetGroupAttachmentState, opts?: pulumi.CustomResourceOptions): AlbTargetGroupAttachment {
        return new AlbTargetGroupAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/albTargetGroupAttachment:AlbTargetGroupAttachment';

    /**
     * Returns true if the given object is an instance of AlbTargetGroupAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlbTargetGroupAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlbTargetGroupAttachment.__pulumiType;
    }

    public readonly availabilityZone!: pulumi.Output<string | undefined>;
    public readonly port!: pulumi.Output<number | undefined>;
    public readonly targetGroupArn!: pulumi.Output<string>;
    public readonly targetId!: pulumi.Output<string>;

    /**
     * Create a AlbTargetGroupAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlbTargetGroupAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlbTargetGroupAttachmentArgs | AlbTargetGroupAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlbTargetGroupAttachmentState | undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["targetGroupArn"] = state ? state.targetGroupArn : undefined;
            resourceInputs["targetId"] = state ? state.targetId : undefined;
        } else {
            const args = argsOrState as AlbTargetGroupAttachmentArgs | undefined;
            if ((!args || args.targetGroupArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetGroupArn'");
            }
            if ((!args || args.targetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetId'");
            }
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["targetGroupArn"] = args ? args.targetGroupArn : undefined;
            resourceInputs["targetId"] = args ? args.targetId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlbTargetGroupAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlbTargetGroupAttachment resources.
 */
export interface AlbTargetGroupAttachmentState {
    availabilityZone?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    targetGroupArn?: pulumi.Input<string>;
    targetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AlbTargetGroupAttachment resource.
 */
export interface AlbTargetGroupAttachmentArgs {
    availabilityZone?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    targetGroupArn: pulumi.Input<string>;
    targetId: pulumi.Input<string>;
}
