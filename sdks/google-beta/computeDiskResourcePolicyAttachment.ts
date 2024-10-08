// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeDiskResourcePolicyAttachment extends pulumi.CustomResource {
    /**
     * Get an existing ComputeDiskResourcePolicyAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeDiskResourcePolicyAttachmentState, opts?: pulumi.CustomResourceOptions): ComputeDiskResourcePolicyAttachment {
        return new ComputeDiskResourcePolicyAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/computeDiskResourcePolicyAttachment:ComputeDiskResourcePolicyAttachment';

    /**
     * Returns true if the given object is an instance of ComputeDiskResourcePolicyAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeDiskResourcePolicyAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeDiskResourcePolicyAttachment.__pulumiType;
    }

    /**
     * The name of the disk in which the resource policies are attached to.
     */
    public readonly disk!: pulumi.Output<string>;
    /**
     * The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeDiskResourcePolicyAttachmentTimeouts | undefined>;
    /**
     * A reference to the zone where the disk resides.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a ComputeDiskResourcePolicyAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeDiskResourcePolicyAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeDiskResourcePolicyAttachmentArgs | ComputeDiskResourcePolicyAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeDiskResourcePolicyAttachmentState | undefined;
            resourceInputs["disk"] = state ? state.disk : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as ComputeDiskResourcePolicyAttachmentArgs | undefined;
            if ((!args || args.disk === undefined) && !opts.urn) {
                throw new Error("Missing required property 'disk'");
            }
            resourceInputs["disk"] = args ? args.disk : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeDiskResourcePolicyAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeDiskResourcePolicyAttachment resources.
 */
export interface ComputeDiskResourcePolicyAttachmentState {
    /**
     * The name of the disk in which the resource policies are attached to.
     */
    disk?: pulumi.Input<string>;
    /**
     * The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeDiskResourcePolicyAttachmentTimeouts>;
    /**
     * A reference to the zone where the disk resides.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeDiskResourcePolicyAttachment resource.
 */
export interface ComputeDiskResourcePolicyAttachmentArgs {
    /**
     * The name of the disk in which the resource policies are attached to.
     */
    disk: pulumi.Input<string>;
    /**
     * The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeDiskResourcePolicyAttachmentTimeouts>;
    /**
     * A reference to the zone where the disk resides.
     */
    zone?: pulumi.Input<string>;
}
