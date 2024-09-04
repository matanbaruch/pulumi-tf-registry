// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkmanagerConnection extends pulumi.CustomResource {
    /**
     * Get an existing NetworkmanagerConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkmanagerConnectionState, opts?: pulumi.CustomResourceOptions): NetworkmanagerConnection {
        return new NetworkmanagerConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/networkmanagerConnection:NetworkmanagerConnection';

    /**
     * Returns true if the given object is an instance of NetworkmanagerConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkmanagerConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkmanagerConnection.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly connectedDeviceId!: pulumi.Output<string>;
    public readonly connectedLinkId!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly deviceId!: pulumi.Output<string>;
    public readonly globalNetworkId!: pulumi.Output<string>;
    public readonly linkId!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkmanagerConnectionTimeouts | undefined>;

    /**
     * Create a NetworkmanagerConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkmanagerConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkmanagerConnectionArgs | NetworkmanagerConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkmanagerConnectionState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["connectedDeviceId"] = state ? state.connectedDeviceId : undefined;
            resourceInputs["connectedLinkId"] = state ? state.connectedLinkId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceId"] = state ? state.deviceId : undefined;
            resourceInputs["globalNetworkId"] = state ? state.globalNetworkId : undefined;
            resourceInputs["linkId"] = state ? state.linkId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkmanagerConnectionArgs | undefined;
            if ((!args || args.connectedDeviceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectedDeviceId'");
            }
            if ((!args || args.deviceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceId'");
            }
            if ((!args || args.globalNetworkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'globalNetworkId'");
            }
            resourceInputs["connectedDeviceId"] = args ? args.connectedDeviceId : undefined;
            resourceInputs["connectedLinkId"] = args ? args.connectedLinkId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceId"] = args ? args.deviceId : undefined;
            resourceInputs["globalNetworkId"] = args ? args.globalNetworkId : undefined;
            resourceInputs["linkId"] = args ? args.linkId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkmanagerConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkmanagerConnection resources.
 */
export interface NetworkmanagerConnectionState {
    arn?: pulumi.Input<string>;
    connectedDeviceId?: pulumi.Input<string>;
    connectedLinkId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceId?: pulumi.Input<string>;
    globalNetworkId?: pulumi.Input<string>;
    linkId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetworkmanagerConnectionTimeouts>;
}

/**
 * The set of arguments for constructing a NetworkmanagerConnection resource.
 */
export interface NetworkmanagerConnectionArgs {
    connectedDeviceId: pulumi.Input<string>;
    connectedLinkId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceId: pulumi.Input<string>;
    globalNetworkId: pulumi.Input<string>;
    linkId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetworkmanagerConnectionTimeouts>;
}
