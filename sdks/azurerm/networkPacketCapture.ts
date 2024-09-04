// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkPacketCapture extends pulumi.CustomResource {
    /**
     * Get an existing NetworkPacketCapture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkPacketCaptureState, opts?: pulumi.CustomResourceOptions): NetworkPacketCapture {
        return new NetworkPacketCapture(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/networkPacketCapture:NetworkPacketCapture';

    /**
     * Returns true if the given object is an instance of NetworkPacketCapture.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkPacketCapture {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkPacketCapture.__pulumiType;
    }

    public readonly filters!: pulumi.Output<outputs.NetworkPacketCaptureFilter[] | undefined>;
    public readonly maximumBytesPerPacket!: pulumi.Output<number | undefined>;
    public readonly maximumBytesPerSession!: pulumi.Output<number | undefined>;
    public readonly maximumCaptureDuration!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkWatcherName!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly storageLocation!: pulumi.Output<outputs.NetworkPacketCaptureStorageLocation>;
    public readonly targetResourceId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkPacketCaptureTimeouts | undefined>;

    /**
     * Create a NetworkPacketCapture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkPacketCaptureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkPacketCaptureArgs | NetworkPacketCaptureState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkPacketCaptureState | undefined;
            resourceInputs["filters"] = state ? state.filters : undefined;
            resourceInputs["maximumBytesPerPacket"] = state ? state.maximumBytesPerPacket : undefined;
            resourceInputs["maximumBytesPerSession"] = state ? state.maximumBytesPerSession : undefined;
            resourceInputs["maximumCaptureDuration"] = state ? state.maximumCaptureDuration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkWatcherName"] = state ? state.networkWatcherName : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["storageLocation"] = state ? state.storageLocation : undefined;
            resourceInputs["targetResourceId"] = state ? state.targetResourceId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkPacketCaptureArgs | undefined;
            if ((!args || args.networkWatcherName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkWatcherName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageLocation'");
            }
            if ((!args || args.targetResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["maximumBytesPerPacket"] = args ? args.maximumBytesPerPacket : undefined;
            resourceInputs["maximumBytesPerSession"] = args ? args.maximumBytesPerSession : undefined;
            resourceInputs["maximumCaptureDuration"] = args ? args.maximumCaptureDuration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkWatcherName"] = args ? args.networkWatcherName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageLocation"] = args ? args.storageLocation : undefined;
            resourceInputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkPacketCapture.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkPacketCapture resources.
 */
export interface NetworkPacketCaptureState {
    filters?: pulumi.Input<pulumi.Input<inputs.NetworkPacketCaptureFilter>[]>;
    maximumBytesPerPacket?: pulumi.Input<number>;
    maximumBytesPerSession?: pulumi.Input<number>;
    maximumCaptureDuration?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    networkWatcherName?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    storageLocation?: pulumi.Input<inputs.NetworkPacketCaptureStorageLocation>;
    targetResourceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkPacketCaptureTimeouts>;
}

/**
 * The set of arguments for constructing a NetworkPacketCapture resource.
 */
export interface NetworkPacketCaptureArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.NetworkPacketCaptureFilter>[]>;
    maximumBytesPerPacket?: pulumi.Input<number>;
    maximumBytesPerSession?: pulumi.Input<number>;
    maximumCaptureDuration?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    networkWatcherName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    storageLocation: pulumi.Input<inputs.NetworkPacketCaptureStorageLocation>;
    targetResourceId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkPacketCaptureTimeouts>;
}
