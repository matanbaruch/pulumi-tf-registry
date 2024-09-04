// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DebugPacketCapture extends pulumi.CustomResource {
    /**
     * Get an existing DebugPacketCapture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DebugPacketCaptureState, opts?: pulumi.CustomResourceOptions): DebugPacketCapture {
        return new DebugPacketCapture(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/debugPacketCapture:DebugPacketCapture';

    /**
     * Returns true if the given object is an instance of DebugPacketCapture.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DebugPacketCapture {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DebugPacketCapture.__pulumiType;
    }

    /**
     * Specify capture-config. Default all (Capture config)
     */
    public readonly captureConfig!: pulumi.Output<string | undefined>;
    /**
     * Maximum packets to capture. Default is 10 (Specify maximum packet number. For unlimited, specify 0)
     */
    public readonly count1!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DebugPacketCapture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DebugPacketCaptureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DebugPacketCaptureArgs | DebugPacketCaptureState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DebugPacketCaptureState | undefined;
            resourceInputs["captureConfig"] = state ? state.captureConfig : undefined;
            resourceInputs["count1"] = state ? state.count1 : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DebugPacketCaptureArgs | undefined;
            resourceInputs["captureConfig"] = args ? args.captureConfig : undefined;
            resourceInputs["count1"] = args ? args.count1 : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DebugPacketCapture.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DebugPacketCapture resources.
 */
export interface DebugPacketCaptureState {
    /**
     * Specify capture-config. Default all (Capture config)
     */
    captureConfig?: pulumi.Input<string>;
    /**
     * Maximum packets to capture. Default is 10 (Specify maximum packet number. For unlimited, specify 0)
     */
    count1?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DebugPacketCapture resource.
 */
export interface DebugPacketCaptureArgs {
    /**
     * Specify capture-config. Default all (Capture config)
     */
    captureConfig?: pulumi.Input<string>;
    /**
     * Maximum packets to capture. Default is 10 (Specify maximum packet number. For unlimited, specify 0)
     */
    count1?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
