// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeState, opts?: pulumi.CustomResourceOptions): Volume {
        return new Volume(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesiscloud:index/volume:Volume';

    /**
     * Returns true if the given object is an instance of Volume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Volume {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Volume.__pulumiType;
    }

    /**
     * The timestamp when this volume was created in RFC 3339.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The human-readable description for the volume. - Sets the default value "" if the attribute is not set.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The human-readable name for the volume.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    /**
     * Flag to retain the volume when the resource is deleted - Sets the default value "false" if the attribute is not set.
     */
    public readonly retainOnDelete!: pulumi.Output<boolean>;
    public readonly size!: pulumi.Output<number>;
    /**
     * The volume status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.VolumeTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VolumeArgs | VolumeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VolumeState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["retainOnDelete"] = state ? state.retainOnDelete : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as VolumeArgs | undefined;
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.size === undefined) && !opts.urn) {
                throw new Error("Missing required property 'size'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["retainOnDelete"] = args ? args.retainOnDelete : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Volume.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Volume resources.
 */
export interface VolumeState {
    /**
     * The timestamp when this volume was created in RFC 3339.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The human-readable description for the volume. - Sets the default value "" if the attribute is not set.
     */
    description?: pulumi.Input<string>;
    /**
     * The human-readable name for the volume.
     */
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    /**
     * Flag to retain the volume when the resource is deleted - Sets the default value "false" if the attribute is not set.
     */
    retainOnDelete?: pulumi.Input<boolean>;
    size?: pulumi.Input<number>;
    /**
     * The volume status.
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VolumeTimeouts>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    /**
     * The human-readable description for the volume. - Sets the default value "" if the attribute is not set.
     */
    description?: pulumi.Input<string>;
    /**
     * The human-readable name for the volume.
     */
    name?: pulumi.Input<string>;
    region: pulumi.Input<string>;
    /**
     * Flag to retain the volume when the resource is deleted - Sets the default value "false" if the attribute is not set.
     */
    retainOnDelete?: pulumi.Input<boolean>;
    size: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.VolumeTimeouts>;
    type: pulumi.Input<string>;
}
