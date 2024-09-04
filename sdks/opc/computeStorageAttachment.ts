// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeStorageAttachment extends pulumi.CustomResource {
    /**
     * Get an existing ComputeStorageAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeStorageAttachmentState, opts?: pulumi.CustomResourceOptions): ComputeStorageAttachment {
        return new ComputeStorageAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opc:index/computeStorageAttachment:ComputeStorageAttachment';

    /**
     * Returns true if the given object is an instance of ComputeStorageAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeStorageAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeStorageAttachment.__pulumiType;
    }

    public readonly index!: pulumi.Output<number>;
    public readonly instance!: pulumi.Output<string>;
    public readonly storageVolume!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeStorageAttachmentTimeouts | undefined>;

    /**
     * Create a ComputeStorageAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeStorageAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeStorageAttachmentArgs | ComputeStorageAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeStorageAttachmentState | undefined;
            resourceInputs["index"] = state ? state.index : undefined;
            resourceInputs["instance"] = state ? state.instance : undefined;
            resourceInputs["storageVolume"] = state ? state.storageVolume : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeStorageAttachmentArgs | undefined;
            if ((!args || args.index === undefined) && !opts.urn) {
                throw new Error("Missing required property 'index'");
            }
            if ((!args || args.instance === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instance'");
            }
            if ((!args || args.storageVolume === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageVolume'");
            }
            resourceInputs["index"] = args ? args.index : undefined;
            resourceInputs["instance"] = args ? args.instance : undefined;
            resourceInputs["storageVolume"] = args ? args.storageVolume : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeStorageAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeStorageAttachment resources.
 */
export interface ComputeStorageAttachmentState {
    index?: pulumi.Input<number>;
    instance?: pulumi.Input<string>;
    storageVolume?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeStorageAttachmentTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeStorageAttachment resource.
 */
export interface ComputeStorageAttachmentArgs {
    index: pulumi.Input<number>;
    instance: pulumi.Input<string>;
    storageVolume: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeStorageAttachmentTimeouts>;
}
