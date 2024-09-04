// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Maskingview extends pulumi.CustomResource {
    /**
     * Get an existing Maskingview resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MaskingviewState, opts?: pulumi.CustomResourceOptions): Maskingview {
        return new Maskingview(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powermax:index/maskingview:Maskingview';

    /**
     * Returns true if the given object is an instance of Maskingview.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Maskingview {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Maskingview.__pulumiType;
    }

    /**
     * The host group id of the masking view.
     */
    public readonly hostGroupId!: pulumi.Output<string>;
    /**
     * The host id of the masking view.
     */
    public readonly hostId!: pulumi.Output<string>;
    /**
     * Unique identifier of the masking view. (Update Supported)
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The port group id of the masking view.
     */
    public readonly portGroupId!: pulumi.Output<string>;
    /**
     * The storage group id of the masking view.
     */
    public readonly storageGroupId!: pulumi.Output<string>;

    /**
     * Create a Maskingview resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MaskingviewArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MaskingviewArgs | MaskingviewState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MaskingviewState | undefined;
            resourceInputs["hostGroupId"] = state ? state.hostGroupId : undefined;
            resourceInputs["hostId"] = state ? state.hostId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portGroupId"] = state ? state.portGroupId : undefined;
            resourceInputs["storageGroupId"] = state ? state.storageGroupId : undefined;
        } else {
            const args = argsOrState as MaskingviewArgs | undefined;
            if ((!args || args.hostGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostGroupId'");
            }
            if ((!args || args.hostId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostId'");
            }
            if ((!args || args.portGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portGroupId'");
            }
            if ((!args || args.storageGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageGroupId'");
            }
            resourceInputs["hostGroupId"] = args ? args.hostGroupId : undefined;
            resourceInputs["hostId"] = args ? args.hostId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portGroupId"] = args ? args.portGroupId : undefined;
            resourceInputs["storageGroupId"] = args ? args.storageGroupId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Maskingview.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Maskingview resources.
 */
export interface MaskingviewState {
    /**
     * The host group id of the masking view.
     */
    hostGroupId?: pulumi.Input<string>;
    /**
     * The host id of the masking view.
     */
    hostId?: pulumi.Input<string>;
    /**
     * Unique identifier of the masking view. (Update Supported)
     */
    name?: pulumi.Input<string>;
    /**
     * The port group id of the masking view.
     */
    portGroupId?: pulumi.Input<string>;
    /**
     * The storage group id of the masking view.
     */
    storageGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Maskingview resource.
 */
export interface MaskingviewArgs {
    /**
     * The host group id of the masking view.
     */
    hostGroupId: pulumi.Input<string>;
    /**
     * The host id of the masking view.
     */
    hostId: pulumi.Input<string>;
    /**
     * Unique identifier of the masking view. (Update Supported)
     */
    name?: pulumi.Input<string>;
    /**
     * The port group id of the masking view.
     */
    portGroupId: pulumi.Input<string>;
    /**
     * The storage group id of the masking view.
     */
    storageGroupId: pulumi.Input<string>;
}
